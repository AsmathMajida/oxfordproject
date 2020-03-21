package com.Oxford_Academy.stepsDefinition;

import com.Oxford_Academy.PageObject.invalid_Register;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class invalid_Register_steps
{
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

}
