package com.steps;

import com.main_java.Communication_preference;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Communication_preference_steps 
{
Communication_preference prefer=new Communication_preference();
@Given("^user launching the chrome browser$")
public void user_launching_the_chrome_browser() throws Throwable 
{
    prefer.launch_browser();
}

@When("^user open the website and logged in$")
public void user_open_the_website_and_logged_in() throws Throwable 
{
    prefer.Oxford_homepage();
}

@Then("^user selects the communication preference$")
public void user_selects_the_communication_preference() throws Throwable 
{
    prefer.preference_click();
}

@Then("^user closed the browser$")
public void user_closed_the_browser() throws Throwable
{
   prefer.exit();
}

}
