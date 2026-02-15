# DATA STRUCTURE REFERENCE
Quick reference for using the extracted WordPress data

---

## JSON Data Structure

### Blog Posts (extracted_posts.json)
```json
[
  {
    "title": "Blog Post Title",
    "slug": "url-friendly-slug",
    "date": "2024-04-06 05:12:00",
    "content": "<!-- wp:paragraph -->...",
    "excerpt": "Short preview text...",
    "author": "user",
    "post_id": "49",
    "categories": ["Aktuelles", "Reinigungsservice"],
    "tags": ["kaarst", "kifel service"],
    "yoast_seo": {
      "_yoast_wpseo_title": "SEO optimized title",
      "_yoast_wpseo_metadesc": "SEO meta description",
      "_yoast_wpseo_focuskw": "focus keyword"
    }
  }
]
```

### Pages (extracted_pages.json)
```json
[
  {
    "title": "Page Title",
    "slug": "url-friendly-slug",
    "date": "2024-04-12 04:15:42",
    "content": "<!-- wp:paragraph -->...",
    "excerpt": "",
    "author": "user",
    "post_id": "10",
    "parent_id": "0",
    "categories": [],
    "tags": [],
    "yoast_seo": {
      "_yoast_wpseo_title": "SEO optimized title",
      "_yoast_wpseo_metadesc": "SEO meta description"
    }
  }
]
```

### Site Data (site_data.json)
```json
{
  "site_info": {
    "title": "Kifel Service",
    "url": "https://kifel-service.com",
    "language": "de",
    "description": "..."
  },
  "contact": {
    "company": "Kifel Service e.K.",
    "address": "Justus-Liebig-Straße 3, 41564 Kaarst",
    "phone": "+49 2131 29 45 497",
    "email": "info@kifel-service.de"
  },
  "social_media": {
    "facebook": "https://www.facebook.com/KifelService",
    "instagram": "https://www.instagram.com/kifel.service/"
  }
}
```

---

## Content Format

WordPress content uses Gutenberg blocks. Common patterns:

### Paragraphs
```html
<!-- wp:paragraph -->
<p>Text content here</p>
<!-- /wp:paragraph -->
```

### Headings
```html
<!-- wp:heading -->
<h2 class="wp-block-heading">Heading Text</h2>
<!-- /wp:heading -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">Subheading</h3>
<!-- /wp:heading -->
```

### Lists
```html
<!-- wp:list -->
<ul class="wp-block-list">
  <!-- wp:list-item -->
  <li>List item</li>
  <!-- /wp:list-item -->
</ul>
<!-- /wp:list -->
```

### Links
```html
<a href="https://example.com">Link text</a>
```

---

## URL Structure Mapping

### Blog Posts
Original: `https://kifel-service.com/slug-name/`
New: `/blog/[slug]` or `/aktuelles/[slug]`

### Service Pages
Original: `https://kifel-service.com/services/service-name/`
New: `/services/[slug]`

### Main Pages
- `/` - Homepage (startseite)
- `/ueber-uns` - About
- `/services` - Services overview
- `/karriere` - Careers
- `/kontakt` - Contact
- `/aktuelles` - Blog listing

### Legal Pages
- `/impressum` - Legal notice
- `/datenschutz` - Privacy policy
- `/agb` - Terms and conditions

---

## Services Hierarchy

**Parent:** Services (slug: services, id: 22)

**Children:**
- Gebäudereinigung (gebaeudereinigung)
- Büroreinigung (bueroreinigung)
- Gewerbeimmobilien (gewerbeimmobilien)
- Hausmeisterservice (hausmeisterservice)
- Gartenpflege (gartenpflege)
- Objektschutz (objektschutz)
- Revierschutzfahrten (revierschutzfahrten)
- Bewachung (bewachung)
- Pfortendienst (pfortendienst)

---

## SEO Metadata Usage

Every page/post has Yoast SEO data. Use it in Next.js:

```javascript
// In your page component
export const metadata = {
  title: yoast_seo._yoast_wpseo_title || page.title,
  description: yoast_seo._yoast_wpseo_metadesc,
  keywords: yoast_seo._yoast_wpseo_focuskw
}
```

---

## Categories and Tags

### Categories (for navigation/filtering)
1. Aktuelles (Current news)
2. Angebote (Offers)
3. Reinigungsservice (Cleaning service)
4. Sicherheitsservice (Security service)

### Tags (for post taxonomy)
- aktuelles
- düsseldorf
- kaarst
- kifel service
- Neue Website
- Reinigungsdienstleistungen

---

## Image References

Images are referenced in content like:
```html
<a href="https://kifel-service.com/wp-content/uploads/2024/04/image.jpg">
```

You'll need to:
1. Download images from the old site
2. Place in `/public/images/`
3. Update URLs in content to `/images/filename.jpg`

---

## Quick Access Scripts

### Load all posts:
```javascript
const posts = require('./extracted_posts.json');
```

### Load all pages:
```javascript
const pages = require('./extracted_pages.json');
```

### Load site config:
```javascript
const siteData = require('./site_data.json');
```

### Get service pages only:
```javascript
const pages = require('./extracted_pages.json');
const services = pages.filter(p => p.parent_id === '22');
```

### Get legal pages:
```javascript
const pages = require('./extracted_pages.json');
const legal = pages.filter(p => 
  ['impressum', 'datenschutz', 'agb'].includes(p.slug)
);
```

---

## Content Conversion Tips

1. **Remove WordPress comments:** `<!-- wp:... -->`
2. **Keep semantic HTML:** `<h2>`, `<p>`, `<ul>`, etc.
3. **Convert to React/JSX:** Replace `class` with `className`
4. **Extract inline styles:** Move to Tailwind classes
5. **Preserve SEO structure:** Keep heading hierarchy

---

## File Sizes Reference
- extracted_posts.json: 31K (6 posts)
- extracted_pages.json: 107K (18 pages)
- CONTENT_POSTS.md: 30K
- CONTENT_PAGES.md: 101K
- CONTENT_SERVICES.md: 3.1K
- site_data.json: 1.7K

---

## All Files Ready For:
- Next.js data import
- Content migration
- SEO preservation
- URL structure planning
- Component development
