package com.Oxford_Academy.stepsDefinition;

import com.Excel.Excel;
import com.Oxford_Academy.PageObject.Invalid_Login;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Invalid_Login_steps 
{
	Invalid_Login log=new Invalid_Login();
	Excel ec=new Excel();
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
		  log.oxford_details(ec.excel_emailid(1), ec.excel_password(1));
	}
	
	@Then("^the user close the browser$")
	public void the_user_close_the_browser() throws Throwable
	{
	   log.oxford_close();
	}

}
