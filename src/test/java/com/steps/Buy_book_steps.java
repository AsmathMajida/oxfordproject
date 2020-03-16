package com.steps;

import com.main_java.Buy_book;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Buy_book_steps
{
Buy_book book=new Buy_book();
@Given("^user launches the browser$")
public void user_launches_the_browser() throws Throwable 
{
  book.launchUrl();
}

@When("^user launches the Oxford Academy website$")
public void user_launches_the_Oxford_Academy_website() throws Throwable 
{
  book.Oxford_homepage();
}

@Then("^user selects Diplomatic history$")
public void user_selects_Diplomatic_history() throws Throwable 
{
  book.history_click();
}

@Then("^purchase book$")
public void purchase_book() throws Throwable 
{
  book.purchase();
}

@Then("^close the page$")
public void close_the_page() throws Throwable 
{
  book.close();

}

}