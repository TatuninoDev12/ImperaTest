const { Given, Then, When, Status } = require("@cucumber/cucumber");
const assert = require("assert");
const { By, TimeUnit } = require("selenium-webdriver");

Given("I open the appian website", async function () {
  await this.driver.get(
    "https://impera.appiancloud.com/suite/sites/automated-test-site"
  );
});

When("I see google to authenticate NO option", async function () {
  const options = await this.driver.findElement(
    By.xpath("//*[@id='loginBox']/div/div[3]/div[2]/a")
  );
  await options.click();
});

Then("I enter the user:", async function (dataTable) {
  const credentials = dataTable.rawTable.slice(1); // Remove header row
  const [username, password] = credentials[0];
  const usernameField = await this.driver.findElement(
    By.xpath("//*[@id='un']")
  );
  await usernameField.sendKeys(username);

  const passwordField = await this.driver.findElement(
    By.xpath('//*[@id="pw"]')
  );
  await passwordField.sendKeys(password);

  const screenshot = await this.driver.takeScreenshot();
  const decodedImage = Buffer.from(screenshot, "base64");
  this.attach(decodedImage, "image/png");

  const loginButton = await this.driver.findElement(
    By.xpath('//*[@id="loginForm"]/div[4]/div/div[2]/input')
  );

  await loginButton.click();

  await this.driver.sleep(5000);

  const options = await this.driver.findElement(
    By.xpath(
      '//*[@id="content"]/div[1]/div[3]/div/div/div/div/nav[2]/div[1]/ul/li[2]'
    )
  );

  const validationOpt = await options.getText();
  assert.strictEqual(validationOpt, "DATA INPUT");
});

Then("I Click on Data Inputs", async function () {
  const options = await this.driver.findElement(
    By.xpath(
      '//*[@id="content"]/div[1]/div[3]/div/div/div/div/nav[2]/div[1]/ul/li[2]/a'
    )
  );
  await options.click();
  await this.driver.sleep(5000);
  const screenshot = await this.driver.takeScreenshot();
  const decodedImage = Buffer.from(screenshot, "base64");
  this.attach(decodedImage, "image/png");
});

When(
  "I see form with data inputs enter this values:",
  async function (dataTable) {
    const dataInputs = dataTable.rawTable.slice(1); // Remove header row
    for (let i = 0; i < dataInputs.length; i++) {
      const [Title, Quantity, Price, Start_Date, hour] = dataInputs[i];
      const titleField = await this.driver.findElement(
        By.xpath(
          "/html/body/div[1]/div[1]/main/div/div/div[1]/div/div/div/div[1]/div/div/div[2]/div/div[1]/div[2]/div[1]/input"
        )
      );
      await titleField.clear();
      await titleField.sendKeys(Title);

      const quantityField = await this.driver.findElement(
        By.xpath(
          "/html/body/div[1]/div[1]/main/div/div/div[1]/div/div/div/div[1]/div/div/div[2]/div/div[2]/div[2]/div[1]/input"
        )
      );
      await quantityField.clear();
      await quantityField.sendKeys(Quantity);

      const priceField = await this.driver.findElement(
        By.xpath(
          "/html/body/div[1]/div[1]/main/div/div/div[1]/div/div/div/div[1]/div/div/div[2]/div/div[3]/div[2]/div[1]/input"
        )
      );
      await priceField.clear();
      await priceField.sendKeys(Price);

      const startDateField = await this.driver.findElement(
        By.xpath(
          "/html/body/div[1]/div[1]/main/div/div/div[1]/div/div/div/div[1]/div/div/div[2]/div/div[4]/div[2]/div[1]/div[1]/div/div/input"
        )
      );
      await startDateField.clear();
      await startDateField.sendKeys(Start_Date);

      const startTimeField = await this.driver.findElement(
        By.xpath(
          "/html/body/div[1]/div[1]/main/div/div/div[1]/div/div/div/div[1]/div/div/div[2]/div/div[4]/div[2]/div[1]/div[2]/div/input"
        )
      );
      await startTimeField.clear();
      await startTimeField.sendKeys(hour);

      const submit = await this.driver.findElement(
        By.xpath(
          '//*[@id="XrayComponentSelectionManager"]/div/div/div[3]/div/div/div[2]/div/div/button'
        )
      );

      const screenshot = await this.driver.takeScreenshot();
      const decodedImage = Buffer.from(screenshot, "base64");
      this.attach(decodedImage, "image/png");
      await submit.click();

      await this.driver.sleep(3000);
    }
  }
);

Then("I submit data check if the data is created:", async function (dataTable) {
  const automatedTestOpt = await this.driver.findElement(
    By.xpath(
      '//*[@id="content"]/div[1]/div[3]/div/div/div/div/nav[2]/div[1]/ul/li[1]/a'
    )
  );
  await automatedTestOpt.click();
  await this.driver.sleep(5000);

  const table = await this.driver.findElement(
    By.xpath(
      '//*[@id="XrayComponentSelectionManager"]/div/div/div[2]/div/div[2]/div[1]/table'
    )
  );

  const dataInputs = dataTable.rawTable.slice(1); // Remove header row
  const rows = await table.findElements(By.tagName("tr"));

  for (let i = 0; i < dataInputs.length; i++) {
    const [Title, Quantity, Price] = dataInputs[i];
    let titleFound = false;
    let quantityFound = false;
    let priceFound = false;
    for (let i = 0; i < rows.length; i++) {
      const columns = await rows[i].findElements(By.tagName("td"));
      for (let j = 0; j < columns.length; j++) {
        const cellText = await columns[j].getText();
        if (j === 0) {
          if (cellText.trim() === Title.trim()) {
            titleFound = true;
          }
        } else if (j === 1) {
          if (cellText.trim() === Quantity.trim()) {
            quantityFound = true;
          }
        } else if (j === 2) {
          if (cellText.trim() === Price.trim()) {
            priceFound = true;
          }
        }
      }
    }

    if (titleFound && quantityFound && priceFound) {
      this.attach(
        `Data value: Title: ${Title}, Quantity: ${Quantity}, Price: ${Price}. Data created successfully`,
        "text/plain"
      );
    } else {
      this.attach(
        `Data value: Title: ${Title}, Quantity: ${Quantity}, Price: ${Price}. Data not created`,
        "text/plain"
      );
    }

    const screenshot = await this.driver.takeScreenshot();
    const decodedImage = Buffer.from(screenshot, "base64");
    this.attach(decodedImage, "image/png");
  }
});
