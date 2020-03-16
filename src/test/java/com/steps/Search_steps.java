package com.steps;

import com.main_java.Search;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class Search_steps 
{
Search see=new Search();
@Given("^The user should Launch the browser$")
public void the_user_should_Launch_the_browser() throws Throwable 
{
   see.url();
}

@Then("^The user should opens the Oxford Academy$")
public void the_user_should_opens_the_Oxford_Academy() throws Throwable
{
    see.homepage();
}

@Then("^the user enters journal name in search box$")
public void the_user_enters_journal_name_in_search_box() throws Throwable
{
    see.search_Journal();
}

@Then("^the user gets the title and prints$")
public void the_user_gets_the_title_and_prints() throws Throwable 
{
    see.get_title();
}

@Then("^the user should close the browser$")
public void the_user_should_close_the_browser() throws Throwable 
{
    see.quit();
}

}
