package com.main_java;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Login 
{
	WebDriver driver;
	
	public void url() 
	{
		System.setProperty("webdriver.chrome.driver","src/test/resources/Driver/chromedriver.exe");//Launching the chrome browser
		driver = new ChromeDriver();
		driver.manage().window().maximize();//Maximizing the window
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		System.out.println(driver.getTitle());
}
	public void oxford_homepage()
	{
		driver.get("https://academic.oup.com/journals");//Launching the Oxford journal Website
		System.out.println(driver.getTitle());
		driver.findElement(By.xpath("//*[@id=\"header-account-info-user-fullname\"]")).click();//Clicking the sign in button
}
	public void oxford_details(String excel_emailid,String excel_password)throws InterruptedException
	{
		driver.findElement(By.xpath("//*[@id=\"user_LoginFormPopup\"]")).sendKeys(excel_emailid);
		driver.findElement(By.xpath("//*[@id=\"pass_LoginFormPopup\"]")).sendKeys(excel_password);
		Thread.sleep(2000);
		driver.findElement(By.xpath("//*[@id=\"pass_LoginFormPopup\"]")).sendKeys(Keys.ENTER);
		Thread.sleep(2000);
	}
		
	public void oxford_close() 
	{
		driver.close();//closing the website
	}

}
