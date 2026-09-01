# WWE Database - Project Conventions

## Architecture
- React 19 + Vite 7, single-page application
- Data-heavy app: ~1,121 wrestler entries with associated metadata
- Single view: search/filter bar + wrestler browse list, with the detail panel opening as a slide-over drawer
- No simulation, quiz, or AI features — this is a pure browse/reference database
- State management: React useState/useMemo hooks (no external state library)
- Persistence: localStorage for favorites and notes

## Project Structure
```
src/
  data/           # Pure data files (.js exports). Do NOT use JSON
    index.js      # Merge logic + barrel re-exports (single import point for data)
    wrestlers.js  # Core wrestler array (id, name, realName, eras, championships)
    extra.js      # Injuries, tag teams, factions (keyed by wrestler ID)
    relationships.js  # Alternate names, allies, rivals (keyed by wrestler ID)
    images.js     # Wrestler photo URLs (keyed by wrestler ID)
    bio.js        # Hometown, birthday, height, weight (keyed by wrestler ID)
    personal.js   # Spouses, children, legal issues, facts (keyed by wrestler ID)
    eras.js       # ERAS array and ERA_COLORS mapping
  components/     # React components (one component per file)
    tabs/         # Detail panel tab components
  utils/          # Pure utility functions (no React)
  styles/         # CSS files
```

## Data Conventions
- All supplemental data keyed by wrestler ID (integer)
- WRESTLERS_MERGED is the merged view created in data/index.js — components read from this
- Death entries stored in EXTRA injuries with text matching /Died|Death|Passed away|Fatal|murder-suicide/
- The merge logic separates these into a `deceased` field
- `isTagTeam()` filter excludes 124 tag team/group entries from the wrestler list
- Data files use `export default` (single export) except eras.js (named exports)

## Naming Conventions
- Components: PascalCase filenames (e.g., WrestlerCard.jsx)
- Data files: camelCase (e.g., wrestlers.js, wrestlerHelpers.js)
- CSS classes: kebab-case (e.g., .era-pill, .tab-btn)
- Constants: UPPER_SNAKE_CASE (e.g., ERAS, ERA_COLORS, PLACEHOLDER_COLORS)

## Styling
- Reusable CSS classes in styles/WWEDatabase.css
- Dynamic/conditional styles remain as inline style={{}} objects
- Fonts: Oswald (headings, labels) and Crimson Pro (body text, descriptions)
- Color palette: gold (#FFD700) primary, dark backgrounds (#0a0a0a, #0d0d0d)

## Commands
- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run lint` — ESLint check
- `npm run format` — Prettier format
- `npm run format:check` — Prettier check (CI-friendly)
- `npm run preview` — Preview production build

## Important Notes
- Do NOT convert data files to JSON — they are .js for commenting and export syntax
- When adding wrestlers, add entries to ALL relevant data files
- Image URLs are not predictable — must be manually found on wwe.com or onlineworldofwrestling.com
- Never use upload.wikimedia.org/wikipedia/en/ (blocked) or thesmackdownhotel.com (blocked)
- Preferred sources: wwe.com (/Profile/ paths), onlineworldofwrestling.com, wikimedia commons
- The isTagTeam() regex in utils/wrestlerHelpers.js must be updated when new group entries are added
- Large data files are excluded from Prettier via .prettierignore
- ESLint warns (not errors) on duplicate keys in data files — these should be cleaned up when found

## Error Boundaries
- The whole app is wrapped in a top-level `<ErrorBoundary>`, and DetailPanel has its own nested `<ErrorBoundary featureName="Detail Panel">`
- Component: `src/components/ErrorBoundary.jsx`
- Crashes show a recovery UI with "Try Again" instead of white-screening the app

## Testing
- Vitest is configured; run `npm test` to execute
- Test files live in `src/utils/__tests__/` and `src/data/__tests__/`
- 164 tests across 3 files covering wrestlerHelpers, filterHelpers, and data integrity

## Lazy-loaded Data
- `wiki.js` and `personal.js` are lazy-loaded via async getters (`getWikiData()`, `getPersonalData()`) in `src/data/index.js`
- `promos.js`, `matches.js`, and `trainers.js` are lazy-loaded via direct dynamic `import()` inside `src/utils/wikiSections.js` (bypassing the barrel getters) — they populate the wiki tab's Promos, Notable Matches, and Training Lineage sections
- All other data files are statically imported

## Barrel Imports
- All component data imports should go through `src/data/index.js` barrel (e.g., `import { WRESTLERS_MERGED, THEMES } from '../data'`)
- Avoid direct imports from individual data files

## localStorage Keys
- All localStorage keys use hyphens: `wwe-*` (e.g., `wwe-theme`, `wwe-auction-history`)
- Never use underscores in localStorage key names

## Wrestler Search Dropdowns
- All wrestler picker/search inputs should use the dropdown autocomplete pattern
- Structure: `position:relative` container, `position:absolute` dropdown, click-outside close handler, `max-height: 250px` with scroll
