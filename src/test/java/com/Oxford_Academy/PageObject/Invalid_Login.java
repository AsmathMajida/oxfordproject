package com.Oxford_Academy.PageObject;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class Invalid_Login 
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
	
	public void oxford_homepage()
	{
		driver.get("https://academic.oup.com/journals");//Launching the Oxford journal Website
		System.out.println(driver.getTitle());
		driver.findElement(By.xpath("//*[@id=\"header-account-info-user-fullname\"]")).click();//Clicking the sign in button
}
	// log in details
	public void oxford_details(String excel_emailid,String excel_password)throws InterruptedException
	{
		driver.findElement(By.xpath("//*[@id=\"user_LoginFormPopup\"]")).sendKeys(excel_emailid);
		driver.findElement(By.xpath("//*[@id=\"pass_LoginFormPopup\"]")).sendKeys(excel_password);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"pass_LoginFormPopup\"]")).sendKeys(Keys.ENTER);
		Thread.sleep(2000);
	}
		
	public void oxford_close() throws InterruptedException 
	{
		Thread.sleep(3000);
		driver.close();//closing the website
	}

}
