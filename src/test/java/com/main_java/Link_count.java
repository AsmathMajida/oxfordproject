package com.main_java;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Link_count 
{
	WebDriver driver;
	public void launch_browser() 
	{
		System.setProperty("webdriver.chrome.driver","src/test/resources/Driver/chromedriver.exe");//Launching the chrome browser
		driver = new ChromeDriver();
		driver.manage().window().maximize();//Maximizing the window
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
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
