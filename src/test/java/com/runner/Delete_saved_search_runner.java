package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/Feature/OxfordAcademy.Feature",
		plugin = {"pretty", "html:reports/cucumber-html-report"},
		tags = {"@tc14_Oxford_Academy_Delete_saved_search"},
		glue = {"com.steps"},
		monochrome = true
		)
public class Delete_saved_search_runner 
{
	
}
