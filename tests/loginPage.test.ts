import { test } from "../src/basepage/basepage"
import * as loginData from "../Data/valid_login_creds.json"
import { expect } from "@playwright/test"

test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com")
})

test.describe('Verify the user is able to login', () => {

    test('Validate login flow with valid credentials', async ({ loginPage, homePage, registrationPage }) => {

        await homePage.clickonSign_Login()
        await loginPage.getLoginHeaderText()
        await loginPage.doLogin(loginData.email, loginData.password)

        let userName = await homePage.getUserName()

        await homePage.deleteCreatedAccount();
        await homePage.deleteMessage()

    })
})