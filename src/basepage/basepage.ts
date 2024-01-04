import { test as base } from "@playwright/test"
import HomePage from "../pages/homepage.page"
import RegistrationPage from "../pages/registration.page"
import LoginPage from "../pages/login.page"
import ContactUsPage from "../pages/contactus.page"


export const test = base.extend<{
    homePage: HomePage
    registrationPage: RegistrationPage
    loginPage: LoginPage
    contactUsPage: ContactUsPage

}>({
    //define fixtures 
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },
    registrationPage: async ({ page }, use) => {
        await use(new RegistrationPage(page))
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    contactUsPage: async ({ page }, use) => {
        await use(new ContactUsPage(page))
    }
})