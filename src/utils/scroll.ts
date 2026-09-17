/**
 * Smooth-scrolls to a section identified by its CSS selector (e.g. '#coaching').
 * Returns silently if the element doesn't exist.
 */
export function scrollToSection(href: string): void {
  const el = document.querySelector(href);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}
