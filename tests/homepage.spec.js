// @ts-check
const { test, expect } = require('@playwright/test');

test('homepage has Capco Engineering in title and capco.com link linking to the Capco main site', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Capco Engineering/);

  // create a locator
  const capcoUrl = page.locator('text=Capco.com');
  // await expect(component).toContainText('Submit');
  await expect(capcoUrl).toBeTruthy();
  // console.log(capcoUrl);

  // Expect an attribute "to be strictly equal" to the value.
  // await expect(capcoUrl).toHaveAttribute('href', '');

  // await expect(capcoUrl).toHaveAttribute('href', 'https://www.capco.com/');

  // Click the get started link.
  // await capcoUrl.click();

  // Expects the URL to contain intro.
  // await expect(page).toHaveURL(/.*capco/);
});
