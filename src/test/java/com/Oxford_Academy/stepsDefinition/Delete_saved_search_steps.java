package com.Oxford_Academy.stepsDefinition;

import com.Oxford_Academy.PageObject.Delete_saved_search;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Delete_saved_search_steps 
{
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



}
