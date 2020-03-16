package com.steps;

import com.Excel.Excel;
import com.main_java.Valid_login;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Valid_login_steps 
{
	Valid_login validlog=new Valid_login();
	Excel ec=new Excel();
	@Given("^the user launch chrome$")
	public void the_user_launch_chrome() throws Throwable 
	{
	  validlog.url();
	}

	@Then("^the user opens website$")
	public void the_user_opens_website() throws Throwable 
	{
	  validlog.oxford_homepage();
	}

	@Then("^the user enters the valid login details$")
	public void the_user_enters_the_valid_login_details() throws Throwable
	{
	   validlog.oxford_details(ec.excel_emailid(2),ec.excel_password(2));
	}
	
	@Then("^the user closes the browser$")
	public void the_user_closes_the_browser() throws Throwable
	{
	   validlog.oxford_close();
	}
	

}
