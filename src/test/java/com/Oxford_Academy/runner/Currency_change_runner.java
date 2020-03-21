package com.Oxford_Academy.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/Feature/OxfordAcademy.Feature",
		plugin = {"pretty", "html:reports/cucumber-html-report"},
		tags = {"@tc11_Oxford_Academy_Currency_change"},
		glue = {"com.steps"},
		monochrome = true
		)
public class Currency_change_runner {

}
