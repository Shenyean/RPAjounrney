const puppeteer = require("puppeteer");
async function main() {
  //const password1 = "Bekg!4081988";
  const browser = await puppeteer.launch({
    headless: false,
    protocolTimeout: 50000,
  });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1920,
    height: 1080,
  });

  for (let i = 4658; i <= 4800; i++) {
    //const ownerEmail = `loadtestuser004601@mail.com`;

    const ownerEmail = `A9-20${String(i).padStart(4, "0")}@area9.dk`;

    const password1 = "P@ssw0rd1234";
    await page.goto(
      "https://br.uat.sg.rhapsode.com/educator.html?s=mBXe35EWKR0XyIzXPRVU3Mjb4pGZvRXc"
    );
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await page.waitForSelector('[name="username"]');
    await page.waitForSelector('[name="password"]');
    await page.waitForSelector("#sign_in");
    await page.click('[name="username"]');
    await page.type('[name="username"]', ownerEmail);
    await page.click('[name="password"]');
    await page.type('[name="password"]', password1);
    await page.click("#sign_in");
    await new Promise((resolve) => setTimeout(resolve, 500));
    await page.waitForSelector('[aria-label="ADD CLASS"]');
    await page.click('[aria-label="ADD CLASS"]');
    await new Promise((resolve) => setTimeout(resolve, 500));
    await page.waitForSelector('[aria-label="Name"]');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await page.click('[aria-label="Name"]');
    await page.type('[aria-label="Name"]', "performance test class 1");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await page.click('[aria-label = "Create Forum"]');
    await page.click('[aria-label = "Allow Learners to Discover Each Other"]');
    await page.click('[aria-label = "SAVE"]');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await page.waitForSelector('[aria-label = "Show Menu"]');
    await page.click('[aria-label = "Show Menu"]');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await page.waitForSelector('[aria-label = "Home Page"]');
    await page.click('[aria-label = "Home Page"]');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    await new Promise((resolve) => setTimeout(resolve, 2000));
    await page.waitForSelector('[aria-label = "Show Menu"]');
    await page.click('[aria-label = "Show Menu"]');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await page.waitForSelector('[aria-label = "LOGOUT"]');
    await page.click('[aria-label = "LOGOUT"]');
    await new Promise((resolve) => setTimeout(resolve, 10000));
    console.log("educator" + i);
  }
}

// const addClass=async()=>{
//     await page.wait
// }
main();
