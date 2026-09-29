# Netfluence design system

Every page follows this system: Home, Services, Work, About, Contact and the 404 page, plus the shared header and footer.

## Where things live

- **Tokens:** `src/styles/site.css`, along with the header, footer and buttons.
- **Shared blocks:** `src/components/site/blocks.jsx`, styled in `src/styles/components.css`. They are:
  - the page hero and the closing call to action
  - the brand shader
  - project cards, service rows, quotes, the team grid and the process steps
- **Real content:** `src/data/site.js` is the single source for projects, testimonials, team and steps. Contact details, services, each page's title and description, and the structured data live in `src/data/meta.js` (no image imports, so the build can read it). Edit them there, not on the pages.
- **Page-only styles:** `src/styles/home.css` for the homepage and `src/styles/pages/*.css` for the other pages. These use tokens only.
- **Services:** the four services are websites, custom software, web and mobile apps, and hosting and maintenance. Each has a section on /services whose id is its slug, and rows elsewhere link to `/services#<slug>`.

## Direction

- **Audience:** owners of local businesses in and around Montréal.
- **How it should feel:** real, competent and direct. You're dealing with the two people who build the site, not an agency.
- **Proof comes from real material only:** live client sites (screenshots taken from the sites themselves), real client quotes, and real photos of the founders. Don't invent stats, logos or testimonials.
- **Don't open with the work.** The hero is the headline over a slow WebGL mesh gradient (Paper Shaders `MeshGradient`, adapted from 21st.dev hero 5649). The gradient uses only the brand ramp, from near-black through navy to the logo blue, with film grain. Projects follow directly after the hero, in a gallery the visitor moves through.
- **Hero shader rules:**
  - Keep the light toward the lower right, away from the nav and the headline.
  - A dark scrim on the left and top keeps text readable.
  - The shader fades and scales as you scroll away, and pauses once it's off screen.
  - Without WebGL, the page shows the plain background instead.
- **Things to avoid:**
  - gradient blobs and glows (the brand shader is the one exception: full strength in the hero, quieter behind the closing call to action)
  - fake code editors
  - pill badges on every section
  - uppercase monospace labels above headings
  - two-tone headlines
  - fade-up animation on every section
  - grids of identical icon cards
  - a custom cursor

## Tokens (`src/styles/site.css`)

| Role | Value | Source / note |
|---|---|---|
| Brand | `#38B6FF` | Sampled from the blue in the logo |
| Background | `#111417` | Neutral tinted toward the brand hue |
| Raised surface | `#181C20`, `#1F2428` | Dark mode shows elevation with lighter surfaces |
| Text | `#F2F8FC` / `#9EA6AB` / `#81898E` | Primary, secondary, meta |
| Lines | `rgb(214 226 234 / .09)` | Hairlines only, no boxes |
| Label on brand | `#0B1014` | Dark label on the blue passes at 7.8:1; white fails at 2.3:1 |

- **Type:** Instrument Sans for everything, with Geist Mono only for domain names. Body is 17px at 1.55 line height, max 65ch. Large type uses weight 500, not bold. The hero goes up to 120px at −0.045em tracking, and section titles use −0.03em.
- **Wordmark:** "Netfluence" is typeset in Instrument Sans 600 at −0.035em. The raster logo files aren't used on the site.
- **Spacing:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128.
- **Grid:** 4 columns on mobile and 12 from 768px up. Content maxes out at 1200px, with 20, 40 or 48px gutters.
- **Radius:** 8px on controls and 12px on containers.

## Motion

Only two kinds.

1. **On load:** the hero headline lines rise out of a mask, then the text below fades in.
2. **Scroll-scrubbed:** tied to scroll position, never on a timer.
   - The hero headline drifts up and dims as you leave it.
   - Vertical scroll moves the project gallery sideways while pinned. This applies from 768px up; phones get a native swipe row instead.
   - A line fills beside the process steps.

Everything uses `cubic-bezier(.23,1,.32,1)`, and buttons press to `scale(.97)`. With reduced motion turned on, nothing pins or scrubs.

The scrubbed gallery is the page's one crafted moment. Don't add scroll effects to other sections.

## Details that carry the page

Each of these comes from real content, not decoration:
- project type and tech stack on each gallery card, taken from the portfolio data
- a live "03 / 05" counter in the gallery
- service rows that highlight on hover, with an arrow that fills in the brand blue
- a thumbnail of each client's own site beside their quote
- dots on the process line that light up as each step is reached

## Assets

`src/assets/images/home/` holds the client screenshots (1200×750 WebP) and the founder photos. When a client site changes, re-take its screenshot at 1440×900 and crop it to 16:10.
