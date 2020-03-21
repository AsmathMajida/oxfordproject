package com.Oxford_Academy.PageObject;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.interactions.Actions;

public class Download_journal
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
		public void Oxford_website()
		{
		  driver.get("https://academic.oup.com/journals");
		
		}
		//click journal AtoZ button
	    public void journalAtoZ() 
		{
	      driver.findElement(By.linkText("Journals A to Z")).click();
		}
        //click dispatch dates button
		public void dispatch_date() 
		{
		  driver.findElement(By.xpath("//*[@id=\"cloudCMS\"]/div/div[2]/div[2]/ul/li[2]/a")).click();
		}
		//select the journal from drop down 
		public void Select_journal() 
		{
		  driver.findElement(By.xpath("//*[@id=\"id_pick_journal\"]")).click();	
		  Actions action = new Actions(driver);
		  action.sendKeys(Keys.DOWN);
		  action.sendKeys(Keys.DOWN).click().build().perform();
		  
	    }
		// download the file
		public void file_download()
		{
			driver.findElement(By.xpath("//*[@id=\"submitButton\"]")).click();
		}
		public void close_page() throws InterruptedException
		{
			Thread.sleep(3000);
			driver.close();
		}
		
	}



