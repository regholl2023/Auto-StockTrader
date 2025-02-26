// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Buy', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Buy', async function() {
    vars["TICKER"] = "AREB"
    vars["accounts"] = await driver.executeScript("return [\'YOUR\',\'ACCOUNT\',\"NUMBERS\',\'HERE\']")
    vars["LIMIT_PRICE"] = await driver.executeScript("return .26")
    vars["target"] = await driver.executeScript("return \"SLICE_TARGET\"")
    vars["QUANT"] = "1"
    vars["list"] = await driver.executeScript("return arguments[0].slice(arguments[0].indexOf(arguments[1]) + 1);", vars["accounts"],vars["target"])
    const collection = vars["list"]
    for (let i = 0; i < collection.length - 1; i++) {
      vars["account"] = vars["list"][i]
      await driver.get("https://oltx.fidelity.com/ftgw/fbc/oftrade/stockInit?ignoreRedirect=Y&ORDER_TYPE=E&ACCOUNT=vars["account"]&SYMBOL=${TICKER}&PRICE_TYPE=L&ORDER_ACTION=B&QTY=${QUANT}&AMOUNT=111.03&SKIP_ORDER_PREVIEW=N")
      await driver.findElement(By.css("#action-buy s-assigned-wrapper")).click()
      await driver.findElement(By.css("#market-no s-slot")).click()
      await driver.sleep(2300)
      await driver.findElement(By.id("eqt-ordsel-limit-price-label")).click()
      await driver.sleep(2300)
      await driver.findElement(By.id("eqt-ordsel-limit-price-field")).sendKeys(vars["LIMIT_PRICE"])
      await driver.findElement(By.id("eqt-ordsel-limit-price-field")).click()
      await driver.findElement(By.id("eqt-ordsel-limit-price-field")).sendKeys(vars["LIMIT_PRICE"])
      await driver.sleep(2300)
      await driver.findElement(By.css("#previewOrderBtn .pvd3-button-root")).click()
      await driver.findElement(By.id("placeOrderBtn")).click()
      console.log(vars["account"]: Purchasing ${TICKER} Test Completed.)
    }
  })
})
