import {expect, test} from "@playwright/test";


test('verifier login', async ({page})=>{
   await page.goto('https://www.saucedemo.com/')
   await page.locator('#user-name').fill('standard_user')
   await page.locator('#password').fill('secret_sauce')
   await page.locator('#login-button').click()
  await expect(page).toHaveURL(/inventory.html/)
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page.locator('#add-to-cart-sauce-labs-backpack')).toBeVisible()
    await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible()
})


test('tableau html',async ({page}) =>{
 await page.goto('C:\\Users\\GENIUS\\IdeaProjects\\firstplaywright\\ressources\\image\\index.html')

 await expect(page.locator('table')).toContainText('$179.99')
    console.log(await page.locator('.compare-btn').count());



})