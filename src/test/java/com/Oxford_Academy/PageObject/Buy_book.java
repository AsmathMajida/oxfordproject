package com.Oxford_Academy.PageObject;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

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
public void Launch_browser(String browser) //Launch url
{
	try
	{
		if(browser.equalsIgnoreCase("firefox"))
		{
			System.setProperty("webdriver.gecko.driver","src\\test\\resources\\Driver\\geckodriver.exe");
			driver = new FirefoxDriver();
		}
		else if(browser.equalsIgnoreCase("chrome"))
		{
			System.setProperty("webdriver.chrome.driver","src/test/resources/Driver/chromedriver.exe");
			driver = new ChromeDriver();
		}
		else if(browser.equalsIgnoreCase("Internet Explore"))
		{
			System.setProperty("webdriver.ie.driver","src\\test\\resources\\Driver\\IEDriverServer.exe");
			driver = new InternetExplorerDriver();
		}
	
	
	driver = new ChromeDriver();
	driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	}
	catch(WebDriverException e)
	{
		System.out.println("Browser could not be launched");
	}
	
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


