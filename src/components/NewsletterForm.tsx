import { useState } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';
type Variant = 'footer' | 'sidebar';

interface NewsletterFormProps {
  variant?: Variant;
}

export function NewsletterForm({ variant = 'footer' }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState('loading');
    setErrorMessage('');

    try {
      // Use URL params to pass email (works with Cloudflare adapter dev mode)
      const response = await fetch(`/api/newsletter?email=${encodeURIComponent(email)}`, {
        method: 'POST',
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setState('success');
      setEmail('');
    } catch (error) {
      setState('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  if (state === 'success') {
    return variant === 'sidebar' ? (
      <div className="text-center py-4">
        <p className="text-white font-bold text-lg">You're in!</p>
        <p className="text-white/80 text-sm mt-1">Check your inbox to confirm.</p>
      </div>
    ) : (
      <div className="flex items-center gap-2 text-emerald-600">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-sm font-medium">You're in! Check your inbox.</span>
      </div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email..."
          disabled={state === 'loading'}
          required
          className="w-full bg-white/20 border border-white/30 rounded-lg py-2 px-4 placeholder:text-white/70 text-white focus:ring-white focus:border-white transition-all outline-none disabled:opacity-50"
        />
        {state === 'error' && (
          <p className="text-white/90 text-xs bg-white/20 rounded px-2 py-1">{errorMessage}</p>
        )}
        <button
          type="submit"
          disabled={state === 'loading'}
          className="w-full bg-white text-primary font-extrabold py-3 rounded-lg hover:bg-gray-50 transition-colors uppercase text-sm tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state === 'loading' ? 'Joining...' : "Let's Get Confused"}
        </button>
      </form>
    );
  }

  // Footer variant
  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="flex gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          disabled={state === 'loading'}
          required
          className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={state === 'loading'}
          className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-primary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {state === 'loading' ? '...' : 'Join'}
        </button>
      </div>
      {state === 'error' && (
        <p className="text-red-500 text-xs">{errorMessage}</p>
      )}
    </form>
  );
}