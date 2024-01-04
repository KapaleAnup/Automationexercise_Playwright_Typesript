import { Locator, Page } from "@playwright/test";

export default class ContactUsPage {

    page: Page

    readonly contactUsHeader: Locator
    readonly name_input: Locator
    readonly email_input: Locator
    readonly subject_input: Locator
    readonly contacusMessage: Locator
    readonly uploadFile: Locator
    readonly submitBtn: Locator

    constructor(page: Page) {
        this.page = page
        this.contactUsHeader = page.locator("div[class='contact-form'] h2[class='title text-center']")
        this.name_input = page.locator("input[placeholder='Name']")
        this.email_input = page.locator("input[placeholder='Email']")
        this.subject_input = page.locator("input[placeholder='Subject']")
        this.contacusMessage = page.locator("#message")
        this.uploadFile = page.locator("input[name='upload_file']")
        this.submitBtn = page.getByRole('button', { name: 'Submit' })
    }

    async getContactUsHeader() {
        return await this.contactUsHeader.textContent()
    }

    async SubmitFeedback(name: string, email: string, subject: string, message: string, filepath: string) {
        await this.name_input.fill(name)
        await this.email_input.fill(email)
        await this.subject_input.fill(subject)
        await this.contacusMessage.fill(message)
        await this.page.setInputFiles("input[name='upload_file']", filepath)
        await this.submitBtn.click()



    }
}