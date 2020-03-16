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
  "line": 57,
  "name": "Saving an image from website",
  "description": "",
  "id": "oxford-academy-website;saving-an-image-from-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@tc07_Oxford_Academy_Image_save"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "user should launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "user should open the Oxford website",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "user should click the link",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "user should save the image",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "user should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Save_image_steps.user_should_launch_the_browser()"
});
formatter.result({
  "duration": 6675672088,
  "status": "passed"
});
formatter.match({
  "location": "Save_image_steps.user_should_open_the_Oxford_website()"
});
formatter.result({
  "duration": 9614781007,
  "status": "passed"
});
formatter.match({
  "location": "Save_image_steps.user_should_click_the_link()"
});
formatter.result({
  "duration": 11956471100,
  "status": "passed"
});
formatter.match({
  "location": "Save_image_steps.user_should_save_the_image()"
});
formatter.result({
  "duration": 240685734,
  "error_message": "org.openqa.selenium.InvalidSelectorException: invalid selector: An invalid or illegal selector was specified\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BLT1212\u0027, ip: \u0027192.168.1.212\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\BLTUSE~1.BLT\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:59454}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a67f1eac48d876f980525d4bd56eb260\n*** Element info: {Using\u003dcss selector, value\u003dhttps://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/burnstrauma/Issue/8/11/cover.png?Expires\u003d1587319355\u0026Signature\u003dmud9uCHap2~ciIq6Kxb2BmbZF9sDcRkPcjq6BlzVBrgWw70iLwZvPKmuBTOri5Li1MIa0lapv7vWCu1FFRgVWvXh9T2gCQtW~cxkGV10i3o2-6CNaXb8-~Sso6iqmySUN35CISurptdl-8b3gM-1VMPZPFMt08iKCrLiKVsJ7AHHUWsmuRufdpytMaLLVUrJrkH7T40aMnFSNmyaerU3PeW1~mFCeaoysdtVXYMT1FMIQA0jYaNkWsbuTxH972tCxMAPV8v28-3laD6qEvA6KGePnv1mhFLg4tFjWRXc-CMD3WdCsW4vN3948HJyKoRbh2WRmEhMKvyk-6pgInyPtQ__\u0026Key-Pair-Id\u003dAPKAIE5G5CRDK6RD3PGA}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.main_java.Save_image.save_image(Save_image.java:43)\r\n\tat com.steps.Save_image_steps.user_should_save_the_image(Save_image_steps.java:32)\r\n\tat ✽.Then user should save the image(src/main/resources/Feature/OxfordAcademy.Feature:62)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Save_image_steps.user_should_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});