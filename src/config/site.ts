// Site-wide configuration
// Update these values to change your current status across the site

export const siteConfig = {
  name: 'Gabriel in Croatia',
  url: 'https://gabrielincroatia.com',
  tagline: 'A Venezuelan\'s Guide to Cultural Confusion',
  description: 'I make Croatian culture make sense by not understanding it at all.',
  // Geo coordinates for Croatia (Split)
  geo: {
    latitude: 43.5081,
    longitude: 16.4402,
    region: 'HR-17', // Split-Dalmatia County
    placename: 'Split, Croatia',
  },
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
    { label: 'The Struggle', href: '/blog' },
    { label: 'Guides', href: '/guides' },
    { label: 'Weekly', href: '/weekly' },
  ],
};

// Category display configuration
export const categoryConfig = {
  'latino-vs-slavic': {
    label: 'Latino vs. Slavic',
    color: 'primary',
    bgColor: 'bg-primary/10',
    activeBgColor: 'bg-primary',
    textColor: 'text-primary',
    icon: 'ArrowLeftRight',
  },
  'language': {
    label: 'Language Struggle',
    color: 'yellow-500',
    bgColor: 'bg-yellow-500/10',
    activeBgColor: 'bg-yellow-500',
    textColor: 'text-yellow-500',
    icon: 'Languages',
  },
  'adventure': {
    label: 'Adventure Diaries',
    color: 'blue-500',
    bgColor: 'bg-blue-500/10',
    activeBgColor: 'bg-blue-500',
    textColor: 'text-blue-500',
    icon: 'Compass',
  },
  'hidden-stories': {
    label: 'Hidden Stories',
    color: 'emerald-500',
    bgColor: 'bg-emerald-500/10',
    activeBgColor: 'bg-emerald-500',
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

// Guide type configuration for guides collection
export const guideTypeConfig = {
  food: {
    label: 'Food & Restaurants',
    color: 'orange-500',
    bgColor: 'bg-orange-500/10',
    activeBgColor: 'bg-orange-500',
    textColor: 'text-orange-500',
    icon: 'UtensilsCrossed',
  },
  drinks: {
    label: 'Cafes & Bars',
    color: 'amber-500',
    bgColor: 'bg-amber-500/10',
    activeBgColor: 'bg-amber-500',
    textColor: 'text-amber-500',
    icon: 'Coffee',
  },
  activities: {
    label: 'Things to Do',
    color: 'violet-500',
    bgColor: 'bg-violet-500/10',
    activeBgColor: 'bg-violet-500',
    textColor: 'text-violet-500',
    icon: 'Sparkles',
  },
  seasonal: {
    label: 'Seasonal',
    color: 'cyan-500',
    bgColor: 'bg-cyan-500/10',
    activeBgColor: 'bg-cyan-500',
    textColor: 'text-cyan-500',
    icon: 'Sun',
  },
  neighborhoods: {
    label: 'Neighborhoods',
    color: 'rose-500',
    bgColor: 'bg-rose-500/10',
    activeBgColor: 'bg-rose-500',
    textColor: 'text-rose-500',
    icon: 'MapPin',
  },
} as const;

export type GuideTypeKey = keyof typeof guideTypeConfig;

// Price range configuration for guides
export const priceRangeConfig = {
  budget: {
    label: 'Budget Friendly',
    description: "Won't break the bank",
    color: 'emerald-500',
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-500',
    icon: 'Wallet',
  },
  moderate: {
    label: 'Mid-Range',
    description: 'A fair deal',
    color: 'amber-500',
    bgColor: 'bg-amber-500/10',
    textColor: 'text-amber-500',
    icon: 'CreditCard',
  },
  luxury: {
    label: 'Luxury',
    description: 'I feel like a Kardashian',
    color: 'red-500',
    bgColor: 'bg-red-500/10',
    textColor: 'text-red-500',
    icon: 'Gem',
  },
} as const;

export type PriceRangeKey = keyof typeof priceRangeConfig;
