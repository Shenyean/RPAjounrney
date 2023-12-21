const puppeteer = require("puppeteer");
async function main() {
  const password1 = "P@ssw0rd1234";
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });
<<<<<<< HEAD
  //362
  for (let i = 1045; i <= 5000; i++) {
    const userEmail = `A9-20${String(i).padStart(4, "0")}@area9.dk`;
    await page.goto(
      "https://br.uat.sg.rhapsode.com/learner.html?s=mBXe35EWKR0XyIzXPRVU3Mjb4pGZvRXc"
    );
    await page.waitForSelector('[name="username"]');
    await page.waitForSelector('[name="password"]');
    await page.waitForSelector("#sign_in");
    console.log("login loaded");
    await page.click('[name="username"]');
    await page.type('[name="username"]', userEmail);
    await page.click('[name="password"]');
    await page.type('[name="password"]', password1);
    await page.click("#sign_in");

    // comment out cos these only appear once
    await page.waitForSelector('[aria-label="CONTINUE"]');
    await page.click('[aria-label="CONTINUE"]');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await page.waitForSelector('[aria-label="ACCEPT"]');
    await page.click('[aria-label="ACCEPT"]');
    console.log("accepts");
    // await page.waitForSelector('[aria-label = "Show Menu"]');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const buttonSelector = `button[aria-label="GOT IT"]`;
=======

  for (let i = 1585; i <= 5000; i++) {
    try {
      const userEmail = `A9-20${String(i).padStart(4, "0")}@area9.dk`;
      console.log(userEmail);
      await page.goto(
        "https://br.uat.sg.rhapsode.com/learner.html?s=mBXe35EWKR0XyIzXPRVU3Mjb4pGZvRXc"
      );
      await page.waitForSelector('[name="username"]');
      await page.waitForSelector('[name="password"]');
      await page.waitForSelector("#sign_in");
      console.log("login loaded");
      await page.click('[name="username"]');
      await page.type('[name="username"]', userEmail);
      await page.click('[name="password"]');
      await page.type('[name="password"]', password1);
      await page.click("#sign_in");
      // await page.waitForSelector('[aria-label="CONTINUE"]');
      // comment out cos these only appear once
      await new Promise((resolve) => setTimeout(resolve, 3000));
      for (j = 1; j < 3; j++) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const buttonSelector1 = `button[aria-label="CONTINUE"]`;

        const button1 = await page.$(buttonSelector1);
        if (button1) {
          //await page.waitForSelector('button[aria-label="CONTINUE"]');
          await button1.click();
        } else {
          console.log("no continue button");
>>>>>>> 56041d66e7b5f36c421e7332516780ab4d26aae1

          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
        const buttonSelector2 = `button[aria-label="ACCEPT"]`;

        const button2 = await page.$(buttonSelector2);
        if (button2) {
          //await page.waitForSelector('button[aria-label="GOT IT"]');
          await button2.click();
        } else {
          await new Promise((resolve) => setTimeout(resolve, 2000));
          console.log("no continue button");
        }
      }

      // await page.waitForSelector('[aria-label="CONTINUE"]');
      // await page.click('[aria-label="CONTINUE"]');
      // await page.waitForSelector('[aria-label="ACCEPT"]');
      // await page.click('[aria-label="ACCEPT"]');
      // console.log("accepts");
      const buttonSelector3 = `button[aria-label="Show Menu"]`;

      const button3 = await page.$(buttonSelector3);
      if (button3) {
        //await page.waitForSelector('button[aria-label="GOT IT"]');
        await button3.click();
      } else {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("menu notfound");
      }

      //await page.waitForSelector('[aria-label = "Show Menu"]');
      console.log("menu found?");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const buttonSelector = `button[aria-label="GOT IT"]`;

      const button = await page.$(buttonSelector);
      if (button) {
        //await page.waitForSelector('button[aria-label="GOT IT"]');
        await button.click();
      } else {
        console.log("no button");
      }

      //await page.waitForSelector('[aria-label="GOT IT"]');
      // await page.click('[aria-label="GOT IT"]');
      console.log("got it");
      //  await new Promise((resolve) => setTimeout(resolve, 5000));
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await page.waitForSelector('[aria-label="LOAD TEST 001"]');
      console.log("found");
      await page.click('[aria-label="LOAD TEST 001"]');
      //await page.waitForSelector('[aria-label="OK"]');
      //await page.click('[aria-label="OK"]');
      //await new Promise((resolve) => setTimeout(resolve, 1000));
      //await page.waitForSelector('[aria-label="Your self confidence : I KNEW"]');
      //await page.click('[aria-label="Your self confidence : I KNEW"]');
      // //console.log("enter slide");
      // await page.waitForSelector(
      //   '[aria-label="NEXT. This will reload the content above"]'
      // );
      // await page.click('[aria-label="NEXT. This will reload the content above"]');
      // console.log("exit");
      // await page.waitForSelector('[aria-label="Your self confidence : I KNEW"]');
      // await page.click('[aria-label="Your self confidence : I KNEW"]');
      // await new Promise((resolve) => setTimeout(resolve, 5000));

      // console.log("content found");
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      // await page.mouse.click(674, 368);
      // //.log("first click");

      // for (let i = 0; i < 105; i++) {
      //   await page.keyboard.press("Enter");
      //   await new Promise((resolve) => setTimeout(resolve, 100));
      //   //console.log(i);
      // }
      // console.log("scorm complete");
      // // for (let i = 0; i < 17; i++) {
      // //   await page.keyboard.press("Enter");
      // //   await new Promise((resolve) => setTimeout(resolve, 1000));
      // // }
      // //console.log("scorm complete2");
      // await page.mouse.click(674, 368);
      // await page.waitForSelector('[aria-label="NEXT"]');
      // await page.click('[aria-label="NEXT"]');
      // await page.waitForSelector('[aria-label="NEXT"]');
      // await page.click('[aria-label="NEXT"]');
      // await page.waitForSelector('[aria-label="NEXT"]');
      // await page.click('[aria-label="NEXT"]');
      // await page.waitForSelector('[aria-label="NEXT"]');
      // await page.click('[aria-label="NEXT"]');
      // // await page.waitForSelector('[aria-label="NEXT"]');
      // // await page.click('[aria-label="NEXT"]');
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("find menu");
      await page.waitForSelector('[aria-label = "Show Menu"]');
      console.log("menu");
      await page.click('[aria-label = "Show Menu"]');
      console.log("menu clciked");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await page.waitForSelector('[aria-label = "LOGOUT"]');
      await page.click('[aria-label = "LOGOUT"]');
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log(userEmail + "done");
    } catch (err) {
      console.log(`this ${i} is down`);
    }
<<<<<<< HEAD

    //await page.waitForSelector('[aria-label="GOT IT"]');
    // await page.click('[aria-label="GOT IT"]');
    console.log("got it");
    //  await new Promise((resolve) => setTimeout(resolve, 5000));
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await page.waitForSelector('[aria-label="LOAD TEST 001"]');
    await page.click('[aria-label="LOAD TEST 001"]');
    //await page.waitForSelector('[aria-label="OK"]');
    //await page.click('[aria-label="OK"]');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await page.waitForSelector('[aria-label="Your self confidence : I KNEW"]');
    await page.click('[aria-label="Your self confidence : I KNEW"]');
    // //console.log("enter slide");
    // await page.waitForSelector(
    //   '[aria-label="NEXT. This will reload the content above"]'
    // );
    // await page.click('[aria-label="NEXT. This will reload the content above"]');
    // console.log("exit");
    // await page.waitForSelector('[aria-label="Your self confidence : I KNEW"]');
    // await page.click('[aria-label="Your self confidence : I KNEW"]');
    // // await new Promise((resolve) => setTimeout(resolve, 5000));

    // console.log("content found");
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // await page.mouse.click(674, 368);
    // //.log("first click");

    // for (let i = 0; i < 105; i++) {
    //   await page.keyboard.press("Enter");
    //   await new Promise((resolve) => setTimeout(resolve, 100));
    //   //console.log(i);
    // }
    // console.log("scorm complete");
    // // for (let i = 0; i < 17; i++) {
    // //   await page.keyboard.press("Enter");
    // //   await new Promise((resolve) => setTimeout(resolve, 1000));
    // // }
    // //console.log("scorm complete2");
    // await page.mouse.click(674, 368);
    // await page.waitForSelector('[aria-label="NEXT"]');
    // await page.click('[aria-label="NEXT"]');
    // await page.waitForSelector('[aria-label="NEXT"]');
    // await page.click('[aria-label="NEXT"]');
    // await page.waitForSelector('[aria-label="NEXT"]');
    // await page.click('[aria-label="NEXT"]');
    // await page.waitForSelector('[aria-label="NEXT"]');
    // await page.click('[aria-label="NEXT"]');
    // // await page.waitForSelector('[aria-label="NEXT"]');
    // // await page.click('[aria-label="NEXT"]');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await page.waitForSelector('[aria-label = "Show Menu"]');
    await page.click('[aria-label = "Show Menu"]');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await page.waitForSelector('[aria-label = "LOGOUT"]');
    await page.click('[aria-label = "LOGOUT"]');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log(userEmail + "done");
=======
>>>>>>> 56041d66e7b5f36c421e7332516780ab4d26aae1
  }
}

//}
main();
