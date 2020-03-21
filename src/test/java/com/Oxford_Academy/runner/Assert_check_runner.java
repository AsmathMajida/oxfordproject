package com.Oxford_Academy.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/Feature/OxfordAcademy.Feature",
		plugin = {"pretty", "html:reports/cucumber-html-report"},
		tags = {"@tc10_Oxford_Academy_Assert_check"},
		glue = {"com.Oxford_Academy.stepsDefinition"},
		monochrome = true
		)
public class Assert_check_runner 
{

}
