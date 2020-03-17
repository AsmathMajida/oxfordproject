package com.main_java;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Assert_check 
{
    WebDriver driver;
    // chrome url
	public void url() 
	{
		System.setProperty("webdriver.chrome.driver","src/test/resources/Driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		
}
	// website url
	public void Oxford_website()
	{
	  driver.get("https://academic.oup.com/journals");
	
	}
	// check assert with user's mail Id
	public void title_check() throws InterruptedException
	{
		driver.findElement(By.xpath("//*[@id=\"header-account-info-user-fullname\"]")).click();
		  //user id
		  driver.findElement(By.xpath("//*[@id=\"user_LoginFormPopup\"]")).sendKeys("mahalakshmi.c98@gmail.com");
		  //password
		  driver.findElement(By.xpath("//*[@id=\"pass_LoginFormPopup\"]")).sendKeys("Maha@12345");
		  //sign in
		  driver.findElement(By.xpath("//*[@id=\"pass_LoginFormPopup\"]")).sendKeys(Keys.TAB);
		  driver.findElement(By.xpath("//*[@id=\"pass_LoginFormPopup\"]")).sendKeys(Keys.ENTER);
		  Thread.sleep(3000);
		  String actual=driver.findElement(By.id("header-account-info-user-fullname")).getText();
		  System.out.println(actual);
		  String expected = "mahalakshmi.c98@gmail.com";
	      Assert.assertEquals(expected, actual);
	}
	public void close()
	{
		driver.close();
	}
}
