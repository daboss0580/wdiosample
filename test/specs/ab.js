describe('Test', () => {
    it('My Test', async () => {
        await browser.maximizeWindow();
        await browser.url('https://the-internet.herokuapp.com/');
        const element =await $('//*[text()="A/B Testing"]')
        await element.click()
        await browser.pause(2000)
    });
});
