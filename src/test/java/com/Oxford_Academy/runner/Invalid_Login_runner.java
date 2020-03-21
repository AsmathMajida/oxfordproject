package com.Oxford_Academy.runner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/Feature/OxfordAcademy.Feature",
		plugin = {"pretty", "html:reports/cucumber-html-report"},
		tags = {"@tc03_Oxford_Academy_invalid_login"},
		glue = {"com.steps"},
		monochrome = true
		)

public class Invalid_Login_runner
{

}

