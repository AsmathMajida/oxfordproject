package com.Oxford_Academy.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/main/resources/Feature/OxfordAcademy.Feature",
		plugin = {"pretty", "html:reports/cucumber-html-report"},
		tags = {"@tc01_Oxford_Academy_invalid_register,@tc02_Oxford_Academy_valid_register,@tc03_Oxford_Academy_invalid_login,@tc04_Oxford_Academy_valid_login,@tc05_Oxford_Academy_buybooks,@tc06_Oxford_Academy_Search_journal,@tc07_Oxford_Academy_Download_journal,"
				+ "@tc08_Oxford_Academy_Link_count,@tc09_Oxford_Academy_Print_email,@tc10_Oxford_Academy_Assert_check,@tc11_Oxford_Academy_Currency_change,@tc12_Oxford_Academy_Edit_profile,@tc13_Oxford_Academy_count_subscription,@tc14_Oxford_Academy_Delete_saved_search"
				+ ",@tc15_Oxford_Academy_Communication_preference"},
		glue = {"com.Oxford_Academy.stepsDefinition"},
		monochrome = true
		)

public class oxfordacademy_Runner 
{

}
