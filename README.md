# GTEV D' Lüßbachtaler Höhenrain

Website für den Gebirgstrachten-Erhaltungsverein D'Lüßbachtaler Höhenrain e.V.

## Tech-Stack

- **Framework:** Next.js 16 (App Router)
- **Sprache:** TypeScript (strict)
- **Styling:** Tailwind CSS v4
- **Paketmanager:** pnpm
- **E-Mail:** Resend
- **Deployment:** Vercel

## Erste Schritte

### Voraussetzungen

- Node.js ≥ 20
- pnpm ≥ 9

### Installation

```bash
pnpm install
```

### Umgebungsvariablen

Kopieren Sie `.env.example` nach `.env.local` und tragen Sie Ihre Werte ein:

```bash
cp .env.example .env.local
```

| Variable | Beschreibung |
|----------|--------------|
| `RESEND_API_KEY` | API-Key von [resend.com](https://resend.com) |
| `CONTACT_EMAIL_TO` | Empfänger-E-Mail für Kontaktformular-Nachrichten |

### Entwicklung

```bash
pnpm dev
```

### Build & Produktion

```bash
pnpm build
pnpm start
```

### Lint & Format

```bash
pnpm lint
pnpm format
```

## Deployment auf Vercel

1. Repository mit Vercel verbinden (über vercel.com oder `vercel` CLI)
2. Umgebungsvariablen in den Vercel-Projekteinstellungen hinterlegen:
   - `RESEND_API_KEY`
   - `CONTACT_EMAIL_TO`
3. Deploy – Vercel erkennt Next.js automatisch

**Wichtig:** Die Sicherheits-HTTP-Header sind in `vercel.json` konfiguriert und werden automatisch
bei Vercel-Deployments aktiv.

## Inhalte pflegen

### Veranstaltungen

Termine in `content/events.ts` editieren. Das Array `events` enthält alle Veranstaltungen;
`getUpcomingEvents()` filtert automatisch nach aktuellem Datum.

### Vorstand

Vorstandsmitglieder in `content/board.ts` aktualisieren.

### Galerie

Echte Fotos in `/public/images/galerie/` ablegen (`.jpg`, `.webp` oder `.avif`) und
in `app/galerie/page.tsx` die `src`-Pfade und `alt`-Texte der Einträge im
`galleryImages`-Array anpassen.

## Sicherheitshinweise

- HTTP-Security-Headers (CSP, HSTS, X-Frame-Options etc.) sind in `vercel.json` konfiguriert
- Das Kontaktformular enthält Honeypot-Schutz und IP-basiertes Rate-Limiting
- Keine Geheimnisse werden an den Browser übergeben (`RESEND_API_KEY` ist Server-only)
- Alle Abhängigkeiten sind exakt gepinnt (keine `^` oder `~`)
