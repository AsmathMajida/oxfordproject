package com.Oxford_Academy.stepsDefinition;

import com.Excel.Excel;
import com.Oxford_Academy.PageObject.Assert_check;
import com.Oxford_Academy.PageObject.Buy_book;
import com.Oxford_Academy.PageObject.Communication_preference;
import com.Oxford_Academy.PageObject.Currency_change;
import com.Oxford_Academy.PageObject.Delete_saved_search;
import com.Oxford_Academy.PageObject.Download_journal;
import com.Oxford_Academy.PageObject.Edit_profile;
import com.Oxford_Academy.PageObject.Invalid_Login;
import com.Oxford_Academy.PageObject.Link_count;
import com.Oxford_Academy.PageObject.Print_email;
import com.Oxford_Academy.PageObject.Search;
import com.Oxford_Academy.PageObject.Valid_Register;
import com.Oxford_Academy.PageObject.Valid_login;
import com.Oxford_Academy.PageObject.count_subscription;
import com.Oxford_Academy.PageObject.invalid_Register;
import com.Excel.Excel;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Assert_check_steps 
{   
	Assert_check check=new Assert_check();
	@Given("^user launch chrome browser$")
	public void user_launch_chrome_browser() throws Throwable
	{
      check.Launch_browser("chrome");
	}

	@When("^user should open oxford website$")
	public void user_should_open_oxford_website() throws Throwable 
	{
      check.Oxford_website();
	}

	@Then("^check email id$")
	public void check_email_id() throws Throwable
	{
      check.title_check();
	}

	@Then("^close page$")
	public void close_page() throws Throwable 
	{
      check.close();
	}
	Buy_book book=new Buy_book();
	@Given("^user launches the browser$")
	public void user_launches_the_browser() throws Throwable 
	{
	  book.Launch_browser("chrome");
	}

	@When("^user launches the Oxford Academy website$")
	public void user_launches_the_Oxford_Academy_website() throws Throwable 
	{
	  book.Oxford_homepage();
	}

	@Then("^user selects Diplomatic history$")
	public void user_selects_Diplomatic_history() throws Throwable 
	{
	  book.history_click();
	}

	@Then("^purchase book$")
	public void purchase_book() throws Throwable 
	{
	  book.purchase();
	}

	@Then("^close the page$")
	public void close_the_page() throws Throwable 
	{
	  book.close();

	}
	Communication_preference prefer=new Communication_preference();
	@Given("^user launching the chrome browser$")
	public void user_launching_the_chrome_browser() throws Throwable 
	{
	    prefer.Launch_browser("chrome");
	}

	@When("^user open the website and logged in$")
	public void user_open_the_website_and_logged_in() throws Throwable 
	{
	    prefer.Oxford_homepage();
	}

	@Then("^user selects the communication preference$")
	public void user_selects_the_communication_preference() throws Throwable 
	{
	    prefer.preference_click();
	}

	@Then("^user closed the browser$")
	public void user_closed_the_browser() throws Throwable
	{
	   prefer.exit();
	}
	count_subscription save=new count_subscription();
	@Given("^launching the browser$")
	public void launching_the_browser() throws Throwable 
	{
	   save.Launch_browser("chrome");
	}

	@When("^opening the webpage and logs in$")
	public void opening_the_webpage_and_logs_in() throws Throwable
	{
       save.Oxford_homepage();
	}

	@Then("^user searches a journal and saves$")
	public void user_searches_a_journal_and_saves() throws Throwable
	{
       save.count_subscription();
	}
	
	@Then("^user closes the webpage$")
	public void user_closes_the_webpage() throws Throwable
	{
	   save.close();
	}
	Currency_change value=new Currency_change();
	@Given("^user launched the chrome browser$")
	public void user_launched_the_chrome_browser() throws Throwable 
	{
      value.Launch_browser("chrome");
	}

	@When("^user opened the website$")
	public void user_opened_the_website() throws Throwable 
	{
      value.oxford_website();
	}

	@Then("^user select book$")
	public void user_select_book() throws Throwable 
	{
      value.select_book();
	}

	@Then("^user select currency$")
	public void user_select_currency() throws Throwable
	{
      value.select_currency();
	}

	@Then("^user close the page$")
	public void user_close_the_page() throws Throwable 
	{
      value.close_page();
	}
	Delete_saved_search delete=new Delete_saved_search();
	@Given("^The user should launch the chrome browser$")
	public void the_user_should_launch_the_chrome_browser() throws Throwable 
	{
       delete.Launch_browser("chrome");
	}

	@When("^user should open the website and logs in$")
	public void user_should_open_the_website_and_logs_in() throws Throwable 
	{
       delete.Oxford_homepage();
	}

	@Then("^user should open the saved search$")
	public void user_should_open_the_saved_search() throws Throwable 
	{
       delete.search_page();
	}

	@Then("^user should delete the saved search$")
	public void user_should_delete_the_saved_search() throws Throwable 
	{
       delete.delete_saved();
	}

	@Then("^user should close the browser$")
	public void user_should_close_the_browser() throws Throwable 
	{
       delete.quit();
	}
	Download_journal download=new Download_journal();
	@Given("^I launch the chrome browser$")
	public void i_launch_the_chrome_browser() throws Throwable 
	{
	   download.Launch_browser("chrome");
	}

	@When("^I open the oxford website$")
	public void i_open_the_oxford_website() throws Throwable
	{
	    download.Oxford_website();
	}

	@Then("^I click the journalAtoZ button$")
	public void i_click_the_journalAtoZ_button() throws Throwable 
	{
	   download.journalAtoZ();
	}

	@Then("^I click dispatch date button$")
	public void i_click_dispatch_date_button() throws Throwable 
	{
	    download.dispatch_date();
	}

	@Then("^I select a journal$")
	public void i_select_a_journal() throws Throwable 
	{
	   download.Select_journal();
	}

	@Then("^I download the file$")
	public void i_download_the_file() throws Throwable 
	{
	   download.file_download();
	}

	@Then("^I close the page$")
	public void i_close_the_page() throws Throwable 
	{
	   download.close_page();
	}
	Edit_profile edit=new Edit_profile();
	@Given("^I launch the chrome$")
	public void i_launch_the_chrome() throws Throwable
	{
	   edit.Launch_browser("chrome");
	}
	@When("^I open the website and logs-in$")
	public void i_open_the_website_and_logs_in() throws Throwable 
	{
        edit.Oxford_homepage();
	}

	@Then("^I open the edit personal details page$")
	public void i_open_the_edit_personal_details_page() throws Throwable
	{
       edit.edit_profile();
	}

	@Then("^I edit and personal details and updates$")
	public void i_edit_and_personal_details_and_updates() throws Throwable 
	{
       edit.enter_details();
	}
	@Then("^I closes the browser$")
	public void i_closes_the_browser() throws Throwable
	{
       edit.close();
	}
	Invalid_Login log=new Invalid_Login();
	Excel ec1=new Excel();
	@Given("^the user launch the chrome browser$")
	public void the_user_launch_the_chrome_browser() throws Throwable 
	{
	   log.Launch_browser("chrome");
	}

	@Then("^the user opens the Oxford Academy website$")
	public void the_user_opens_the_Oxford_Academy_website() throws Throwable
	{
	   log.oxford_homepage();
	}
	
	@Then("^the user enters the invalid login details$")
	public void the_user_enters_the_invalid_login_details() throws Throwable
	{
		  log.oxford_details(ec1.excel_emailid(1), ec1.excel_password(1));
	}
	
	@Then("^the user close the browser$")
	public void the_user_close_the_browser() throws Throwable
	{
	   log.oxford_close();
	}
	invalid_Register reg=new invalid_Register();
	@Given("^Launch the Chrome browser$")
	public void launch_the_Chrome_browser() throws Throwable 
	{
       reg.Launch_browser("chrome");

	}

	@Then("^open the Oxford Academy website$")
	public void open_the_Oxford_Academy_website() throws Throwable
	{
       reg.Oxford_homepage();

	}

    @Then("^register the details$")
    public void register_the_details() throws Throwable
    {
    	reg.register_details();
    }
	
	@Then("^close the browser$")
	public void close_the_browser() throws Throwable
	{
	   reg.exit();
	}
	Link_count count=new Link_count();
	@Given("^user launches the chrome browser$")
	public void user_launches_the_chrome_browser() throws Throwable
	{
	 count.Launch_browser("chrome");
	}

	@When("^user opens the webpage and logs in$")
	public void user_opens_the_webpage_and_logs_in() throws Throwable 
	{
	 count.Oxford_homepage();
	}

	@Then("^user counts the number of journals and prints$")
	public void user_counts_the_number_of_journals_and_prints() throws Throwable 
	{
	 count.count_link();
	}

	@Then("^closes the page$")
	public void closes_the_page() throws Throwable
	{
	 count.close();
	}
	Print_email print=new Print_email();
	@Given("^I launched the chrome browser$")
	public void i_launched_the_chrome_browser() throws Throwable 
	{
	 print.Launch_browser("chrome");
	}

	@When("^I opened the website$")
	public void i_opened_the_website() throws Throwable 
	{
	 print.Oxford_website();
	}

	@Then("^I print the email id$")
	public void i_print_the_email_id() throws Throwable
	{
	 print.email_id();
	}

	@Then("^I closed the page$")
	public void i_closed_the_page() throws Throwable 
	{
	 print.close();
	}
	Search see=new Search();
	@Given("^The user should Launch the browser$")
	public void the_user_should_Launch_the_browser() throws Throwable 
	{
	   see.Launch_browser("chrome");
	}

	@Then("^The user should opens the Oxford Academy$")
	public void the_user_should_opens_the_Oxford_Academy() throws Throwable
	{
	    see.homepage();
	}

	@Then("^the user enters journal name in search box$")
	public void the_user_enters_journal_name_in_search_box() throws Throwable
	{
	    see.search_Journal();
	}

	@Then("^the user gets the title and prints$")
	public void the_user_gets_the_title_and_prints() throws Throwable 
	{
	    see.get_title();
	}

	@Then("^the user should close the browser$")
	public void the_user_should_close_the_browser() throws Throwable 
	{
	    see.quit();
	}
	Valid_login validlog=new Valid_login();
	Excel ec=new Excel();
	@Given("^the user launch chrome$")
	public void the_user_launch_chrome() throws Throwable 
	{
	  validlog.Launch_browser("chrome");
	}

	@Then("^the user opens website$")
	public void the_user_opens_website() throws Throwable 
	{
	  validlog.oxford_homepage();
	}

	@Then("^the user enters the valid login details$")
	public void the_user_enters_the_valid_login_details() throws Throwable
	{
	   validlog.oxford_details(ec1.excel_emailid(2),ec1.excel_password(2));
	}
	
	@Then("^the user closes the browser$")
	public void the_user_closes_the_browser() throws Throwable
	{
	   validlog.oxford_close();
	}
	Valid_Register validreg=new Valid_Register();
	@Given("^Launch Chrome browser$")
	public void launch_Chrome_browser() throws Throwable
	{
      validreg.Launch_browser("chrome");
	}

	@Then("^open Oxford Academy website$")
	public void open_Oxford_Academy_website() throws Throwable
	{
       validreg.Oxford_homepage();
	}
	
	@Then("^register the valid details$")
	public void register_the_valid_details() throws Throwable 
	{
	   validreg.register_details();
	}

	@Then("^close browser$")
	public void close_browser() throws Throwable 
	{
       validreg.exit();
	}


}
