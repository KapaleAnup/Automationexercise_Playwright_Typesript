import { Locator, Page } from "playwright-core";
import { expect } from "playwright/test";

export default class HomePage {

    page: Page

    readonly signup_LoginBtn: Locator

    readonly userName: Locator
    readonly deleteAccountBtn: Locator
    readonly deleteMessage_text: Locator

    readonly successMessage_text: Locator
    readonly countinueBtn: Locator

    readonly contactusBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.signup_LoginBtn = page.locator("a[href='/login']")

        this.userName = page.locator("ul[class='nav navbar-nav'] li a b")

        this.successMessage_text = page.locator("h2[class='title text-center'] b")
        this.countinueBtn = page.getByRole('button', { name: 'Continue' })

        this.deleteAccountBtn = page.locator("a[href='/delete_account']")
        this.deleteMessage_text = page.locator("h2[class='title text-center'] b")

        this.contactusBtn = page.locator("a[href='/contact_us']")
    }

    async checkHeaders() {
        let headerValues = await this.page.locator('.nav.navbar-nav li').all()
        for (const headers of headerValues) {
            let header = await headers.textContent()

            console.log(`listed hearders are : ${header}`);
        }
        return headerValues;
    }

    async clickonSign_Login() {
        await this.signup_LoginBtn.click()
        console.log(`The user is redirected to the Signp/Login page.`);
    }

    async getUserName() {
        return await this.userName?.textContent();
    }


    async successMessage() {
        let message_Text = await this.successMessage_text.isVisible()
        if (message_Text) {
            return await this.successMessage_text.textContent();
        } else {
            throw new Error(`Success Message is not matching..`)
        }
    }

    async clickOnContinue() {
        await this.countinueBtn.click()
    }

    async deleteCreatedAccount() {
        await this.deleteAccountBtn.click()
    }

    async deleteMessage() {
        let message_Text = await this.deleteMessage_text.isVisible()
        if (message_Text) {
            return await this.deleteMessage_text.textContent();
        } else {
            throw new Error(`Delete Message is not matching..`)
        }
    }

    async clickOnContactUsPage() {
        await this.contactusBtn.click()
    }
}