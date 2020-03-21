package com.Oxford_Academy.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/Feature/OxfordAcademy.Feature",
		plugin = {"pretty", "html:reports/cucumber-html-report"},
		tags = {"@tc05_Oxford_Academy_buybooks"},
		glue = {"com.Oxford_Academy.stepsDefinition"},
		monochrome = true
		)
public class Buy_book_runner 
{

}
