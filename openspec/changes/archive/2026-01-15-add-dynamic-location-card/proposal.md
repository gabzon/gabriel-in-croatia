# Change: Dynamic Location Card Based on Blog Post

## Why
The sidebar location card currently shows a hardcoded location ("Split"). When reading a blog post, the card should reflect where that post was written, providing contextual awareness of the author's location during that experience.

## What Changes
- Add optional `location` field (city name) to blog post frontmatter schema
- Add `region` enum field with predefined Croatian regions and funny descriptions
- Create `regionConfig` mapping in site.ts for region descriptions
- BlogPostLayout displays post's location and region description (defaults to "Zagreb" + "continental")
- Non-blog pages continue showing the default location from siteConfig

### Region Options
| Region | Description |
|--------|-------------|
| `dalmatia` | "Where 'pomalo' is a lifestyle" |
| `dubrovnik` | "Game of Thrones tour groups and €10 coffees" |
| `istria` | "Basically Italy, but Croatian" |
| `slavonia` | "Flat lands, big hearts, bigger portions" |
| `continental` | "Where people almost show up on time" |
| `kvarner` | "The Riviera tourists haven't ruined yet" |
| `lika` | "Bears, lakes, and zero phone signal" |

## Impact
- Affected specs: `pages`
- Affected code:
  - `src/content.config.ts` - Add location and region to schema
  - `src/config/site.ts` - Add regionConfig mapping
  - `src/layouts/BlogPostLayout.astro` - Use location and region description
