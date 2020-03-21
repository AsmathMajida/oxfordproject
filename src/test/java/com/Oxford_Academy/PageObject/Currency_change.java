package com.Oxford_Academy.PageObject;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class Currency_change
{
        WebDriver driver;
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
	public void oxford_website() 
	{
		driver.get("https://academic.oup.com/journals"); 
	    System.out.println(driver.getTitle());
			
	}
	//selecting the book to purchase
	public void select_book()
	{
		driver.findElement(By.linkText("Journals A to Z")).click();
		driver.findElement(By.xpath("//*[@id=\"cloudCMS\"]/div/div[1]/div/div/p[2]/a[1]")).click();
		driver.findElement(By.linkText("Purchase")).click();
		
	}
	//selecting the currency to be changed
	public void select_currency() throws InterruptedException
	{
		driver.findElement(By.xpath("//*[@id=\"collapsible-table-0\"]/tr/td[5]/a")).click();
		driver.findElement(By.xpath("//*[@id=\"basket_currency_choice\"]/a[1]")).click();
		Thread.sleep(3000);
	}
	public void close_page() 
	{
		driver.close();
	}

}
