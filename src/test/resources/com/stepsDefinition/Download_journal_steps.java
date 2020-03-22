package com.Oxford_Academy.stepsDefinition;

import com.Oxford_Academy.PageObject.Download_journal;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Download_journal_steps 
{
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
	
}
