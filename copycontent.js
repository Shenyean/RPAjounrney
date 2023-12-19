const puppeteer = require("puppeteer");
async function main() {
  for (let i = 19; i <= 47; i++) {
    const password1 = "Bekg!4081988";
    const browser = await puppeteer.launch({
      headless: false,
      protocolTimeout: 50000,
    });
    const page = await browser.newPage();
    await page.setViewport({
      width: 1920,
      height: 1080,
    });

    await page.goto(
      `https://ilearn.learnsaf.gov.sg/curator.html?s=6x2aqh2ZmR2X3MzXzFGcvlWd5RncldXc#modules&project=14&subject=17&module_page=${i}`
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
    await page.waitForSelector('[name="username"]');
    await page.waitForSelector('[name="password"]');
    await page.waitForSelector("#sign_in");
    await page.click('[name="username"]');
    await page.type('[name="username"]', "shenyean.yeo@stengg.com");
    await page.click('[name="password"]');
    await page.type('[name="password"]', password1);
    await page.click("#sign_in");

    await new Promise((resolve) => setTimeout(resolve, 5000));
    for (let j = 32; j <= 242; j += 10) {
      const ariaLabel = "content_copy";
      const tabIndex = j;
      const altiOSAT = "ALTI OSAT Sub";
      await page.waitForSelector(
        `button[aria-label="${ariaLabel}"][tabindex="${tabIndex}"]`
      );
      console.log(`button found ${j}`);
      const buttonSelector = `button[aria-label="${ariaLabel}"][tabindex="${tabIndex}"]`;

      const button = await page.$(buttonSelector);
      if (button) {
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
        await new Promise((resolve) => setTimeout(resolve, 12000));
      } else {
        console.error(`Button not found.`);
        //console.error(`Button with aria-label "${ariaLabel}" and tabindex "${tabIndex}" not found.`);
      }
    }

    console.log(`page done ${i}`);
    await browser.close();
  }
}
main();
