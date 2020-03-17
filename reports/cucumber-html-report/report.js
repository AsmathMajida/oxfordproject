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
  "line": 5,
  "name": "Registering into Oxford Academy(Invalid register)",
  "description": "",
  "id": "oxford-academy-website;registering-into-oxford-academy(invalid-register)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tc01_Oxford_Academy_invalid_register"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Launch the Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "open the Oxford Academy website",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "register the details",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Register_steps.launch_the_Chrome_browser()"
});
formatter.result({
  "duration": 6767674692,
  "status": "passed"
});
formatter.match({
  "location": "Register_steps.open_the_Oxford_Academy_website()"
});
formatter.result({
  "duration": 9397596169,
  "status": "passed"
});
formatter.match({
  "location": "Register_steps.register_the_details()"
});
formatter.result({
  "duration": 15133006765,
  "status": "passed"
});
formatter.match({
  "location": "Register_steps.close_the_browser()"
});
formatter.result({
  "duration": 7075001479,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Registering into Oxford Academy(Valid register)",
  "description": "",
  "id": "oxford-academy-website;registering-into-oxford-academy(valid-register)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@tc02_Oxford_Academy_valid_register"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Launch Chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "open Oxford Academy website",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "register the valid details",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Valid_Register_steps.launch_Chrome_browser()"
});
formatter.result({
  "duration": 4338400764,
  "status": "passed"
});
formatter.match({
  "location": "Valid_Register_steps.open_Oxford_Academy_website()"
});
formatter.result({
  "duration": 7686463954,
  "status": "passed"
});
formatter.match({
  "location": "Valid_Register_steps.register_the_valid_details()"
});
formatter.result({
  "duration": 18156894127,
  "status": "passed"
});
formatter.match({
  "location": "Valid_Register_steps.close_browser()"
});
formatter.result({
  "duration": 7091186813,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Logging into Oxford Academy(Invalid login)",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy(invalid-login)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@tc03_Oxford_Academy_invalid_login"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "the user launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "the user opens the Oxford Academy website",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "the user enters the invalid login details",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "the user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_steps.the_user_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 4108256584,
  "status": "passed"
});
formatter.match({
  "location": "Login_steps.the_user_opens_the_Oxford_Academy_website()"
});
formatter.result({
  "duration": 6884738849,
  "status": "passed"
});
formatter.match({
  "location": "Login_steps.the_user_enters_the_invalid_login_details()"
});
formatter.result({
  "duration": 6321998872,
  "status": "passed"
});
formatter.match({
  "location": "Login_steps.the_user_close_the_browser()"
});
formatter.result({
  "duration": 5107749512,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Logging into Oxford Academy(Valid login)",
  "description": "",
  "id": "oxford-academy-website;logging-into-oxford-academy(valid-login)",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@tc04_Oxford_Academy_valid_login"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "the user launch chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "the user opens website",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "the user enters the valid login details",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "the user closes the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Valid_login_steps.the_user_launch_chrome()"
});
formatter.result({
  "duration": 4300766334,
  "status": "passed"
});
formatter.match({
  "location": "Valid_login_steps.the_user_opens_website()"
});
formatter.result({
  "duration": 133014251104,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BLT1212\u0027, ip: \u0027192.168.1.212\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\BLTUSE~1.BLT\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:55191}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: af467317e21f059f1a85fe659e55796a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getTitle(RemoteWebDriver.java:281)\r\n\tat com.main_java.Valid_login.oxford_homepage(Valid_login.java:25)\r\n\tat com.steps.Valid_login_steps.the_user_opens_website(Valid_login_steps.java:22)\r\n\tat ✽.Then the user opens website(src/main/resources/Feature/OxfordAcademy.Feature:32)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Valid_login_steps.the_user_enters_the_valid_login_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Valid_login_steps.the_user_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 38,
  "name": "Buy book from website",
  "description": "",
  "id": "oxford-academy-website;buy-book-from-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@tc05_Oxford_Academy_buybooks"
    }
  ]
});
formatter.step({
  "line": 40,
  "name": "user launches the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 41,
  "name": "user launches the Oxford Academy website",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "user selects Diplomatic history",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "purchase book",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "close the page",
  "keyword": "And "
});
formatter.match({
  "location": "Buy_book_steps.user_launches_the_browser()"
});
formatter.result({
  "duration": 4695934476,
  "status": "passed"
});
formatter.match({
  "location": "Buy_book_steps.user_launches_the_Oxford_Academy_website()"
});
formatter.result({
  "duration": 35490497621,
  "status": "passed"
});
formatter.match({
  "location": "Buy_book_steps.user_selects_Diplomatic_history()"
});
formatter.result({
  "duration": 9106700855,
  "status": "passed"
});
formatter.match({
  "location": "Buy_book_steps.purchase_book()"
});
formatter.result({
  "duration": 23907496772,
  "status": "passed"
});
formatter.match({
  "location": "Buy_book_steps.close_the_page()"
});
formatter.result({
  "duration": 180932815,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Searching journal in the application",
  "description": "",
  "id": "oxford-academy-website;searching-journal-in-the-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@tc06_Oxford_Academy_Search_journal"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "The user should Launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "The user should opens the Oxford Academy",
  "keyword": "Then "
});
formatter.step({
  "line": 52,
  "name": "the user enters journal name in search box",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "the user gets the title and prints",
  "keyword": "Then "
});
formatter.step({
  "line": 54,
  "name": "the user should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Search_steps.the_user_should_Launch_the_browser()"
});
formatter.result({
  "duration": 5261855314,
  "status": "passed"
});
formatter.match({
  "location": "Search_steps.the_user_should_opens_the_Oxford_Academy()"
});
formatter.result({
  "duration": 26555623907,
  "status": "passed"
});
formatter.match({
  "location": "Search_steps.the_user_enters_journal_name_in_search_box()"
});
formatter.result({
  "duration": 72900683731,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BLT1212\u0027, ip: \u0027192.168.1.212\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\BLTUSE~1.BLT\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:55410}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 44d6f7063a2e9a9e3340816038170216\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"sortOrderSelect\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.main_java.Search.search_Journal(Search.java:31)\r\n\tat com.steps.Search_steps.the_user_enters_journal_name_in_search_box(Search_steps.java:26)\r\n\tat ✽.Then the user enters journal name in search box(src/main/resources/Feature/OxfordAcademy.Feature:52)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Search_steps.the_user_gets_the_title_and_prints()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Search_steps.the_user_should_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 57,
  "name": "download Csv.file from journal",
  "description": "",
  "id": "oxford-academy-website;download-csv.file-from-journal",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@tc07_Oxford_Academy_Download_journal"
    }
  ]
});
formatter.step({
  "line": 59,
  "name": "I launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "I open the oxford website",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I click the journalAtoZ button",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "I click dispatch date button",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "I select a journal",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "I download the file",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "I close the page",
  "keyword": "And "
});
formatter.match({
  "location": "Download_journal_steps.i_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 4778275410,
  "status": "passed"
});
formatter.match({
  "location": "Download_journal_steps.i_open_the_oxford_website()"
});
formatter.result({
  "duration": 21288693326,
  "status": "passed"
});
formatter.match({
  "location": "Download_journal_steps.i_click_the_journalAtoZ_button()"
});
formatter.result({
  "duration": 30076588686,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Journals A to Z\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BLT1212\u0027, ip: \u0027192.168.1.212\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\BLTUSE~1.BLT\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:55530}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: be56a3a9e6349f912ce0519db59e32e7\n*** Element info: {Using\u003dlink text, value\u003dJournals A to Z}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.main_java.Download_journal.journalAtoZ(Download_journal.java:30)\r\n\tat com.steps.Download_journal_steps.i_click_the_journalAtoZ_button(Download_journal_steps.java:27)\r\n\tat ✽.Then I click the journalAtoZ button(src/main/resources/Feature/OxfordAcademy.Feature:61)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Download_journal_steps.i_click_dispatch_date_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Download_journal_steps.i_select_a_journal()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Download_journal_steps.i_download_the_file()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Download_journal_steps.i_close_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 68,
  "name": "Counting number of links in a page",
  "description": "",
  "id": "oxford-academy-website;counting-number-of-links-in-a-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 67,
      "name": "@tc08_Oxford_Academy_Link_count"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "user launches the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 71,
  "name": "user opens the webpage and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 72,
  "name": "user counts the number of journals and prints",
  "keyword": "Then "
});
formatter.step({
  "line": 73,
  "name": "closes the page",
  "keyword": "Then "
});
formatter.match({
  "location": "Link_count_steps.user_launches_the_chrome_browser()"
});
formatter.result({
  "duration": 4439353922,
  "status": "passed"
});
formatter.match({
  "location": "Link_count_steps.user_opens_the_webpage_and_logs_in()"
});
formatter.result({
  "duration": 26243480506,
  "status": "passed"
});
formatter.match({
  "location": "Link_count_steps.user_counts_the_number_of_journals_and_prints()"
});
formatter.result({
  "duration": 39117718,
  "status": "passed"
});
formatter.match({
  "location": "Link_count_steps.closes_the_page()"
});
formatter.result({
  "duration": 113193421,
  "status": "passed"
});
formatter.scenario({
  "line": 76,
  "name": "Printing the email id",
  "description": "",
  "id": "oxford-academy-website;printing-the-email-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 75,
      "name": "@tc09_Oxford_Academy_Print_email"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "I launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 79,
  "name": "I opened the website",
  "keyword": "When "
});
formatter.step({
  "line": 80,
  "name": "I print the email id",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "I closed the page",
  "keyword": "And "
});
formatter.match({
  "location": "Print_email_steps.i_launched_the_chrome_browser()"
});
formatter.result({
  "duration": 5311783861,
  "status": "passed"
});
formatter.match({
  "location": "Print_email_steps.i_opened_the_website()"
});
formatter.result({
  "duration": 51308421714,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"header-account-info-user-fullname\"]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BLT1212\u0027, ip: \u0027192.168.1.212\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\BLTUSE~1.BLT\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:55575}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 6c77045a26f23752e41c063c0d6d8aa3\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"header-account-info-user-fullname\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.main_java.Print_email.Oxford_website(Print_email.java:26)\r\n\tat com.steps.Print_email_steps.i_opened_the_website(Print_email_steps.java:21)\r\n\tat ✽.When I opened the website(src/main/resources/Feature/OxfordAcademy.Feature:79)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Print_email_steps.i_print_the_email_id()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Print_email_steps.i_closed_the_page()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 5809268982,
  "status": "passed"
});
formatter.match({
  "location": "Assert_check_steps.user_should_open_oxford_website()"
});
formatter.result({
  "duration": 21230119528,
  "status": "passed"
});
formatter.match({
  "location": "Assert_check_steps.check_email_id()"
});
formatter.result({
  "duration": 30037079191,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@id\u003d\"header-account-info-user-fullname\"]\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BLT1212\u0027, ip: \u0027192.168.1.212\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\BLTUSE~1.BLT\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:55603}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4a1058e4eb4d307825122fd3a57a6509\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"header-account-info-user-fullname\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.main_java.Assert_check.title_check(Assert_check.java:32)\r\n\tat com.steps.Assert_check_steps.check_email_id(Assert_check_steps.java:27)\r\n\tat ✽.Then check email id(src/main/resources/Feature/OxfordAcademy.Feature:88)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Assert_check_steps.close_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 92,
  "name": "Changing the currency",
  "description": "",
  "id": "oxford-academy-website;changing-the-currency",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 91,
      "name": "@tc11_Oxford_Academy_Currency_change"
    }
  ]
});
formatter.step({
  "line": 94,
  "name": "user launched the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 95,
  "name": "user opened the website",
  "keyword": "When "
});
formatter.step({
  "line": 96,
  "name": "user select book",
  "keyword": "Then "
});
formatter.step({
  "line": 97,
  "name": "user select currency",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "user close the page",
  "keyword": "And "
});
formatter.match({
  "location": "Currency_change_steps.user_launched_the_chrome_browser()"
});
formatter.result({
  "duration": 5066059268,
  "status": "passed"
});
formatter.match({
  "location": "Currency_change_steps.user_opened_the_website()"
});
formatter.result({
  "duration": 21270589690,
  "status": "passed"
});
formatter.match({
  "location": "Currency_change_steps.user_select_book()"
});
formatter.result({
  "duration": 50011142303,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"Journals A to Z\"}\n  (Session info: chrome\u003d80.0.3987.132)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BLT1212\u0027, ip: \u0027192.168.1.212\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\BLTUSE~1.BLT\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:55658}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 1a03e393366c4c47ffc15ec36b0f4f64\n*** Element info: {Using\u003dlink text, value\u003dJournals A to Z}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.main_java.Currency_change.select_book(Currency_change.java:28)\r\n\tat com.steps.Currency_change_steps.user_select_book(Currency_change_steps.java:27)\r\n\tat ✽.Then user select book(src/main/resources/Feature/OxfordAcademy.Feature:96)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Currency_change_steps.user_select_currency()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Currency_change_steps.user_close_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 101,
  "name": "User editing the profile",
  "description": "",
  "id": "oxford-academy-website;user-editing-the-profile",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 100,
      "name": "@tc12_Oxford_Academy_Edit_profile"
    }
  ]
});
formatter.step({
  "line": 103,
  "name": "I launch the chrome",
  "keyword": "Given "
});
formatter.step({
  "line": 104,
  "name": "I open the website and logs-in",
  "keyword": "When "
});
formatter.step({
  "line": 105,
  "name": "I open the edit personal details page",
  "keyword": "Then "
});
formatter.step({
  "line": 106,
  "name": "I edit and personal details and updates",
  "keyword": "Then "
});
formatter.step({
  "line": 107,
  "name": "I closes the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Edit_profile_steps.i_launch_the_chrome()"
});
formatter.result({
  "duration": 5781744888,
  "status": "passed"
});
formatter.match({
  "location": "Edit_profile_steps.i_open_the_website_and_logs_in()"
});
formatter.result({
  "duration": 48158691444,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BLT1212\u0027, ip: \u0027192.168.1.212\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\BLTUSE~1.BLT\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:55713}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0d8cfb186aef3f2b7461f3c018504135\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"header-account-info-user-fullname\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.main_java.Edit_profile.Oxford_homepage(Edit_profile.java:23)\r\n\tat com.steps.Edit_profile_steps.i_open_the_website_and_logs_in(Edit_profile_steps.java:20)\r\n\tat ✽.When I open the website and logs-in(src/main/resources/Feature/OxfordAcademy.Feature:104)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Edit_profile_steps.i_open_the_edit_personal_details_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Edit_profile_steps.i_edit_and_personal_details_and_updates()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Edit_profile_steps.i_closes_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 110,
  "name": "User checks if the search is saved",
  "description": "",
  "id": "oxford-academy-website;user-checks-if-the-search-is-saved",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 109,
      "name": "@tc13_Oxford_Academy_Save_search"
    }
  ]
});
formatter.step({
  "line": 112,
  "name": "launching the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 113,
  "name": "opening the webpage and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 114,
  "name": "user searches a journal and saves",
  "keyword": "Then "
});
formatter.step({
  "line": 115,
  "name": "user closes the webpage",
  "keyword": "And "
});
formatter.match({
  "location": "Save_search_steps.launching_the_browser()"
});
formatter.result({
  "duration": 4434974976,
  "status": "passed"
});
formatter.match({
  "location": "Save_search_steps.opening_the_webpage_and_logs_in()"
});
formatter.result({
  "duration": 9832310214,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BLT1212\u0027, ip: \u0027192.168.1.212\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\BLTUSE~1.BLT\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:55768}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 583c38d26fcde22907b184c649d78042\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\"header-account-info-user-fullname\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.main_java.Save_search.Oxford_homepage(Save_search.java:25)\r\n\tat com.steps.Save_search_steps.opening_the_webpage_and_logs_in(Save_search_steps.java:21)\r\n\tat ✽.When opening the webpage and logs in(src/main/resources/Feature/OxfordAcademy.Feature:113)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Save_search_steps.user_searches_a_journal_and_saves()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Save_search_steps.user_closes_the_webpage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 118,
  "name": "User deletes the saved search",
  "description": "",
  "id": "oxford-academy-website;user-deletes-the-saved-search",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 117,
      "name": "@tc14_Oxford_Academy_Delete_saved_search"
    }
  ]
});
formatter.step({
  "line": 120,
  "name": "The user should launch the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 121,
  "name": "user should open the website and logs in",
  "keyword": "When "
});
formatter.step({
  "line": 122,
  "name": "user should open the saved search",
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "user should delete the saved search",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "user should close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_saved_search_steps.the_user_should_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 8258758270,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom chrome not reachable\n  (Session info: chrome\u003d80.0.3987.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BLT1212\u0027, ip: \u0027192.168.1.212\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x0122A113+1548563]\n\tOrdinal0 [0x011ADDA1+1039777]\n\tOrdinal0 [0x0112E32E+516910]\n\tOrdinal0 [0x01128012+491538]\n\tOrdinal0 [0x011286EB+493291]\n\tOrdinal0 [0x01129855+497749]\n\tOrdinal0 [0x01125885+481413]\n\tOrdinal0 [0x0112F0D0+520400]\n\tOrdinal0 [0x010DC030+180272]\n\tOrdinal0 [0x010DB59D+177565]\n\tOrdinal0 [0x010D95FB+169467]\n\tOrdinal0 [0x010C160A+71178]\n\tOrdinal0 [0x010C2690+75408]\n\tOrdinal0 [0x010C2629+75305]\n\tOrdinal0 [0x011C71B7+1143223]\n\tGetHandleVerifier [0x012C2B46+507814]\n\tGetHandleVerifier [0x012C2864+507076]\n\tGetHandleVerifier [0x012C9F47+537511]\n\tGetHandleVerifier [0x012C3402+510050]\n\tOrdinal0 [0x011BF29C+1110684]\n\tOrdinal0 [0x011C938B+1151883]\n\tOrdinal0 [0x011C94F3+1152243]\n\tOrdinal0 [0x011C83F5+1147893]\n\tBaseThreadInitThunk [0x75C833AA+18]\n\tRtlInitializeExceptionChain [0x778E9F72+99]\n\tRtlInitializeExceptionChain [0x778E9F45+54]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat com.main_java.Delete_saved_search.launch_browser(Delete_saved_search.java:16)\r\n\tat com.steps.Delete_saved_search_steps.the_user_should_launch_the_chrome_browser(Delete_saved_search_steps.java:15)\r\n\tat ✽.Given The user should launch the chrome browser(src/main/resources/Feature/OxfordAcademy.Feature:120)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Delete_saved_search_steps.user_should_open_the_website_and_logs_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Delete_saved_search_steps.user_should_open_the_saved_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Delete_saved_search_steps.user_should_delete_the_saved_search()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Delete_saved_search_steps.user_should_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 127,
  "name": "User chooses the journal preference",
  "description": "",
  "id": "oxford-academy-website;user-chooses-the-journal-preference",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 126,
      "name": "@tc15_Oxford_Academy_Communication_preference"
    }
  ]
});
formatter.step({
  "line": 129,
  "name": "user launching the chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 130,
  "name": "user open the website and logged in",
  "keyword": "When "
});
formatter.step({
  "line": 131,
  "name": "user selects the communication preference",
  "keyword": "Then "
});
formatter.step({
  "line": 132,
  "name": "user closed the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Communication_preference_steps.user_launching_the_chrome_browser()"
});
formatter.result({
  "duration": 13371622114,
  "status": "passed"
});
formatter.match({
  "location": "Communication_preference_steps.user_open_the_website_and_logged_in()"
});
formatter.result({
  "duration": 6008232235,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d80.0.3987.132)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BLT1212\u0027, ip: \u0027192.168.1.212\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.132, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\BLTUSE~1.BLT\\AppDa...}, goog:chromeOptions: {debuggerAddress: localhost:55821}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 8e6f50b6230d7e9cf75789495402b9de\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.main_java.Communication_preference.Oxford_homepage(Communication_preference.java:23)\r\n\tat com.steps.Communication_preference_steps.user_open_the_website_and_logged_in(Communication_preference_steps.java:21)\r\n\tat ✽.When user open the website and logged in(src/main/resources/Feature/OxfordAcademy.Feature:130)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Communication_preference_steps.user_selects_the_communication_preference()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Communication_preference_steps.user_closed_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});