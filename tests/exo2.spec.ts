import {expect, test} from "@playwright/test";

test('verification acces', async ({page}) =>{
  await page.goto('https://www.saucedemo.com/')
  await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
  await page.locator('#login-button').click()

  await expect(page.locator('.app_logo')).toHaveText('Swag Labs')

  await page.locator('#react-burger-menu-btn').click()

  await page.locator('#logout_sidebar_link').click()
  await expect(page.locator('#login-button')).toBeVisible()
})