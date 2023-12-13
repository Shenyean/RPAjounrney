const puppeteer = require("puppeteer");
async function main() {
  const password1 = "P@ssw0rd1234";

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  //   await page.setViewport({
  //     width: 1920,
  //     height: 1080,
  //   });
  await page.goto(
    "https://br.uat.sg.rhapsode.com/learner.html?s=mBXe35EWKR0XyIzXPRVU3Mjb4pGZvRXc"
  );

  await page.waitForSelector('[name="username"]');
  await page.waitForSelector('[name="password"]');
  await page.waitForSelector("#sign_in");
  console.log("login loaded");
  await page.click('[name="username"]');
  await page.type('[name="username"]', "A9-200102@area9.dk");
  await page.click('[name="password"]');
  await page.type('[name="password"]', password1);
  await page.click("#sign_in");
  // comment out cos these only appear once
  //await page.waitForSelector('[aria-label="CONTINUE"]');
  //await page.click('[aria-label="CONTINUE"]');
  //await page.waitForSelector('[aria-label="ACCEPT"]');
  //await page.click('[aria-label="ACCEPT"]');
  await page.waitForSelector('[aria-label="GOT IT"]');
  await page.click('[aria-label="GOT IT"]');
  console.log("got it");
  //  await new Promise((resolve) => setTimeout(resolve, 5000));
  await page.waitForSelector('[aria-label="LOAD TEST 001"]');
  await page.click('[aria-label="LOAD TEST 001"]');
  //await page.waitForSelector('[aria-label="OK"]');
  //await page.click('[aria-label="OK"]');
  await page.waitForSelector('[aria-label="Your self confidence : I KNEW"]');
  await page.click('[aria-label="Your self confidence : I KNEW"]');
  console.log("enter slide");
  await page.waitForSelector(
    '[aria-label="NEXT. This will reload the content above"]'
  );
  await page.click('[aria-label="NEXT. This will reload the content above"]');
  console.log("exit");
  await page.waitForSelector('[aria-label="Your self confidence : I KNEW"]');
  await page.click('[aria-label="Your self confidence : I KNEW"]');
  // await browser.close();
}
main();
