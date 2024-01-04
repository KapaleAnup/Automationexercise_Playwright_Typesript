import { expect } from "@playwright/test"
import { test } from "../src/basepage/basepage"


test.beforeEach(async ({ page }) => {
    await page.goto("https://automationexercise.com")
})

test.describe('Verify the user is able to submit feedback', () => {

    test.only('Validate Submitting feedback', async ({ homePage, contactUsPage }) => {

        await homePage.clickOnContactUsPage()
        let hearder = await contactUsPage.getContactUsHeader()
        await expect(hearder).toEqual("Get In Touch")

        await contactUsPage.SubmitFeedback("user", "user@test.com",
            "Feedback Subject", "hello, how are you!!", "Data/sample.pdf")

    })
})