package com.Oxford_Academy.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/Feature/OxfordAcademy.Feature",
		plugin = {"pretty", "html:reports/cucumber-html-report"},
		tags = {"@tc13_Oxford_Academy_count_subscription"},
		glue = {"com.steps"},
		monochrome = true
		)
public class count_subscription_runner 
{

}
