package com.Oxford_Academy.PageObject;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class Link_count 
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
	public void Oxford_homepage() throws InterruptedException 
	{
		driver.get("https://academic.oup.com/journals");//Launching the website
	//	driver.findElement(By.xpath("//*[@id=\"header-account-info-user-fullname\"]")).click();
	//	driver.findElement(By.xpath("//*[@id=\"user_LoginFormPopup\"]")).sendKeys("gowthamkg9999@gamil.com");
	//	driver.findElement(By.xpath("//*[@id=\"pass_LoginFormPopup\"]")).sendKeys("Gowtham@98");
    //  driver.findElement(By.xpath("//*[@id=\"pass_LoginFormPopup\"]")).sendKeys(Keys.ENTER);
		Thread.sleep(5000);
		
	}
	//to count the number of links
	public void count_link()
	{
		List<WebElement> links = driver.findElements(By.tagName("a"));
		int linkCount=links.size();
		System.out.println("The total number of links="+linkCount);
	}
	public void close()
	{
		driver.close();
	}
}
