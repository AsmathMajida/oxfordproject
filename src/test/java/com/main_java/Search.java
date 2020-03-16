package com.main_java;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Search
{
WebDriver driver;
	
	public void url() {
		System.setProperty("webdriver.chrome.driver","src/test/resources/Driver/chromedriver.exe");//Launching the chrome browser
		driver = new ChromeDriver();
		driver.manage().window().maximize();//Maximizing the window
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		System.out.println(driver.getTitle());
}
	public void homepage()
	{
		driver.get("https://academic.oup.com/journals");//Launching the website
		System.out.println(driver.getTitle());
	}
	public void search_Journal()
	{
		driver.findElement(By.xpath("//*[@id=\"MicrositeSearchTerm\"]")).sendKeys("comics");
		driver.findElement(By.xpath("//*[@id=\"MicrositeSearchTerm\"]")).sendKeys(Keys.ENTER);
		driver.findElement(By.xpath("//*[@id=\"sortOrderSelect\"]")).click();
		driver.findElement(By.xpath("//*[@id=\"sortOrderSelect\"]")).sendKeys(Keys.DOWN);
		driver.findElement(By.xpath("//*[@id=\"sortOrderSelect\"]")).sendKeys(Keys.ENTER);
	}
	public void get_title()//getting the value and printing in the output
	{
		System.out.println(driver.findElement(By.xpath("//*[@id=\"ContentColumn\"]/div[13]/h4/a")).getText());
	}
	public void quit()
	{
		driver.close();//closing the website
	}
}
