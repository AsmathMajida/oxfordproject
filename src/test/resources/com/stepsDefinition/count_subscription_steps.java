package com.Oxford_Academy.stepsDefinition;

import com.Oxford_Academy.PageObject.count_subscription;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class count_subscription_steps 
{
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




}
