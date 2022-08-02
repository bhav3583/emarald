$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("filter.feature");
formatter.feature({
  "line": 1,
  "name": "Verify year filter",
  "description": "As a user i would like to filter book part",
  "id": "verify-year-filter",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19769760900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on marketing page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on marketing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept the consent",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.userIsOnMarketingPage()"
});
formatter.result({
  "duration": 421737500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAcceptTheConsent()"
});
formatter.result({
  "duration": 343305700,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "As user i would like to filter book part monthly",
  "description": "",
  "id": "verify-year-filter;as-user-i-would-like-to-filter-book-part-monthly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I click on last month link in year filter",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should verify that book part arrange with last month publication date",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iClickOnLastMonthLinkInYearFilter()"
});
formatter.result({
  "duration": 3301546500,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldVerifyThatBookPartArrangeWithLastMonthPublicationDate()"
});
formatter.result({
  "duration": 396012500,
  "status": "passed"
});
formatter.after({
  "duration": 958237700,
  "status": "passed"
});
formatter.before({
  "duration": 7402403200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "User is on marketing page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user is on marketing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I accept the consent",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepdefs.userIsOnMarketingPage()"
});
formatter.result({
  "duration": 13020800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iAcceptTheConsent()"
});
formatter.result({
  "duration": 199458000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "As user i would like to filter book part weekly",
  "description": "",
  "id": "verify-year-filter;as-user-i-would-like-to-filter-book-part-weekly",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I click on last week link in year filter",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should verify book part arrange with last week date",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iClickOnLastWeekLinkInYearFilter()"
});
formatter.result({
  "duration": 2906364300,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldVerifyBookPartArrangeWithLastWeekDate()"
});
formatter.result({
  "duration": 20388767100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Last week\u0027)]\"}\n  (Session info: chrome\u003d103.0.5060.134)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-P441J84O\u0027, ip: \u0027192.168.0.208\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [383c600c107088db7a89ad99f359529f, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027Last week\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 103.0.5060.134, chrome: {chromedriverVersion: 103.0.5060.134 (8ec6fce403b..., userDataDir: C:\\Users\\bhave\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60921}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60921/devtoo..., se:cdpVersion: 103.0.5060.134, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 383c600c107088db7a89ad99f359529f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat com.emerald.utility.Utility.clickOnElement(Utility.java:49)\r\n\tat com.emerald.pages.MarketingPages.verifyPublicationByWeek(MarketingPages.java:124)\r\n\tat com.emerald.steps.MyStepdefs.iShouldVerifyBookPartArrangeWithLastWeekDate(MyStepdefs.java:45)\r\n\tat ✽.Then I should verify book part arrange with last week date(filter.feature:14)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1330192300,
  "status": "passed"
});
});