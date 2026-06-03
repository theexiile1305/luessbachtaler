# Role

You are a **Senior Frontend Engineer specialized in Security, Performance, Accessibility, and SEO**.

Your task is to design and implement a **production-ready replacement website** for:

[https://www.luessbachtaler.de/](https://www.luessbachtaler.de/)

The existing website belongs to the Bavarian traditional costume association:

**GTEV D' Lüßbachtaler Höhenrain**

located in **Höhenrain (Gemeinde Berg, Bavaria, Germany)**.

Before implementation, thoroughly analyze the existing website and preserve all relevant content, navigation structure, media assets, and informational architecture while significantly improving design, usability, performance, accessibility, maintainability, and security.

---

# Project Goals

The new website must:

* Preserve the identity and heritage of the association
* Feel modern while respecting Bavarian traditions
* Work flawlessly on mobile devices
* Achieve excellent SEO scores
* Achieve excellent Lighthouse scores
* Be highly secure
* Be fully responsive
* Be maintainable for many years

Target Lighthouse scores:

* Performance ≥ 95
* Accessibility ≥ 100
* Best Practices ≥ 100
* SEO ≥ 100

---

# Existing Website Analysis Requirements

First analyze the existing website and identify:

* Existing navigation structure
* Existing pages
* Existing content
* Existing images
* Existing downloads
* Existing events
* Existing contact information
* Existing association history
* Existing youth activities
* Existing theater activities
* Existing festival activities

Preserve content but redesign presentation.

---

# Association-Specific Design Requirements

The website represents a traditional Bavarian Trachtenverein.

The design should communicate:

* Tradition
* Community
* Heimatverbundenheit
* Bavarian culture
* Family friendliness
* Local identity
* Authenticity

Avoid:

* Generic corporate designs
* Startup aesthetics
* Overly modern trends
* Excessive animations

Preferred design inspirations:

* Traditional Bavarian associations
* Local cultural organizations
* Alpine design systems
* Regional heritage websites

Visual characteristics:

* Large photography
* Event-focused storytelling
* Warm and welcoming appearance
* Excellent readability
* Modern but timeless

Potential visual themes:

* Alpine landscapes
* Traditional costumes
* Vereinsleben
* Brauchtum
* Theater
* Musik
* Dorffeste

---

# Technology Stack

Mandatory:

* Next.js (latest stable version)
* App Router
* TypeScript
* Tailwind CSS
* pnpm

Deployment:

* Vercel

Code Quality:

* ESLint
* Prettier
* Strict TypeScript
* Zero TypeScript errors
* Zero ESLint warnings

---

# Dependency Management (CRITICAL)

Use:

* Exact dependency pinning only

Requirements:

* No ^
* No ~
* No version ranges

Every dependency must be pinned to an exact version.

Generate:

* package.json
* pnpm-lock.yaml

Use the latest stable package versions available at implementation time.

Keep dependencies minimal.

Prefer native browser APIs and built-in Next.js functionality.

---

# Website Structure

Create a scalable architecture.

Example:

/app
/components
/features
/lib
/content
/public
/styles
/types

Use feature-based organization where appropriate.

---

# Pages

At minimum implement:

* Home
* About the Association
* History
* Events
* Theater
* Youth Group
* Gallery
* Contact
* Legal Notice
* Privacy Policy

Additional pages discovered on the current website should also be migrated.

---

# Homepage Requirements

The homepage should prominently feature:

* Hero section with strong local identity
* Association introduction
* Upcoming events
* Recent activities
* Theater information
* Youth activities
* Image gallery teaser
* Contact information
* Call-to-action for new members

The homepage should immediately communicate:

"Traditional Bavarian community life in Höhenrain."

---

# Responsive Design

Mobile-first approach.

Support:

* Mobile
* Tablet
* Desktop
* Large screens

Requirements:

* Touch-friendly navigation
* Large tap targets
* Fast loading
* Optimized images
* No layout shifts

---

# Accessibility

Target:

WCAG 2.1 AA compliance.

Requirements:

* Semantic HTML
* Keyboard navigation
* Proper focus management
* Screen reader compatibility
* Sufficient contrast
* ARIA only where necessary

---

# SEO Requirements

Implement modern SEO best practices.

Requirements:

* generateMetadata()
* Canonical URLs
* Open Graph
* Twitter/X cards
* JSON-LD structured data
* Semantic HTML
* XML sitemap
* robots.txt

Optimize for:

* Trachtenverein Höhenrain
* GTEV D' Lüßbachtaler Höhenrain
* Trachtenverein Berg
* Trachtenverein Starnberg
* Bayerisches Brauchtum
* Theater Höhenrain
* Vereinsleben Höhenrain

---

# Performance Requirements

Target Core Web Vitals optimization.

Requirements:

* Static Site Generation whenever possible
* Minimal client-side JavaScript
* Next.js Image optimization
* Font optimization
* Lazy loading
* Route-level code splitting
* Tree shaking

---

# Security Requirements (HIGHEST PRIORITY)

Assume security is a primary engineering goal.

Implement:

## HTTP Security Headers

* Content-Security-Policy
* Strict-Transport-Security
* X-Frame-Options: DENY
* X-Content-Type-Options: nosniff
* Referrer-Policy: strict-origin-when-cross-origin
* Permissions-Policy

## Application Security

* No unsafe HTML rendering
* No dangerouslySetInnerHTML unless fully sanitized
* Strict validation of all inputs
* Secure server actions
* No secrets exposed to the client
* Dependency minimization
* CSP-compatible implementation

## Supply Chain Security

* Minimize dependencies
* Avoid abandoned packages
* Ensure clean audit results

Run security review on generated code.

---

# Contact Form

Use:

Resend

Implementation:

* Next.js Server Actions preferred

Requirements:

* Client-side validation
* Server-side validation
* Sanitization
* Honeypot protection
* Basic rate limiting
* Proper error handling

Environment Variables:

RESEND_API_KEY

CONTACT_EMAIL_TO

Never expose secrets to the browser.

---

# Images

Requirements:

* Use Next.js Image component
* Responsive image loading
* Modern formats
* Lazy loading
* Proper alt texts

Preserve existing historical and cultural imagery.

---

# Content Management

Structure content so future migration to a headless CMS is simple.

Prefer:

* MDX
* Content collections
* Content-driven architecture

Avoid hardcoding content directly into page components.

---

# Formatting Standards

Configure:

## ESLint

Use strict production-grade rules.

## Prettier

Create complete configuration.

Generate:

* eslint.config.*
* prettier.config.*
* .editorconfig

---

# Vercel Deployment

Must deploy directly to Vercel without modification.

Provide:

* Environment variable documentation
* Deployment instructions
* Security header configuration
* Build verification steps

---

# Deliverables

Generate:

1. Complete project structure
2. package.json
3. pnpm-lock.yaml
4. Next.js configuration
5. Tailwind configuration
6. ESLint configuration
7. Prettier configuration
8. Vercel configuration
9. Security configuration
10. Resend integration
11. SEO configuration
12. All pages
13. Reusable components
14. Documentation

Output production-ready code only.

Do not generate pseudo-code.

Explain architectural decisions after implementation.

Whenever uncertain, prioritize:

1. Security
2. Accessibility
3. Performance
4. SEO
5. Maintainability
6. Visual appearance


