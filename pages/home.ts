import { expect } from "@playwright/test"
class home {
    page: any;
    polestar2: string
    polestar3: string;
    polestar4: string;
    charge: string;
    more: string;
    message: string;
    polestar2Title: string;
    buy: string;
    DesignAndOrder: string;
    carsReady: string;
    polestar3Title: string;
    offers: string;
    polestar4Title: string;



    constructor(page: any) {
        this.page = page
        //welcome message
        this.message = "//*[contains(text(),'Accept all')]"

        //houvr top header titles
        this.polestar2 = "(//li[contains(@class,'css-1qwl8ig')])[1]";
        this.polestar3 = "(//li[contains(@class,'css-1qwl8ig')])[2]";
        this.polestar4 = "(//div[contains(@class,'css-1jof5mm')])[3]";
        this.charge = "(//li[contains(@class,'css-1qwl8ig')])[4]";
        this.buy = "(//li[contains(@class,'css-1qwl8ig')])[5]";
        this.more = "(//li[contains(@class,'css-1qwl8ig')])[5]";


        //Select the Polestar 3 model, click on 'design and order,' and navigate to the corresponding page

        this.DesignAndOrder = "//*[contains(@id,'SXae3TdtSNq9AiI_PwMVAg')]"
        this.polestar2Title = "(//*[contains(text(),'Polestar 2')])[5]"

        //Select the Polestar 3 model, click on 'Cars Ready for Delivery,' and navigate to the corresponding page
        this.carsReady = "//*[contains(@id,'R8D4PBVIThG7AqPHDNbVYg')]"
        this.polestar3Title = "//*[contains(text(),'Tillgängliga bilar.')]"


        //Select the Polestar 3 model, click on 'offers,' and navigate to the corresponding page
        this.offers = "//*[contains(@id,'OqhYcDAkQ3qR7cMpNHa_oA')]"
        this.polestar4Title = "(//*[contains(text(),'Aktuella erbjudanden')])[2]"


    }
    // navigate to the application
    async openApplication(page: any) {
        await this.page.goto("https://www.polestar.com/se")
    }
    // accepting welcome message
    async handleWelcomeMessage(page: any) {
        await this.page.locator(this.message).click();
    }

    


    //Select the Polestar 2 model, click on 'Design and Order,' and navigate to the respective page
    async validationPolestar2(page: any) {
        await this.page.locator(this.polestar2).hover();                             // select to  polestar 2
        await this.page.locator(this.DesignAndOrder).click()                         // navigate to read more page
        const title = await this.page.locator(this.polestar2Title).textContent()     //get the sub-title of the page
        await expect(title).toEqual("Polestar 2")                                    //validate sub-title same or not 

    }

    //Select the Polestar 3 model, click on 'cars ready for delivery,' and navigate to the respective page
    async validationPolestar3(page: any) {
        await this.page.locator(this.polestar3).hover();                                 // select to  polestar 2
        await this.page.locator(this.carsReady).click()                                 // navigate to read more page
        const title = await this.page.locator(this.polestar3Title).textContent()        //get the sub-title of the page
        await expect(title).toEqual("Tillgängliga bilar.")                                    //validate sub-title same or not 

    }

    //Select the Polestar 4 model, click on 'offers' and navigate to the respective page
    async validationPolestar4(page: any) {
        await this.page.locator(this.polestar4).hover();                                 // select to  polestar 2
        await this.page.locator(this.offers).click()                                     // navigate to read more page
        const title = await this.page.locator(this.polestar4Title).textContent()         //get the sub-title of the page
        await expect(title).toEqual("Aktuella erbjudanden")                             //validate sub-title same or not 

    }

}

module.exports = home

