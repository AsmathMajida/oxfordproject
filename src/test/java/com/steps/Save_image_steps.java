package com.steps;

import com.main_java.Save_image;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Save_image_steps 
{
	Save_image save=new Save_image();
	@Given("^user should launch the browser$")
	public void user_should_launch_the_browser() throws Throwable 
	{
	  save.url();
	}

	@Then("^user should open the Oxford website$")
	public void user_should_open_the_Oxford_website() throws Throwable
	{
	  save.homepage();
	}

	@Then("^user should click the link$")
	public void user_should_click_the_link() throws Throwable 
	{
	  save.link_click();
	}

	@Then("^user should save the image$")
	public void user_should_save_the_image() throws Throwable 
	{
	   save.save_image();
	}

	@Then("^user should close the browser$")
	public void user_should_close_the_browser() throws Throwable
	{
	    save.fini();
	}



}
