import { expect } from "playwright/test";
import { test } from "../src/basepage/basepage";

import * as data from "../Data/registraton.json"

test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com")
})

test.describe("Verify the user is able to regirster", () => {

    test("User is able to register succussfully", async ({ page, homePage, registrationPage }) => {

        await homePage.clickonSign_Login()
        let signup_text = await registrationPage.isSingUpTextVisible();
        await expect.soft(signup_text).toContain('New User Signup!')

        await registrationPage.clickOnSignUp(data.name, data.email)
        await registrationPage.provideAccountInfo(data.password)
        // await registrationPage.selectDateOfBirth('18', 'May', '2000');
        await registrationPage.signUpForNewsletter();
        await registrationPage.checkSpecialOffers()
        await registrationPage.addAddressinformation(data.firstName, data.lastName, data.company, data.address, data.address2,
            data.country, data.state, data.city, data.zipcode,
            data.mobileNumber)

        await page.waitForTimeout(5000)

    })
})