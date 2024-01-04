import { Locator, Page } from "@playwright/test"
export default class LoginPage {

    page: Page

    readonly loginHeaderText: Locator
    readonly enterEmail: Locator
    readonly enterPassword: Locator
    readonly loginBtn: Locator

    constructor(page: Page) {
        this.page = page;
        this.loginHeaderText = page.locator("div[class='login-form'] h2")
        this.enterEmail = page.locator("input[data-qa='login-email']")
        this.enterPassword = page.locator("input[placeholder='Password']")
        this.loginBtn = page.getByRole('button', { name: 'Login' })

    }

    async getLoginHeaderText() {
        return await this.loginHeaderText.textContent();
    }

    async doLogin(email: string, password: string) {
        await this.enterEmail.fill(email)
        await this.enterPassword.fill(password)
        await this.loginBtn.click()

    }
}