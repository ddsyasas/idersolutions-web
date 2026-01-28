# IDER Solutions - Web Development Portfolio Page Documentation

## Project Overview

Create a dedicated web development portfolio section for IDER Solutions website that showcases completed projects. This page will be accessible via direct URL only (not linked in header/footer navigation) for sharing with potential clients upon request.

---

## CRITICAL: Design Consistency Requirements

**This portfolio section MUST follow the exact same theme, style, and design language as the existing IDER Solutions website (idersolutions.com).**

### Before Development, Reference These From Current Site:
- **Color Palette:** Extract exact hex codes from the current site (primary, secondary, accent, text colors)
- **Typography:** Use the same font families, sizes, weights, and line heights
- **Spacing System:** Match padding, margins, and gaps used throughout the site
- **Button Styles:** Replicate existing button designs (colors, border-radius, hover states)
- **Card Styles:** If cards exist on the site, follow the same shadow, border-radius, and padding
- **Animation/Transitions:** Match any hover effects, transitions, or micro-interactions
- **Header/Footer:** While not adding navigation links, ensure visual consistency if header/footer appear on portfolio pages
- **Section Layouts:** Follow the same content width, container styles, and section spacing

### Design Checklist:
- [ ] Colors match existing site exactly
- [ ] Fonts and typography hierarchy are identical
- [ ] Button styles are consistent
- [ ] Spacing and layout patterns follow site conventions
- [ ] Hover/interaction states match site behavior
- [ ] Mobile responsiveness follows same breakpoints as main site
- [ ] Overall "feel" is indistinguishable from other pages on the site

**URL Structure:**
- Main portfolio page: `idersolutions.com/web-development-portfolio`
- Individual project pages: `idersolutions.com/web-development-portfolio/[project-slug]`

---

## Page Structure

### 1. Main Portfolio Page (`/web-development-portfolio`)

#### Hero Section
- Headline: "Our Web Development Portfolio"
- Subheadline: "Custom digital solutions crafted for businesses worldwide"
- Brief intro paragraph (2-3 sentences) about IDER's approach to web development
- No CTA button needed (this is a showcase page)

#### Filter Section
Implement filter functionality below the hero, above the project grid.

**Filter by Project Type:**
- All (default, shows all projects)
- E-Commerce
- Web Application
- Corporate Website
- Service Website
- SaaS Platform

**Filter by Location:**
- All (default)
- USA
- Sri Lanka

**Filter UI:**
- Use pill/button style filters (match existing site button styles)
- Allow combining filters (e.g., "E-Commerce" + "USA")
- Animate grid when filtering (smooth fade or slide)
- Show count of results (e.g., "Showing 4 of 11 projects")
- "Clear filters" option when filters are active

#### Project Grid Section
- Display all 11 projects as visual cards
- Grid layout: 3 columns on desktop, 2 on tablet, 1 on mobile
- Each card links to its dedicated project detail page

#### Card Component Design

```
┌─────────────────────────────────────┐
│  ★ FEATURED (if applicable)         │
│                                     │
│         [Project Screenshot]        │
│         (Featured Image)            │
│                                     │
├─────────────────────────────────────┤
│  PROJECT TYPE TAG    |  🇺🇸 USA     │
│                                     │
│  Project Name                       │
│  Brief one-line description         │
│                                     │
│  Tech: WordPress, Shopify, Custom   │
│                                     │
│  [View Project →]                   │
└─────────────────────────────────────┘
```

**Card Elements:**
- **Featured badge** (optional): Display on select high-impact projects (see Featured Projects list below)
- Featured screenshot (from project folder, use homepage or hero shot)
- Project type tag (e.g., "E-Commerce", "Web Application", "Corporate Website")
- Location flag/indicator (USA or Sri Lanka)
- Project name (client/brand name)
- One-line description
- **Tech stack pills** (e.g., "WordPress", "Shopify", "Custom Code", "React")
- Hover effect: subtle scale or shadow elevation (match existing site hover patterns)
- Click leads to full project detail page

**Featured Projects (show badge):**
- SyncSEO (flagship internal SaaS product)
- Founders Path (complex web application)
- My Golf Essentials (full ecosystem project)
- Traci Sanderson Artist (custom e-commerce solution)

#### Contact CTA Section (Bottom of Page)
Place a call-to-action section at the bottom of the portfolio page, after all project cards.

**CTA Content:**
- Headline: "Ready to Build Something Great?"
- Subheadline: "Let's discuss how we can bring your vision to life"
- Primary CTA Button: "Get a Free Consultation" (links to contact page or opens contact form)
- Secondary option: "View Our Pricing" (links to pricing page)

**Design Notes:**
- Use a subtle background color or gradient to differentiate from project grid
- Match CTA button style from existing site
- Keep it clean and not overly aggressive

---

### 2. Individual Project Pages (`/portfolio/[slug]`)

Each project gets a dedicated page with the following sections:

#### Section A: Project Header
- Project name (large heading)
- Client location/market (e.g., "USA", "Sri Lanka")
- Project type tag
- Live website link (external, opens in new tab)

#### Section B: Project Overview
- 2-3 paragraph description of the client and their business
- The challenge or goals they came to IDER with

#### Section C: What We Delivered
- List of services provided (Web Development, SEO, Branding, etc.)
- Technologies/platforms used (WordPress, Shopify, Custom Code, etc.)

#### Section D: Screenshot Gallery
- Multiple screenshots from the project folder
- Lightbox functionality for full-size viewing
- Responsive gallery layout (masonry or grid)

#### Section E: Key Features (Optional)
- Bullet points of notable features implemented
- Only include if the project has significant custom functionality

#### Section F: Navigation
- "Back to Portfolio" link
- Previous/Next project navigation

---

## Project Data

### Project 1: My Golf Essentials
- **Slug:** `mygolfessentials`
- **URL:** https://mygolfessentials.com/
- **Location:** USA
- **Type:** Community Platform / Content Hub
- **Filter Tags:** Community Platform, USA
- **Tech Stack:** Custom Development, CMS Integration
- **Featured:** Yes
- **Screenshots Folder:** `public/web-dev/mygolfessentials.com/`

**Description:**
MyGolfEssentials.com is a comprehensive online community and resource platform designed to improve golfers' performance on and off the course. It serves as a central hub for gear recommendations, health and wellness tips, and industry news.

**Key Features:**
- Health and Nutrition section with fitness programs and expert articles
- Gear and Technology guides with curated reviews
- Golf Directory (searchable resource center for coaches, stores, destinations)
- News and Community section for tournament updates and discussions

**Services Delivered:**
- Full website design and development
- Brand identity and design system
- Social media management
- Full-scale SEO optimization

---

### Project 2: My Golf Essentials Shop
- **Slug:** `mygolfessentials-shop`
- **URL:** https://shop.mygolfessentials.com/
- **Location:** USA
- **Type:** E-Commerce Store
- **Filter Tags:** E-Commerce, USA
- **Tech Stack:** Shopify
- **Featured:** No
- **Screenshots Folder:** `public/web-dev/shop.mygolfessentials.com/`

**Description:**
The official e-commerce store for My Health Essentials, selling premium performance supplements specifically designed for golfers and athletes. Products include Elite Greens Superfood, Elite Reds Superfood, Pure Creatine, and bundled health stacks.

**Key Features:**
- Shopify-powered storefront
- Product bundles and stacks
- Subscription-friendly product structure
- Seamless integration with main MGE website

**Services Delivered:**
- Full Shopify development
- E-commerce UX optimization
- SEO optimization
- Product photography integration

---

### Project 3: JW Marketing Co
- **Slug:** `jwmarketingco`
- **URL:** https://jwmarketingco.com/
- **Location:** USA (Napa, California)
- **Type:** Agency Website
- **Filter Tags:** Corporate Website, USA
- **Tech Stack:** Custom Code, WordPress (Headless CMS)
- **Featured:** No
- **Screenshots Folder:** `public/web-dev/jwmarketingco.com/`

**Description:**
JW Marketing Co is a digital marketing agency in Napa, California specializing in helping brands improve their online presence using data-driven strategies. They offer web design, social media management, digital advertising, content creation, and photography services.

**Key Features:**
- Headless CMS architecture (WordPress backend for blog, custom coded frontend)
- Automatic blog synchronization between WordPress and custom site
- Clean, modern agency aesthetic
- Service showcase with case studies

**Services Delivered:**
- Full-scale custom web development
- Headless CMS implementation
- Short-term digital marketing support
- Knowledge transfer for client takeover

**Tech Stack:** Custom code + WordPress headless CMS

---

### Project 4: Traci Sanderson Artist
- **Slug:** `tracisandersonartist`
- **URL:** https://tracisandersonartist.com/
- **Location:** USA (Yountville, California)
- **Type:** Art Gallery / E-Commerce
- **Filter Tags:** E-Commerce, USA
- **Tech Stack:** Custom Code, Shopify (Backend)
- **Featured:** Yes
- **Screenshots Folder:** `public/web-dev/tracisandersonartist.com/`

**Description:**
The official website for multidisciplinary fine artist Traci Sanderson. Functions as a digital gallery and storefront featuring original artwork, custom commissions, studio visits, and art advisory services.

**Key Features:**
- Fully custom-coded frontend with premium gallery aesthetic
- Shopify backend for order and payment handling
- Clean, minimal design befitting fine art presentation
- Custom commission request system
- Studio visit booking functionality

**Services Delivered:**
- Custom e-commerce solution development
- Gallery-style UI/UX design
- Shopify backend integration
- Art-focused visual presentation

**Tech Stack:** Custom code frontend + Shopify backend

---

### Project 5: A&R Termite Control
- **Slug:** `artermite`
- **URL:** https://artermite.com/
- **Location:** USA (San Mateo & Santa Clara Counties)
- **Type:** Service Business Website
- **Filter Tags:** Service Website, USA
- **Tech Stack:** WordPress, Elementor, Custom Code
- **Featured:** No
- **Screenshots Folder:** `public/web-dev/artermite.com/`

**Description:**
Website for A&R Termite Control, a family-owned company providing termite inspection, remediation, structural repairs, and maintenance services since 1976. Services include detailed assessments for homeowners and real estate transactions, targeted treatments, and preventive solutions.

**Key Features:**
- Service area focused design
- Real estate transaction support information
- Service request forms
- Trust signals (40+ years in business)

**Services Delivered:**
- Full WordPress development
- Elementor implementation with custom coding
- Full-scale SEO optimization
- Local business schema markup

**Tech Stack:** WordPress + Elementor + Custom code

---

### Project 6: Chef Rafael Molina
- **Slug:** `chefrafaelmolina`
- **URL:** https://chefrafaelmolina.com/
- **Location:** USA (Napa Valley)
- **Type:** Personal Chef / Service Website
- **Filter Tags:** Service Website, USA
- **Tech Stack:** WordPress, Elementor, Custom Code
- **Featured:** No
- **Screenshots Folder:** `public/web-dev/chefrafaelmolina.com/`

**Description:**
Professional website for Napa Valley-based culinary professional Chef Rafael Molina, specializing in elevated French-Mexican fusion and private dining experiences. Features private chef services, artisanal baked goods, weekly meal prep options, and a culinary blog.

**Key Features:**
- Service booking functionality
- Menu and service showcase
- Culinary blog section
- Visual food photography integration

**Services Delivered:**
- Full WordPress development
- Elementor implementation with custom coding
- SEO optimization
- Content structure for culinary blog

**Tech Stack:** WordPress + Elementor + Custom code

---

### Project 7: The Riverfront Napa
- **Slug:** `riverfrontnapa`
- **URL:** http://riverfrontnapa.com/
- **Location:** USA (Napa, California)
- **Type:** Commercial District / Destination Website
- **Filter Tags:** Corporate Website, USA
- **Tech Stack:** WordPress, Elementor, Custom Code
- **Featured:** No
- **Screenshots Folder:** `public/web-dev/riverfrontnapa.com/`

**Description:**
Official website for The Riverfront in downtown Napa, California. The development blends the historic Napa Mill with modern architecture to offer dining, shopping, and entertainment. The site guides visitors to restaurants like Morimoto Napa and Los Agaves, shops, and highlights attractions including the riverwalk and art installations.

**Key Features:**
- Interactive tenant directory
- Restaurant and shop listings
- Event and attraction highlights
- Location and parking information
- Riverwalk and art installation features

**Services Delivered:**
- Full WordPress development
- Elementor implementation with custom coding
- SEO optimization
- Multi-tenant directory system

**Tech Stack:** WordPress + Elementor + Custom code

---

### Project 8: Founders Path
- **Slug:** `founderspath`
- **URL:** https://founderspath.lk/
- **Location:** Sri Lanka
- **Type:** Web Application / Community Platform
- **Filter Tags:** Web Application, Sri Lanka
- **Tech Stack:** Custom Web Application
- **Featured:** Yes
- **Screenshots Folder:** `public/web-dev/founderspath.lk/`

**Description:**
FoundersPath is a structured startup education and community initiative in Sri Lanka, launched in 2025 to help entrepreneurs develop scalable ventures. It provides resources, mentorship, and a "Founder's Blueprint" roadmap covering stages from ideation to growth.

**Key Features:**
- Founder directory with searchable profiles
- Twitter-style founder feed for sharing growth updates
- Individual founder backend profiles (edit details, ventures, etc.)
- Super admin functionality for platform administrators
- Post reactions and comments system
- Individual founder profile pages that rank on Google
- Essentially a LinkedIn mini-version for founders

**Services Delivered:**
- Full-scale custom web application development
- User authentication and profile management
- Social feed functionality
- Admin dashboard development
- SEO-optimized founder profiles

**Tech Stack:** Custom web application

---

### Project 9: Yasas.dev
- **Slug:** `yasas-dev`
- **URL:** https://yasas.dev/
- **Location:** Sri Lanka
- **Type:** Personal Portfolio
- **Filter Tags:** Corporate Website, Sri Lanka
- **Tech Stack:** Custom Code
- **Featured:** No
- **Screenshots Folder:** `public/web-dev/yasas.dev/`

**Description:**
Professional portfolio website for Sajana Yasas, a material physics researcher, software developer, and SaaS builder. The platform showcases his work in SaaS and product development, including SyncSEO, startup mentorship with FoundersPath, and digital marketing services through IDER Solutions.

**Key Features:**
- Clean, modern developer portfolio design
- Project showcase section
- Professional background and skills
- Contact and connection points

**Services Delivered:**
- Personal portfolio website development
- Modern, minimal design implementation
- Responsive design

---

### Project 10: Dias Engineering & Construction
- **Slug:** `dec-lk`
- **URL:** https://dec.lk/
- **Location:** Sri Lanka
- **Type:** Corporate Website
- **Filter Tags:** Corporate Website, Sri Lanka
- **Tech Stack:** Custom Development
- **Featured:** No
- **Screenshots Folder:** `public/web-dev/dec.lk/`

**Description:**
Company website for Dias Engineering & Construction, a reputed Sri Lankan construction company. The site showcases their services and serves as a contact point for potential clients.

**Key Features:**
- Service showcase
- Company profile and history
- Project portfolio display
- Contact and inquiry forms

**Services Delivered:**
- Full website development
- Service presentation design
- Contact system implementation

---

### Project 11: SyncSEO
- **Slug:** `syncseo`
- **URL:** https://syncseo.io/
- **Location:** Sri Lanka (IDER Internal Project)
- **Type:** SaaS Platform
- **Filter Tags:** SaaS Platform, Web Application, Sri Lanka
- **Tech Stack:** Custom SaaS Web Application
- **Featured:** Yes
- **Screenshots Folder:** `public/web-dev/syncseo.io/`

**Description:**
SyncSEO.io is a visual content architecture platform and real-time SEO writing dashboard developed by IDER Solutions. It assists SEO professionals and content creators in managing complex content structures and building topical authority.

**Key Features:**
- Visual content mapping
- Interactive writing dashboard
- Dynamic internal linking suggestions
- Topical authority building tools
- Real-time SEO optimization feedback

**Services Delivered:**
- Full SaaS product development
- Web application architecture
- Ongoing feature development and improvements

**Tech Stack:** Custom SaaS web application

**Note:** This is an IDER Solutions internal product, highlight as "Developed by IDER Solutions"

---

## Design Guidelines

**IMPORTANT: Refer to the "CRITICAL: Design Consistency Requirements" section at the top of this document. The portfolio must be visually indistinguishable from the rest of the IDER Solutions website.**

### Visual Style
- Extract and match existing IDER Solutions website design language exactly
- Clean, modern, professional aesthetic (as per main site)
- Generous white space (match main site spacing)
- Subtle animations on hover/scroll (replicate existing site interactions)

### Typography
- Use exact same fonts as main site
- Clear hierarchy: Project names prominent, descriptions secondary
- Match font sizes, weights, and line-heights from existing pages

### Color Scheme
- Use exact hex codes from existing IDER Solutions brand
- Use accent colors sparingly for tags, badges, and CTAs (as per main site usage)

### Image Handling
- All screenshots located in `public/web-dev/[domain-folder]/`
- Use lazy loading for performance
- Implement responsive images (srcset)
- First image in each folder should be the featured/card image
- Support lightbox for gallery viewing

### Responsive Behavior
- Desktop: 3-column grid
- Tablet: 2-column grid
- Mobile: Single column, stacked cards
- Use same breakpoints as main site

### Filter UI
- Filter pills/buttons should match existing site button styles
- Active filter state should use site accent color
- Smooth animations when filtering (fade or slide)

---

## Technical Requirements

### URL Structure
```
/portfolio                          → Main portfolio grid page
/portfolio/mygolfessentials         → Project detail page
/portfolio/mygolfessentials-shop    → Project detail page
/portfolio/jwmarketingco            → Project detail page
/portfolio/tracisandersonartist     → Project detail page
/portfolio/artermite                → Project detail page
/portfolio/chefrafaelmolina         → Project detail page
/portfolio/riverfrontnapa           → Project detail page
/portfolio/founderspath             → Project detail page
/portfolio/yasas-dev                → Project detail page
/portfolio/dec-lk                   → Project detail page
/portfolio/syncseo                  → Project detail page
```

### SEO Considerations
- Each project page should have unique meta title and description
- Use proper heading hierarchy (H1 for project name, H2 for sections)
- Alt text for all images
- Schema markup for creative work/portfolio items (optional but recommended)

### Performance
- Optimize all images before deployment
- Implement lazy loading for images below the fold
- Consider using WebP format with fallbacks

### Navigation Notes
- Do NOT add portfolio link to main header or footer navigation
- Page should only be accessible via direct URL
- Include breadcrumb navigation on project detail pages

---

## Project Tags/Categories (For Filtering)

### By Project Type:

| Filter Tag | Projects |
|------------|----------|
| E-Commerce | My Golf Essentials Shop, Traci Sanderson Artist |
| Web Application | Founders Path, SyncSEO |
| Corporate Website | JW Marketing Co, A&R Termite, Riverfront Napa, Yasas.dev, DEC |
| Service Website | Chef Rafael Molina, A&R Termite |
| SaaS Platform | SyncSEO |
| Community Platform | My Golf Essentials, Founders Path |

### By Location:

| Location | Projects |
|----------|----------|
| USA | My Golf Essentials, MGE Shop, JW Marketing, Traci Sanderson, A&R Termite, Chef Rafael, Riverfront Napa |
| Sri Lanka | Founders Path, Yasas.dev, DEC, SyncSEO |

### Featured Projects:
- SyncSEO
- Founders Path
- My Golf Essentials
- Traci Sanderson Artist

---

## Content Priority Order

Display projects in this recommended order (showcasing range and complexity):

1. SyncSEO (SaaS, internal product, shows technical capability)
2. Founders Path (Complex web app)
3. My Golf Essentials (Full ecosystem)
4. My Golf Essentials Shop (E-commerce)
5. Traci Sanderson Artist (Custom e-commerce)
6. JW Marketing Co (Headless CMS)
7. Riverfront Napa (Multi-tenant directory)
8. Chef Rafael Molina (Service business)
9. A&R Termite (Local business)
10. DEC (Corporate)
11. Yasas.dev (Portfolio)

---

## File Structure Reference

```
public/
└── web-dev/
    ├── mygolfessentials.com/
    │   ├── screenshot-1.png
    │   ├── screenshot-2.png
    │   └── ...
    ├── shop.mygolfessentials.com/
    ├── jwmarketingco.com/
    ├── tracisandersonartist.com/
    ├── artermite.com/
    ├── chefrafaelmolina.com/
    ├── riverfrontnapa.com/
    ├── founderspath.lk/
    ├── yasas.dev/
    ├── dec.lk/
    └── syncseo.io/
```

---

## Implementation Checklist

### Design Consistency
- [ ] Extract exact color codes from existing IDER Solutions website
- [ ] Match typography (fonts, sizes, weights, line-heights)
- [ ] Replicate button styles and hover states
- [ ] Match spacing system and layout patterns
- [ ] Ensure mobile breakpoints align with main site

### Main Portfolio Page
- [ ] Create hero section with headline and intro
- [ ] Implement filter functionality (by type and location)
- [ ] Create project card component with all elements (featured badge, tech stack, location)
- [ ] Build responsive grid layout (3/2/1 columns)
- [ ] Add hover effects matching site style
- [ ] Implement contact CTA section at bottom
- [ ] Add filter result count display

### Project Detail Pages
- [ ] Create project page template
- [ ] Populate all 11 project pages with content
- [ ] Implement screenshot galleries with lightbox
- [ ] Add breadcrumb navigation
- [ ] Add previous/next project navigation
- [ ] Include live site links (open in new tab)

### Technical
- [ ] Set up URL routing for all pages
- [ ] Add meta tags for SEO on each page
- [ ] Implement lazy loading for images
- [ ] Optimize images (WebP with fallbacks)
- [ ] Test all external links

### Quality Assurance
- [ ] Test on mobile devices
- [ ] Test filter functionality
- [ ] Verify page is NOT linked in header/footer
- [ ] Cross-browser testing
- [ ] Final review of all content and images
- [ ] Verify design matches existing site exactly

---

*Documentation prepared for IDER Solutions development team*
*Last updated: January 2026*
