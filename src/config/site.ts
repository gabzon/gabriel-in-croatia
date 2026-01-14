// Site-wide configuration
// Update these values to change your current status across the site

export const siteConfig = {
  name: 'Gabriel in Croatia',
  tagline: 'A Venezuelan\'s Guide to Cultural Confusion',
  description: 'I make Croatian culture make sense by not understanding it at all.',
  author: {
    name: 'Gabriel',
    bio: 'I came for the sunshine, stayed because I\'m still trying to figure out how the bus schedule works. This is my attempt at living the Mediterranean life while keeping my Latino soul intact.',
  },
  // Hero section - change these to update the homepage hero
  hero: {
    quote: '"Wait, so \'Pomalo\' means everything and nothing at the same time?"',
    quoteAttribution: '— Split, October 2023',
  },
  // Current status - update these whenever you want!
  status: {
    mood: 'Trying to find cilantro',
    confusionLevel: 92, // percentage
    temperature: 'Too Cold (Bura is real)',
    socialBattery: 'Trying to be Slavic',
    location: {
      city: 'Split',
      region: 'Dalmatian Coast',
      country: 'Croatia',
    },
  },
  social: {
    instagram: 'https://www.instagram.com/gabrielincroatia/',
    tiktok: 'https://www.tiktok.com/@gabrielincroatia',
    youtube: 'https://www.youtube.com/@GabrielinCroatia',
  },
  nav: [
    { label: 'Stories', href: '/blog' },
    { label: 'The Struggle', href: '/blog?category=latino-vs-slavic' },
    { label: 'Maps', href: '#' },
  ],
};

// Category display configuration
export const categoryConfig = {
  'latino-vs-slavic': {
    label: 'Latino vs. Slavic',
    color: 'primary',
    bgColor: 'bg-primary/10',
    textColor: 'text-primary',
    icon: 'ArrowLeftRight',
  },
  'adventure': {
    label: 'Adventure Diaries',
    color: 'blue-500',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-500',
    icon: 'Compass',
  },
  'language': {
    label: 'Language Struggle',
    color: 'yellow-500',
    bgColor: 'bg-yellow-500/10',
    textColor: 'text-yellow-500',
    icon: 'Languages',
  },
  'hidden-stories': {
    label: 'Hidden Stories',
    color: 'emerald-500',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-500',
    icon: 'BookOpen',
  },
} as const;

export type CategoryKey = keyof typeof categoryConfig;
