@Oxford_Academy_feature
Feature: Oxford Academy Website

@tc01_Oxford_Academy_invalid_register 
Scenario: Registering into Oxford Academy(Invalid register)

Given Launch the Chrome browser
Then open the Oxford Academy website
Then register the details
Then close the browser

@tc02_Oxford_Academy_valid_register 
Scenario: Registering into Oxford Academy(Valid register)

Given Launch Chrome browser
Then open Oxford Academy website
Then register the valid details
Then close browser

@tc03_Oxford_Academy_invalid_login
Scenario: Logging into Oxford Academy(Invalid login)

Given the user launch the chrome browser
Then the user opens the Oxford Academy website
Then the user enters the invalid login details
Then the user close the browser

@tc04_Oxford_Academy_valid_login
Scenario: Logging into Oxford Academy(Valid login)

Given the user launch chrome
Then the user opens website
Then the user enters the valid login details
Then the user closes the browser


@tc05_Oxford_Academy_buybooks
Scenario:  Buy book from website

Given user launches the browser
When user launches the Oxford Academy website
Then user selects Diplomatic history
Then purchase book
And close the page


@tc06_Oxford_Academy_Search_journal
Scenario: Searching journal in the application

Given The user should Launch the browser
Then The user should opens the Oxford Academy
Then the user enters journal name in search box
Then the user gets the title and prints
Then the user should close the browser

@tc07_Oxford_Academy_Image_save
Scenario: Saving an image from website

Given user should launch the browser
Then user should open the Oxford website
Then user should click the link
Then user should save the image
Then user should close the browser
