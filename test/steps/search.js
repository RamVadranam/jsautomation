const { Given, When, Then } = require('cucumber')

Given(/^open browser and enter "([^"]*)"$/, url => {
  browser.url(url)
  expect(browser.getTitle()).to.be.eql('Google')
})

When(/^searched for "([^"]*)"$/, content => {
  browser.setValue('#lst-ib', content)
  browser.pause(1000)
  browser.click('input[value="Google Search"]')
})

Then(/^dispay following "([^"]*)" on top$/, contentURL => {
  var elem = $('.iUh30')
  elem.waitForVisible(3000)
  var currentURL = browser.getText('.iUh30')
  expect(currentURL[0]).to.equal(contentURL)
})
