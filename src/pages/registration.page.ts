import { time } from "console";
import { Locator, Page } from "playwright-core";

export default class RegistrationPage {

    page: Page

    readonly signupLabel: Locator
    readonly userName: Locator
    readonly email: Locator
    readonly signUpBtn: Locator

    readonly accountInfo: Locator
    readonly genderTitle: Locator
    readonly enterPassword: Locator

    readonly birthDay: Locator
    readonly birthMonth: Locator
    readonly birthYear: Locator
    readonly newsletter: Locator
    readonly specialOffer: Locator

    readonly firstname: Locator
    readonly lastname: Locator
    readonly company: Locator
    readonly addreess: Locator
    readonly address2: Locator
    readonly countryDropDown: Locator
    readonly state: Locator
    readonly city: Locator
    readonly zipcode: Locator
    readonly mobileNumber: Locator
    readonly createAccountBtn: Locator


    constructor(page: Page) {
        this.page = page
        this.signupLabel = page.locator("div[class='signup-form'] h2")
        this.userName = page.getByPlaceholder('Name');
        this.email = page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
        this.signUpBtn = page.getByRole('button', { name: 'Signup' })

        this.accountInfo = page.getByText('Enter Account Information')
        this.genderTitle = page.locator("label[for='id_gender1']")
        this.enterPassword = page.locator('#password')

        this.birthDay = page.locator('#days')
        this.birthMonth = page.locator('#months.form-control')
        this.birthYear = page.locator('#years.form-control')
        this.newsletter = page.locator('#newsletter')
        this.specialOffer = page.locator('#optin')

        this.firstname = page.locator('#first_name')
        this.lastname = page.locator('#last_name')
        this.company = page.locator('#company')
        this.addreess = page.locator('#address1')
        this.address2 = page.locator('#address2')
        this.countryDropDown = page.locator('#country')
        this.state = page.locator('#state')
        this.city = page.locator('#city')
        this.zipcode = page.locator('#zipcode')
        this.mobileNumber = page.locator('#mobile_number')
        this.createAccountBtn = page.getByRole('button', { name: 'Create Account' })

    }

    async isSingUpTextVisible() {
        return await this.signupLabel.textContent()
    }

    async clickOnSignUp(name: string, email: string) {
        await this.userName.fill(name)
        await this.email.fill(email)
        await this.signUpBtn.click()
        console.log(`The user clicked on Sign up button & redirected to the account information section.`);
    }

    async provideAccountInfo(password: string) {
        await this.genderTitle.check();
        await this.enterPassword.fill(password)
    }

    async selectDateOfBirth(day: string, month: string, year: string) {
        await this.birthDay.selectOption({ value: day })
        await this.birthMonth.selectOption({ value: month })
        await this.birthYear.selectOption({ value: year })
    }

    async signUpForNewsletter() {
        let ischecked = await this.newsletter.isChecked();
        if (!ischecked) {
            await this.newsletter.check()
            console.log(`Newsletter has been selected.`);
        }

    }

    async checkSpecialOffers() {
        let ischecked = await this.specialOffer.isChecked();
        if (!ischecked) {
            await this.specialOffer.check()
            console.log(`Special offer has been selected.`);
        }

    }

    async addAddressinformation(firstName: string, lastName: string, companyName: string, address1: string, address2: string, countryName: string,
        stateName: string, cityName: string, zipcodeNumber: string, mobile: string) {
        await this.firstname.fill(firstName)
        await this.lastname.fill(lastName)
        await this.company.fill(companyName)
        await this.addreess.fill(address1)
        await this.address2.fill(address2)
        await this.selectCountry(countryName)
        await this.state.fill(stateName)
        await this.city.fill(cityName)
        await this.zipcode.fill(zipcodeNumber)
        await this.mobileNumber.fill(mobile)

        console.log(`User has been successfully created.`)

    }

    private async selectCountry(countryname: string) {
        const options = await this.page.$$("#country option")
        for (const option of options) {
            const countyName = await option.textContent();
            console.log(countyName);

            if (countyName?.includes(countryname)) {
                await this.page.selectOption('#country', countyName)
                break;
            }
        }


    }



}