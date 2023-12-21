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

  for (let i = 4685; i <= 4800; i += 4) {
    //const ownerEmail = `loadtestuser004601@mail.com`;
    const ownerEmail = ;
    const password1 = "P@ssw0rd1234";
    await page.goto(
      "https://ilearn.learnsaf.gov.sg/educator.html?s=ShjMjhGcfNzNzIzXy5ETEVVU14GbkVXc"
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
    await page.waitForSelector('[aria-label="ADD CLASS"]');
    await page.click('[aria-label="ADD CLASS"]');
    await page.waitForSelector('[aria-label="Name"]');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await page.click('[aria-label="Name"]');
    await page.type('[aria-label="Name"]', "performance test class 1");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await page.click('[aria-label = "Create Forum"]');
    await page.click('[aria-label = "Allow Learners to Discover Each Other"]');
    await page.click('[aria-label = "SAVE"]');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await page.waitForSelector('[aria-label = "Show Menu"]');
    await page.click('[aria-label = "Show Menu"]');
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await page.waitForSelector('[aria-label = "Home Page"]');
    await page.click('[aria-label = "Home Page"]');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    for (let j = 1; j <= 3; j++) {
      const learnerEmail = `LoadTester${String(i + j).padStart(6, "0")}`;

      console.log("learner " + learnerEmail);
      await page.waitForSelector('[aria-label = "person_add"]');
      await page.click('[aria-label = "person_add"]');
      console.log("Person ready to be added");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await page.waitForSelector('[aria-label = "add"]');

      await page.click('[aria-label = "add"]');
      await page.keyboard.press("Tab");
      await page.keyboard.press("Enter");
      console.log("clicked on add");
      await new Promise((resolve) => setTimeout(resolve, 1500));
      await page.waitForSelector('[aria-label = "User Userid"]');
      await page.click('[aria-label = "User Userid"]');
      await page.type('[aria-label = "User Userid"]', learnerEmail);
      await page.keyboard.press("ArrowDown");
      await page.keyboard.press("Enter");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await page.waitForSelector('[aria-label = "Switch Control"]');
      await page.keyboard.press("Tab");
      await page.keyboard.press("Tab");
      await page.keyboard.press("Tab");
      await page.keyboard.press("Enter");
      await page.waitForSelector('[aria-label = "GRANT"]');
      await page.click('[aria-label = "GRANT"]');
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await page.waitForSelector('[aria-label = "CLOSE"]');
    await page.click('[aria-label = "CLOSE"]');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await page.waitForSelector('[aria-label = "Show Menu"]');
    await page.click('[aria-label = "Show Menu"]');
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await page.waitForSelector('[aria-label = "LOGOUT"]');
    await page.click('[aria-label = "LOGOUT"]');
    await new Promise((resolve) => setTimeout(resolve, 10000));
  }
}

// const addClass=async()=>{
//     await page.wait
// }
main();
