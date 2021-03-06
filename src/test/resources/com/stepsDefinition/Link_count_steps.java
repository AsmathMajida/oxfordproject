package com.Oxford_Academy.stepsDefinition;

import com.Oxford_Academy.PageObject.Link_count;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Link_count_steps
{
Link_count count=new Link_count();
@Given("^user launches the chrome browser$")
public void user_launches_the_chrome_browser() throws Throwable
{
 count.Launch_browser("chrome");
}

@When("^user opens the webpage and logs in$")
public void user_opens_the_webpage_and_logs_in() throws Throwable 
{
 count.Oxford_homepage();
}

@Then("^user counts the number of journals and prints$")
public void user_counts_the_number_of_journals_and_prints() throws Throwable 
{
 count.count_link();
}

@Then("^closes the page$")
public void closes_the_page() throws Throwable
{
 count.close();
}

}
