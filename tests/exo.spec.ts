import {expect, test} from "@playwright/test";


test('login successful', async ({page})=>{
    await page.goto('https://the-internet.herokuapp.com/')
    await expect(page).toHaveTitle('The Internet')
    await expect(page.locator('a[href="/context_menu"]')).toBeVisible()
} )


test('remplir formulaire et assertion',async ({page})=>{
    await page.goto('https://www.saucedemo.com/')
    await page.locator('#user-name').fill('standard_user')
    await page.locator('#password').fill('secret_sauce')
    await page.locator('#login-button').click()

    await expect(page.getByText('Sauce Labs Bike Light')).toBeVisible()
    await expect(page).toHaveURL(/inventory.html/)
    await expect(page.locator('#add-to-cart-sauce-labs-backpack')).toBeVisible()

    await page.getByText('Sauce Labs Bike Light').click()

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=0')
})


test('Inputs & checkbox',async ({page})=>{
    await page.goto('file:///C:\\Users\\GENIUS\\IdeaProjects\\firstplaywright\\ressources\\html-application-form.html')

})

