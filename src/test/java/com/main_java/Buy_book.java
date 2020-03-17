package com.main_java;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Buy_book 
{
WebDriver driver;
By alpha=By.linkText("Journals A to Z");
By d=By.xpath("//*[@id=\"cloudCMS\"]/div/div[1]/div/div/p[1]/a[4]");
By history=By.linkText("Diplomatic History");
By purchase=By.linkText("Purchase");
By issue=By.xpath("//*[@id=\"main\"]/section/div/div/div[1]/div[1]/div[2]/a");
By year=By.id("ddlSelectIssueYears");
By buy=By.xpath("//*[@id=\"collapsible-table-0\"]/tr/td[5]/a");
By remove=By.xpath("//*[@id=\"shopping_basket\"]/tbody/tr[2]/td[5]/input");
	public void launchUrl() 
	{
		System.setProperty("webdriver.chrome.driver", "src/test/resources/Driver/chromedriver.exe"); //Launching the chrome browser
		driver = new ChromeDriver();
		driver.manage().window().maximize();//Maximizing the window
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
    }
	
	public void Oxford_homepage() 
	{
		driver.get("https://academic.oup.com/journals");//Launching the website

	}
	// selecting the journal
	public void history_click()
	{
		driver.findElement(alpha).click();
		driver.findElement(d).click();
		driver.findElement(history).click();
	}
	//purchasing details
	public void purchase()
	{
		driver.findElement(purchase).click();
		driver.findElement(issue).click();
		driver.findElement(year).click();
		driver.findElement(year).sendKeys(Keys.DOWN);
		driver.findElement(year).sendKeys(Keys.DOWN);
		driver.findElement(year).sendKeys(Keys.ENTER);
		driver.findElement(buy).click();
		driver.findElement(remove).click();
	}
	public void close() 
	{
		driver.close();//closing the website
	}
}


