// One builder for every "Book a consultation" link. All booking CTAs land on
// the form section of /contact-us/ (#book), optionally pre-selecting a doctor
// via ?doctor=<slug> — the form reads it via useSearchParams.

export function bookingHref(doctorSlug?: string): string {
  return doctorSlug
    ? `/contact-us/?doctor=${doctorSlug}#book`
    : "/contact-us/#book";
}
