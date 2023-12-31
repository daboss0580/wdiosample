const LoginPage = require('../pages/login.page')
describe('Test', () => {
    it('My Test', async () => {
        await browser.maximizeWindow();
        await browser.url('https://the-internet.herokuapp.com/login');
        await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        await LoginPage.validateLogin('You logged into a secure area!')


        // await $('//*[@id="username"]').setValue('tomsmith')
        // await $('//*[@id="password"]').setValue('SuperSecretPassword!')
        // await $('//*[text()=" Login"]').click()
        // await expect($('//*[@class="flash success"]')).toHaveTextContaining('You logged into a secure area!')
        browser.pause(5000)
    })
})