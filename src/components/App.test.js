const puppeteer = require("puppeteer");
const faker = require("faker");
const devices = require("puppeteer/DeviceDescriptors");
// import App from "./App";

const user = {
  email: faker.internet.email(),
  password: "test",
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName()
};

const isDebugging = () => {
  let debugging_mode = {
    headless: false,
    slowMo: 50,
    devtools: true
  };
  return process.env.NODE_ENV === "debug" ? debugging_mode : {};
};

let browser;
let page;
let logs = [];
let errors = [];

beforeAll(async () => {
  browser = await puppeteer.launch(isDebugging());
  page = await browser.newPage();
  await page.goto("http://localhost:3000/");
  done();
});

describe("on page load ", () => {
  test(
    "title loads correctly",
    async () => {
      const html = await page.$eval(".App", e => e.innerHTML);

      expect(html).toBe("Welcome to React");
    },
    1600000
  );
  done();
});

afterAll(() => {
  if (isDebugging()) {
    browser.close();
  }
});
