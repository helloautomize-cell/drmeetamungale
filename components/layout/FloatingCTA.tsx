import { StickyMobileBar } from "@/components/ui/StickyMobileBar";

export function FloatingCTA() {
  // Mobile-only bottom action bar (<768px) — Call / WhatsApp / Book at
  // thumb reach. No desktop pill (quiet-luxury spec §5.13).
  return <StickyMobileBar />;
}
