const {test,expect,browser} =require("@playwright/test")
const  homepg=require("../pages/home")



test("polestar home page validation ", async ({browser})=>{ 
  

  const  context =await browser.newContext()				
  const page = await   context.newPage();	

  //open application 
  const homePage= new homepg (page)
  await homePage.openApplication()
  await homePage.handleWelcomeMessage()
  await homePage.validationPolestar2()
  await homePage.validationPolestar3()
  await homePage.validationPolestar4()  
})