package com.steps;

import com.main_java.Valid_Register;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Valid_Register_steps
{
	Valid_Register validreg=new Valid_Register();
	@Given("^Launch Chrome browser$")
	public void launch_Chrome_browser() throws Throwable
	{
      validreg.url();
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
