class LoginPage{
    get usernameTextbox(){
        return $('//*[@id="username"]')
    }
    get passwordTextbox(){
        return $('//*[@id="password"]')
    }
    get loginBtn(){
        return $('//*[text()=" Login"]')
    }
    get welcomeMsg(){
        return $('//*[@class="flash success"]')
    }
    async login(username, password){
        await this.usernameTextbox.setValue(username)
        await this.passwordTextbox.setValue(password)
        await this.loginBtn.click()
    }
    async validateLogin(message){
        await expect(this.welcomeMsg).toHaveTextContaining(message)
    }
}
module.exports=new LoginPage()