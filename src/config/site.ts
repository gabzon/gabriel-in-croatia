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
    quoteAttribution: '— Zadar, October 2021',
  },
  // Current status - update these whenever you want!
  // Use enum keys from temperatureConfig and socialBatteryConfig below
  status: {
    mood: 'Trying to find cilantro',
    confusionLevel: 92, // percentage (1-100)
    temperature: 'too-cold' as const,
    socialBattery: 'medium' as const,
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
  'language': {
    label: 'Language Struggle',
    color: 'yellow-500',
    bgColor: 'bg-yellow-500/10',
    textColor: 'text-yellow-500',
    icon: 'Languages',
  },
  'adventure': {
    label: 'Adventure Diaries',
    color: 'blue-500',
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-500',
    icon: 'Compass',
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

// Region configuration for location card descriptions
export const regionConfig = {
  dalmatia: "Where 'pomalo' is a lifestyle",
  dubrovnik: 'Game of Thrones tour groups and €10 coffees',
  istria: 'Basically Italy, but Croatian',
  slavonia: 'Flat lands, big hearts, bigger portions',
  continental: 'Where people almost show up on time',
  kvarner: "The Riviera tourists haven't ruined yet",
  lika: 'Bears, lakes, and zero phone signal',
} as const;

export type RegionKey = keyof typeof regionConfig;

// Temperature configuration for status card
export const temperatureConfig = {
  freezing: 'Bura has entered the chat',
  'too-cold': 'Time for rakija therapy',
  cold: 'Jacket weather, finally',
  taman: 'The one day a year this happens',
  hot: 'Ice cream for breakfast is acceptable',
  'too-hot': 'Even the sea is sweating',
  burning: 'Hell borrowed our weather',
} as const;

export type TemperatureKey = keyof typeof temperatureConfig;

// Social battery configuration for status card
export const socialBatteryConfig = {
  full: 'Ready to kiss strangers on both cheeks',
  high: 'Can handle 3 coffee invitations',
  medium: "One 'ajmo na kavu' is my limit",
  low: "Pretending I don't speak Croatian",
  empty: 'Gone full Slavic introvert mode',
  negative: 'Might fake a phone call to escape',
} as const;

export type SocialBatteryKey = keyof typeof socialBatteryConfig;
