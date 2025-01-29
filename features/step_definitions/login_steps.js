const { Given, Then, When } = require("@cucumber/cucumber");
const assert = require("assert");
const { By } = require("selenium-webdriver");

Given("I visit appian website", async function () {
  await this.driver.get(
    "https://impera.appiancloud.com/suite/sites/automated-test-site"
  );
});

When("I see google to authenticate click on NO option", async function () {
  const options = await this.driver.findElement(
    By.xpath("//*[@id='loginBox']/div/div[3]/div[2]/a")
  );
  const screenshot = await this.driver.takeScreenshot();
  const decodedImage = Buffer.from(screenshot, "base64");
  this.attach(decodedImage, "image/png");
  await options.click();
});

When(
  "I should see appian login page try to login with this credentials:",
  async function (dataTable) {
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

    const loginButton = await this.driver.findElement(
      By.xpath('//*[@id="loginForm"]/div[4]/div/div[2]/input')
    );
    const screenshot = await this.driver.takeScreenshot();
    const decodedImage = Buffer.from(screenshot, "base64");
    this.attach(decodedImage, "image/png");
    await loginButton.click();
  }
);

When("I see error message", async function () {
  const errorMessage = await this.driver.findElement(
    By.xpath('//*[@id="errorMsg"]')
  );
  const text = await errorMessage.getText();
  assert.strictEqual(
    text,
    "The username/password entered is invalid. Usernames and passwords are case sensitive."
  );
  const screenshot = await this.driver.takeScreenshot();
  const decodedImage = Buffer.from(screenshot, "base64");
  this.attach(decodedImage, "image/png");
});

Then("I try to login with this credentials:", async function (dataTable) {
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

  const loginButton = await this.driver.findElement(
    By.xpath('//*[@id="loginForm"]/div[4]/div/div[2]/input')
  );

  const screenshot = await this.driver.takeScreenshot();
  const decodedImage = Buffer.from(screenshot, "base64");
  this.attach(decodedImage, "image/png");
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
