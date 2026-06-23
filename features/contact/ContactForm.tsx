'use client'

import { useActionState } from 'react'
import { sendContactMessage, type ContactFormState } from './actions'
import { Button } from '@/components/ui/Button'

const initialState: ContactFormState = { success: false }

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState)

  if (state.success) {
    return (
      <div
        role="alert"
        className="rounded-lg bg-primary-50 border border-primary-200 p-6 text-center"
      >
        <div className="text-4xl mb-3" aria-hidden="true">
          ✓
        </div>
        <h3 className="font-serif font-bold text-primary-700 text-xl mb-2">
          Vielen Dank für Ihre Nachricht!
        </h3>
        <p className="text-text-muted">
          Wir haben Ihre Anfrage erhalten und melden uns so bald wie möglich bei Ihnen.
        </p>
      </div>
    )
  }

  return (
    <form action={formAction} noValidate className="space-y-5">
      {/* Honeypot - hidden from real users */}
      <div aria-hidden="true" className="hidden" tabIndex={-1}>
        <label htmlFor="website">Website (bitte leer lassen)</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.error && (
        <div
          role="alert"
          className="rounded bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700"
        >
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-text mb-1.5">
            Name{' '}
            <span className="text-red-600" aria-label="Pflichtfeld">
              *
            </span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            className="w-full rounded border border-border bg-surface px-4 py-2.5 text-text placeholder-text-muted text-sm focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 transition-colors"
            placeholder="Ihr Name"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-text mb-1.5">
            E-Mail{' '}
            <span className="text-red-600" aria-label="Pflichtfeld">
              *
            </span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className="w-full rounded border border-border bg-surface px-4 py-2.5 text-text placeholder-text-muted text-sm focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 transition-colors"
            placeholder="ihre@email.de"
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-sm font-medium text-text mb-1.5">
          Betreff
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          maxLength={200}
          className="w-full rounded border border-border bg-surface px-4 py-2.5 text-text placeholder-text-muted text-sm focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 transition-colors"
          placeholder="Worum geht es?"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-text mb-1.5">
          Nachricht{' '}
          <span className="text-red-600" aria-label="Pflichtfeld">
            *
          </span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          maxLength={5000}
          rows={6}
          className="w-full rounded border border-border bg-surface px-4 py-2.5 text-text placeholder-text-muted text-sm focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 transition-colors resize-y min-h-32"
          placeholder="Ihre Nachricht an uns..."
        />
      </div>

      <p className="text-xs text-text-muted">
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{' '}
        <a href="/datenschutz" className="text-primary-700 hover:underline">
          Datenschutzerklärung
        </a>{' '}
        zu.
      </p>

      <Button type="submit" variant="primary" size="md" disabled={isPending}>
        {isPending ? (
          <>
            <span
              className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
              aria-hidden="true"
            />
            Wird gesendet…
          </>
        ) : (
          'Nachricht senden'
        )}
      </Button>
    </form>
  )
}
