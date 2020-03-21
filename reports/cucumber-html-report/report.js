$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/OxfordAcademy.Feature");
formatter.feature({
  "line": 2,
  "name": "Oxford Academy Website",
  "description": "",
  "id": "oxford-academy-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Oxford_Academy_feature"
    }
  ]
});
formatter.scenario({
  "line": 84,
  "name": "Checking the printed email",
  "description": "",
  "id": "oxford-academy-website;checking-the-printed-email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 83,
      "name": "@tc10_Oxford_Academy_Assert_check"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "user launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "user should open oxford website",
  "keyword": "When "
});
formatter.step({
  "line": 88,
  "name": "check email id",
  "keyword": "Then "
});
formatter.step({
  "line": 89,
  "name": "close page",
  "keyword": "And "
});
formatter.match({
  "location": "Assert_check_steps.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 36130104300,
  "status": "passed"
});
formatter.match({
  "location": "Assert_check_steps.user_should_open_oxford_website()"
});
formatter.result({
  "duration": 92027548200,
  "status": "passed"
});
formatter.match({
  "location": "Assert_check_steps.check_email_id()"
});
formatter.result({
  "duration": 1040597500,
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-2IGVP25E\u0027, ip: \u0027192.168.225.63\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:59426}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 48b3f7799d297f48790fb403cff94e99\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"header-account-info-user-fullname\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.Oxford_Academy.PageObject.Assert_check.title_check(Assert_check.java:58)\r\n\tat com.Oxford_Academy.stepsDefinition.Assert_check_steps.check_email_id(Assert_check_steps.java:27)\r\n\tat ✽.Then check email id(src/main/resources/Feature/OxfordAcademy.Feature:88)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Assert_check_steps.close_page()"
});
formatter.result({
  "status": "skipped"
});
});