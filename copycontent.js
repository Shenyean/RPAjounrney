const puppeteer = require("puppeteer");
async function main() {
  const password1 = "Bekg!4081988";
  const browser = await puppeteer.launch({
    headless: false,
    protocolTimeout: 50000,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 720,
  });
  //for (let i = 1; i <= 47; i++) {
  //try {
  // if ((i = 1)) {
  await page.goto(
    //https://ilearn.learnsaf.gov.sg/curator.html?s=6x2aqh2ZmR2X3MzXzFGcvlWd5RncldXc#modules&project=11
    `https://ilearn.learnsaf.gov.sg/curator.html?s=6x2aqh2ZmR2X3MzXzFGcvlWd5RncldXc#modules&project=11&module_page=1`
    //`https://ilearn.learnsaf.gov.sg/curator.html?s=6x2aqh2ZmR2X3MzXzFGcvlWd5RncldXc#modules&project=14&subject=17&module_page=${i}`
  );
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await page.waitForSelector('[name="username"]');
  await page.waitForSelector('[name="password"]');
  await page.waitForSelector("#sign_in");
  await page.click('[name="username"]');
  await page.type('[name="username"]', "shenyean.yeo@stengg.com");
  await page.click('[name="password"]');
  await page.type('[name="password"]', password1);
  await page.click("#sign_in");
  await page.waitForSelector('[aria-label="LOGOUT"]');
  await page.click('[aria-label="LOGOUT"]');
  await page.waitForSelector('[aria-label="SIGN IN"]');
  await page.click('[aria-label="SIGN IN"]');
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await page.waitForSelector('[name="username"]');
  await page.waitForSelector('[name="password"]');
  await page.waitForSelector("#sign_in");
  await page.click('[name="username"]');
  await page.type('[name="username"]', "shenyean.yeo@stengg.com");
  await page.click('[name="password"]');
  await page.type('[name="password"]', password1);
  await page.click("#sign_in");
  await new Promise((resolve) => setTimeout(resolve, 10000));
  await page.waitForSelector('[aria-label="Show Menu"]');
  await new Promise((resolve) => setTimeout(resolve, 1000));
  // const buttonSelector2 = `button[aria-label="SHOW MENU"]`;

  // const button2 = await page.$(buttonSelector2);
  // if (button2) {
  //   //await page.waitForSelector('button[aria-label="GOT IT"]');
  //   await button2.click();
  // } else {
  //   await new Promise((resolve) => setTimeout(resolve, 2000));
  //   console.log("no continue button");
  // }
  for (let i = 9; i <= 45; i++) {
    try {
      await page.goto(
        //https://ilearn.learnsaf.gov.sg/curator.html?s=6x2aqh2ZmR2X3MzXzFGcvlWd5RncldXc#modules&project=11
        //`https://ilearn.learnsaf.gov.sg/curator.html?s=6x2aqh2ZmR2X3MzXzFGcvlWd5RncldXc#modules&project=11&module_page=1`
        `https://ilearn.learnsaf.gov.sg/curator.html?s=6x2aqh2ZmR2X3MzXzFGcvlWd5RncldXc#modules&project=11&module_page=${i}`
      );
      console.log("new page");
      //} else {
      //  await page.goto(
      //https://ilearn.learnsaf.gov.sg/curator.html?s=6x2aqh2ZmR2X3MzXzFGcvlWd5RncldXc#modules&project=11
      // `https://ilearn.learnsaf.gov.sg/curator.html?s=6x2aqh2ZmR2X3MzXzFGcvlWd5RncldXc#modules&project=11&module_page=${i}`
      //    );
      //  }

      await new Promise((resolve) => setTimeout(resolve, 5000));
      for (let j = 31; j <= 121; j += 10) {
        const ariaLabel = "content_copy";
        const tabIndex = j;
        const altiOSAT = "ATI OSAT SUB";
        await page.waitForSelector(
          `button[aria-label="${ariaLabel}"][tabindex="${tabIndex}"]`
        );
        console.log(`button found ${j}`);
        const buttonSelector = `button[aria-label="${ariaLabel}"][tabindex="${tabIndex}"]`;
        //const buttonSelector = `button[tabindex="${tabIndex}"]`;
        //await page.click('[tabindex="31"]');
        const button = await page.$(buttonSelector);
        if (button) {
          try {
            button.scrollIntoView();

            console.log(buttonSelector);
            //sawait new Promise((resolve) => setTimeout(resolve, 15000));
            //await page.waitForSelector('[aria-label="content_copy"][tabindex="32"]')
            await button.click();
            await new Promise((resolve) => setTimeout(resolve, 2000));
            await page.waitForSelector('[aria-label="CANCEL"]');

            //console.log('cancel found')
            await new Promise((resolve) => setTimeout(resolve, 2000));
            //await page.click
            await page.click('[aria-label="Start typing"]');
            await page.type('[aria-label="Start typing"]', altiOSAT);
            await page.click('[aria-label="SAVE"]');
            console.log(`clicked ${j}`);
          } catch (err) {
            console.log(`${j}not copied`);
            await page.click('[aria-label="CANCEL"]');
          }
          //   await new Promise((resolve) => setTimeout(resolve, 12000));
        } else {
          console.error(`Button not found.`);
          console.error(
            `Button with aria-label "${ariaLabel}" and tabindex "${tabIndex}" not found.`
          );
        }
      }
    } catch (err) {
      console.log(`failed page${i}..`);
    }

    console.log(`page done ${i}`);
    //  // await browser.close();
    //}
  }
}
main();
