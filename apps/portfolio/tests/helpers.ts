import { expect, type Page } from "@playwright/test";

/**
 * Below the `sm` breakpoint the header collapses the nav links, language and
 * theme controls into a sheet opened from this trigger.
 */
function mobileMenuTrigger(page: Page) {
  // Stable id instead of the accessible name, which is translated.
  return page.locator("#nav-mobile-menu-button");
}

export function isMobileNavView(page: Page) {
  return mobileMenuTrigger(page).isVisible();
}

export async function openMobileNav(page: Page) {
  if (!(await isMobileNavView(page))) return;

  const trigger = mobileMenuTrigger(page);
  const dialog = page.getByRole("dialog");

  // `aria-expanded` reflects React state, so it stays reliable while the
  // sheet is still running its open/close animation.
  if ((await trigger.getAttribute("aria-expanded")) === "true") {
    await expect(dialog).toBeVisible();
    return;
  }

  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(dialog).toBeVisible();
}

export async function closeMobileNav(page: Page) {
  if (!(await isMobileNavView(page))) return;

  const trigger = mobileMenuTrigger(page);
  if ((await trigger.getAttribute("aria-expanded")) !== "true") return;

  const dialog = page.getByRole("dialog");
  await dialog.getByRole("button", { name: "Close" }).click();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(dialog).toBeHidden();
}

/** Clicks a header entry, opening the mobile sheet first when needed. */
export async function clickNavItem(page: Page, label: string) {
  if (await isMobileNavView(page)) {
    await openMobileNav(page);
    await page.getByRole("dialog").getByText(label, { exact: true }).click();
    await expect(page.getByRole("dialog")).toBeHidden();
    return;
  }

  await page.locator("nav").getByText(label, { exact: true }).first().click();
}

/** Clicks the visible language switch (header on desktop, sheet on mobile). */
export async function toggleLanguage(page: Page) {
  const wasMobile = await isMobileNavView(page);
  await openMobileNav(page);

  await page
    .locator("button:visible")
    .filter({ hasText: /^(ES|EN)$/ })
    .first()
    .click();

  if (wasMobile) {
    await closeMobileNav(page);
  }
}
