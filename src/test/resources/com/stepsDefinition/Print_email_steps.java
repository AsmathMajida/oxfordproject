package com.Oxford_Academy.stepsDefinition;

import com.Oxford_Academy.PageObject.Print_email;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Print_email_steps 
{
Print_email print=new Print_email();
@Given("^I launched the chrome browser$")
public void i_launched_the_chrome_browser() throws Throwable 
{
 print.Launch_browser("chrome");
}

@When("^I opened the website$")
public void i_opened_the_website() throws Throwable 
{
 print.Oxford_website();
}

@Then("^I print the email id$")
public void i_print_the_email_id() throws Throwable
{
 print.email_id();
}

@Then("^I closed the page$")
public void i_closed_the_page() throws Throwable 
{
 print.close();
}

}
