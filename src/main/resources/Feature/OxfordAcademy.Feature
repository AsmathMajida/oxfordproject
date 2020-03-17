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

@tc07_Oxford_Academy_Download_journal
Scenario: download Csv.file from journal
	
Given I launch the chrome browser 
When I open the oxford website
Then I click the journalAtoZ button
Then I click dispatch date button
Then I select a journal
Then I download the file
And I close the page

@tc08_Oxford_Academy_Link_count
Scenario: Counting number of links in a page

Given user launches the chrome browser
When user opens the webpage and logs in
Then user counts the number of journals and prints
Then closes the page 

@tc09_Oxford_Academy_Print_email
Scenario: Printing the email id

Given I launched the chrome browser
When I opened the website
Then I print the email id
And I closed the page

@tc10_Oxford_Academy_Assert_check
Scenario: Checking the printed email

Given user launch chrome browser
When user should open oxford website
Then check email id
And close page

@tc11_Oxford_Academy_Currency_change
Scenario: Changing the currency

Given user launched the chrome browser
When user opened the website
Then user select book
Then user select currency
And user close the page

@tc12_Oxford_Academy_Edit_profile
Scenario: User editing the profile

Given I launch the chrome 
When I open the website and logs-in
Then I open the edit personal details page
Then I edit and personal details and updates
And I closes the browser

@tc13_Oxford_Academy_Save_search
Scenario: User checks if the search is saved 

Given launching the browser
When opening the webpage and logs in
Then user searches a journal and saves
And user closes the webpage

@tc14_Oxford_Academy_Delete_saved_search
Scenario: User deletes the saved search

Given The user should launch the chrome browser
When user should open the website and logs in
Then user should open the saved search
Then user should delete the saved search
And user should close the browser

@tc15_Oxford_Academy_Communication_preference
Scenario: User chooses the journal preference

Given user launching the chrome browser
When user open the website and logged in
Then user selects the communication preference 
Then user closed the browser



 	


