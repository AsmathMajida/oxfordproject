package com.steps;

import com.main_java.Currency_change;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Currency_change_steps
{
	Currency_change value=new Currency_change();
	@Given("^user launched the chrome browser$")
	public void user_launched_the_chrome_browser() throws Throwable 
	{
      value.url();
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



}
