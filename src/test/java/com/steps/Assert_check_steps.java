package com.steps;

import com.main_java.Assert_check;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Assert_check_steps 
{   
	Assert_check check=new Assert_check();
	@Given("^user launch chrome browser$")
	public void user_launch_chrome_browser() throws Throwable
	{
      check.url();
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


}
