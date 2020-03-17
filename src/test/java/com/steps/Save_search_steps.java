package com.steps;

import com.main_java.Save_search;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Save_search_steps 
{
	Save_search save=new Save_search();
	@Given("^launching the browser$")
	public void launching_the_browser() throws Throwable 
	{
	   save.launch_browser();
	}

	@When("^opening the webpage and logs in$")
	public void opening_the_webpage_and_logs_in() throws Throwable
	{
       save.Oxford_homepage();
	}

	@Then("^user searches a journal and saves$")
	public void user_searches_a_journal_and_saves() throws Throwable
	{
       save.search_journal();
	}
	
	@Then("^user closes the webpage$")
	public void user_closes_the_webpage() throws Throwable
	{
	   save.quit();
	}




}
