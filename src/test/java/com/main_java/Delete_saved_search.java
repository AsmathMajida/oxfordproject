package com.main_java;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Delete_saved_search 
{
	WebDriver driver;
	public void launch_browser() 
	{
		System.setProperty("webdriver.chrome.driver", "src/test/resources/Driver/chromedriver.exe");//Launching the chrome browser
		driver = new ChromeDriver();
		driver.manage().window().maximize();//Maximizing the window
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
    }
	//sign details
	public void Oxford_homepage() throws InterruptedException 
	{
		driver.get("https://academic.oup.com/journals");//Launching the website
		driver.findElement(By.xpath("//*[@id=\"header-account-info-user-fullname\"]")).click();
		driver.findElement(By.xpath("//*[@id=\"user_LoginFormPopup\"]")).sendKeys("mahalakshmi.c98@gmail.com");
		driver.findElement(By.xpath("//*[@id=\"pass_LoginFormPopup\"]")).sendKeys("Maha@12345");
		driver.findElement(By.xpath("//*[@id=\"pass_LoginFormPopup\"]")).sendKeys(Keys.ENTER);
		Thread.sleep(5000);
		
	}
	//search comics page
	public void search_page()
	{
		driver.findElement(By.id("header-account-info-user-fullname")).click();
		driver.findElement(By.xpath("/html/body/div[3]/section[1]/div/div[2]/div/ul/li[4]/div/div/div[1]/a[7]")).click();
	}
	//deleting saved details
	public void delete_saved()
	{
		driver.findElement(By.id("delete1")).click();
		//driver.findElement(By.xpath("//*[@id=\"delete2\"]")).click();
		driver.findElement(By.id("header-account-info-user-fullname")).click();
		driver.findElement(By.xpath("/html/body/div[3]/section/div/div[2]/div/ul/li[4]/div/div/div[2]/a")).click();
		
	}
	public void quit()
	{
		driver.close();
	}

}
