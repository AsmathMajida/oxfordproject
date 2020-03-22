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
  "location": "oxfordacademy_stepdefinition.launch_the_Chrome_browser()"
});
formatter.result({
  "duration": 39909913600,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.open_the_Oxford_Academy_website()"
});
formatter.result({
  "duration": 36761483100,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.register_the_details()"
});
formatter.result({
  "duration": 23623084100,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.close_the_browser()"
});
formatter.result({
  "duration": 5967498400,
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
  "location": "oxfordacademy_stepdefinition.launch_Chrome_browser()"
});
formatter.result({
  "duration": 20853600400,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.open_Oxford_Academy_website()"
});
formatter.result({
  "duration": 39519714000,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.register_the_valid_details()"
});
formatter.result({
  "duration": 23863973900,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.close_browser()"
});
formatter.result({
  "duration": 5381596200,
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
  "location": "oxfordacademy_stepdefinition.the_user_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 23785129100,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.the_user_opens_the_Oxford_Academy_website()"
});
formatter.result({
  "duration": 41676374800,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.the_user_enters_the_invalid_login_details()"
});
formatter.result({
  "duration": 44371869900,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.the_user_close_the_browser()"
});
formatter.result({
  "duration": 3825025100,
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
  "location": "oxfordacademy_stepdefinition.the_user_launch_chrome()"
});
formatter.result({
  "duration": 29409277900,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.the_user_opens_website()"
});
formatter.result({
  "duration": 25283252100,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.the_user_enters_the_valid_login_details()"
});
formatter.result({
  "duration": 6030747800,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.the_user_closes_the_browser()"
});
formatter.result({
  "duration": 8187836500,
  "status": "passed"
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
  "location": "oxfordacademy_stepdefinition.user_launches_the_browser()"
});
formatter.result({
  "duration": 30296881200,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_launches_the_Oxford_Academy_website()"
});
formatter.result({
  "duration": 78107976400,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_selects_Diplomatic_history()"
});
formatter.result({
  "duration": 62669748000,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.purchase_book()"
});
formatter.result({
  "duration": 22025220800,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.close_the_page()"
});
formatter.result({
  "duration": 432482300,
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
  "location": "oxfordacademy_stepdefinition.the_user_should_Launch_the_browser()"
});
formatter.result({
  "duration": 29493456600,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.the_user_should_opens_the_Oxford_Academy()"
});
formatter.result({
  "duration": 15732597800,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.the_user_enters_journal_name_in_search_box()"
});
formatter.result({
  "duration": 9628660700,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.the_user_gets_the_title_and_prints()"
});
formatter.result({
  "duration": 368819200,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.the_user_should_close_the_browser()"
});
formatter.result({
  "duration": 1229179000,
  "status": "passed"
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
  "location": "oxfordacademy_stepdefinition.i_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 20615242000,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.i_open_the_oxford_website()"
});
formatter.result({
  "duration": 37610894700,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.i_click_the_journalAtoZ_button()"
});
formatter.result({
  "duration": 11618373100,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.i_click_dispatch_date_button()"
});
formatter.result({
  "duration": 4372289300,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.i_select_a_journal()"
});
formatter.result({
  "duration": 1205604400,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.i_download_the_file()"
});
formatter.result({
  "duration": 149559500,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.i_close_the_page()"
});
formatter.result({
  "duration": 3104551900,
  "status": "passed"
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
  "location": "oxfordacademy_stepdefinition.user_launches_the_chrome_browser()"
});
formatter.result({
  "duration": 50060435900,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_opens_the_webpage_and_logs_in()"
});
formatter.result({
  "duration": 166496033000,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_counts_the_number_of_journals_and_prints()"
});
formatter.result({
  "duration": 495714400,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.closes_the_page()"
});
formatter.result({
  "duration": 882969700,
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
  "location": "oxfordacademy_stepdefinition.i_launched_the_chrome_browser()"
});
formatter.result({
  "duration": 22193648900,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.i_opened_the_website()"
});
formatter.result({
  "duration": 28873092300,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.i_print_the_email_id()"
});
formatter.result({
  "duration": 6767220800,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.i_closed_the_page()"
});
formatter.result({
  "duration": 414513800,
  "status": "passed"
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
  "location": "oxfordacademy_stepdefinition.user_launch_chrome_browser()"
});
formatter.result({
  "duration": 29265569600,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_should_open_oxford_website()"
});
formatter.result({
  "duration": 31111767500,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.check_email_id()"
});
formatter.result({
  "duration": 21195263600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cmaha[]lakshmi.c98@gmail.co...\u003e but was:\u003cmaha[ maha]lakshmi.c98@gmail.co...\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.Oxford_Academy.PageObject.Assert_check.title_check(Assert_check.java:70)\r\n\tat com.Oxford_Academy.stepsDefinition.oxfordacademy_stepdefinition.check_email_id(oxfordacademy_stepdefinition.java:59)\r\n\tat ✽.Then check email id(src/main/resources/Feature/OxfordAcademy.Feature:88)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.close_page()"
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
  "location": "oxfordacademy_stepdefinition.user_launched_the_chrome_browser()"
});
formatter.result({
  "duration": 57493648400,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_opened_the_website()"
});
formatter.result({
  "duration": 58040654100,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_select_book()"
});
formatter.result({
  "duration": 22242442300,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_select_currency()"
});
formatter.result({
  "duration": 14724354500,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_close_the_page()"
});
formatter.result({
  "duration": 826361900,
  "status": "passed"
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
  "location": "oxfordacademy_stepdefinition.i_launch_the_chrome()"
});
formatter.result({
  "duration": 22606814500,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.i_open_the_website_and_logs_in()"
});
formatter.result({
  "duration": 43577846900,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.i_open_the_edit_personal_details_page()"
});
formatter.result({
  "duration": 12030709100,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.i_edit_and_personal_details_and_updates()"
});
formatter.result({
  "duration": 13610865100,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.i_closes_the_browser()"
});
formatter.result({
  "duration": 1243036300,
  "status": "passed"
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
      "name": "@tc13_Oxford_Academy_count_subscription"
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
  "location": "oxfordacademy_stepdefinition.launching_the_browser()"
});
formatter.result({
  "duration": 32578626600,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.opening_the_webpage_and_logs_in()"
});
formatter.result({
  "duration": 58283592300,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_searches_a_journal_and_saves()"
});
formatter.result({
  "duration": 17898825400,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_closes_the_webpage()"
});
formatter.result({
  "duration": 226154900,
  "status": "passed"
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
  "location": "oxfordacademy_stepdefinition.the_user_should_launch_the_chrome_browser()"
});
formatter.result({
  "duration": 26808404700,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_should_open_the_website_and_logs_in()"
});
formatter.result({
  "duration": 67824040100,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_should_open_the_saved_search()"
});
formatter.result({
  "duration": 15123902600,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_should_delete_the_saved_search()"
});
formatter.result({
  "duration": 37690913500,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"/html/body/div[3]/section/div/div[2]/div/ul/li[4]/div/div/div[2]/a\"}\n  (Session info: chrome\u003d80.0.3987.149)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-2IGVP25E\u0027, ip: \u0027192.168.225.63\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027x86\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 79.0.3945.36 (3582db32b3389..., userDataDir: C:\\Users\\hp\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:50271}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 90dd0547beba3bf6c51e4f1dbf60f873\n*** Element info: {Using\u003dxpath, value\u003d/html/body/div[3]/section/div/div[2]/div/ul/li[4]/div/div/div[2]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat com.Oxford_Academy.PageObject.Delete_saved_search.delete_saved(Delete_saved_search.java:70)\r\n\tat com.Oxford_Academy.stepsDefinition.oxfordacademy_stepdefinition.user_should_delete_the_saved_search(oxfordacademy_stepdefinition.java:198)\r\n\tat ✽.Then user should delete the saved search(src/main/resources/Feature/OxfordAcademy.Feature:123)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_should_close_the_browser()"
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
  "location": "oxfordacademy_stepdefinition.user_launching_the_chrome_browser()"
});
formatter.result({
  "duration": 77148804800,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_open_the_website_and_logged_in()"
});
formatter.result({
  "duration": 30802457000,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_selects_the_communication_preference()"
});
formatter.result({
  "duration": 52338427500,
  "status": "passed"
});
formatter.match({
  "location": "oxfordacademy_stepdefinition.user_closed_the_browser()"
});
formatter.result({
  "duration": 963513500,
  "status": "passed"
});
});