$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Capstone"
    }
  ]
});
formatter.before({
  "duration": 11541030000,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with valid email dan password",
  "description": "",
  "id": "login;login-with-valid-email-dan-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user on the sirloinPOS website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user click email field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user input email \"mukhlisanshori123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user click password field",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user input \"Mukhlis123\" as password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user click login button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "pop up berhasil login is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnTheSirloinPOSWebsite()"
});
formatter.result({
  "duration": 730381800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickEmailField()"
});
formatter.result({
  "duration": 448023800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mukhlisanshori123@gmail.com",
      "offset": 18
    }
  ],
  "location": "LoginSteps.userInputEmail(String)"
});
formatter.result({
  "duration": 2512385800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickPasswordField()"
});
formatter.result({
  "duration": 181406200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mukhlis123",
      "offset": 12
    }
  ],
  "location": "LoginSteps.userInputAsPassword(String)"
});
formatter.result({
  "duration": 2250313300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickLoginButton()"
});
formatter.result({
  "duration": 143992500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.popUpBerhasilLoginIsDisplayed()"
});
formatter.result({
  "duration": 97418500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//h2[@class\u003d\u0027swal2-title\u0027]\"}\n  (Session info: chrome\u003d109.0.5414.120)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027DESKTOP-BCDTMLR\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [0ddb6bafe3a9135b14781a7ad0a2c2d7, findElement {using\u003dxpath, value\u003d//h2[@class\u003d\u0027swal2-title\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 109.0.5414.120, chrome: {chromedriverVersion: 109.0.5414.74 (e7c5703604da..., userDataDir: C:\\Users\\USER\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:12903}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:12903/devtoo..., se:cdpVersion: 109.0.5414.120, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0ddb6bafe3a9135b14781a7ad0a2c2d7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:382)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:374)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy21.isDisplayed(Unknown Source)\r\n\tat org.example.pageObject.LoginPage.berhasilLoginDisplayed(LoginPage.java:52)\r\n\tat StepDef.LoginSteps.popUpBerhasilLoginIsDisplayed(LoginSteps.java:59)\r\n\tat ✽.Then pop up berhasil login is displayed(features/Login.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2349004800,
  "status": "passed"
});
});