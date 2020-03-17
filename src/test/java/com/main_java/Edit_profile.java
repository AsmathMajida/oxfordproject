package com.main_java;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Edit_profile 
{
	WebDriver driver;
	public void launch_browser() 
	{
		System.setProperty("webdriver.chrome.driver", "src/test/resources/Driver/chromedriver.exe");//Launching the chrome browser
		driver = new ChromeDriver();
		driver.manage().window().maximize();//Maximizing the window
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
    }
	public void Oxford_homepage() throws InterruptedException 
	{
		driver.get("https://academic.oup.com/journals");//Launching the website
		driver.findElement(By.xpath("//*[@id=\"header-account-info-user-fullname\"]")).click();
		driver.findElement(By.xpath("//*[@id=\"user_LoginFormPopup\"]")).sendKeys("mahalakshmi.c98@gmail.com");
		driver.findElement(By.xpath("//*[@id=\"pass_LoginFormPopup\"]")).sendKeys("Maha@12345");
		driver.findElement(By.xpath("//*[@id=\"pass_LoginFormPopup\"]")).sendKeys(Keys.ENTER);
		Thread.sleep(5000);
		
	}
	//to edit the user profile
	public void edit_profile()
	{
		driver.findElement(By.id("header-account-info-user-fullname")).click();
		driver.findElement(By.xpath("/html/body/div[3]/section[1]/div/div[2]/div/ul/li[4]/div/div/div[1]/a[3]")).click();

	}
	//entering the new details to edit user profile
	public void enter_details() throws InterruptedException
	{
       driver.findElement(By.xpath("//*[@id=\"Title\"]")).click();
       driver.findElement(By.xpath("//*[@id=\"Title\"]")).sendKeys(Keys.DOWN);
       driver.findElement(By.xpath("//*[@id=\"Title\"]")).sendKeys(Keys.ENTER);
       driver.findElement(By.xpath("//*[@id=\"Title\"]")).sendKeys(Keys.DOWN);
       driver.findElement(By.xpath("//*[@id=\"Title\"]")).sendKeys(Keys.DOWN);
       driver.findElement(By.xpath("//*[@id=\"Title\"]")).sendKeys(Keys.DOWN);
       driver.findElement(By.xpath("//*[@id=\"Title\"]")).sendKeys(Keys.DOWN);
       driver.findElement(By.xpath("//*[@id=\"Title\"]")).sendKeys(Keys.ENTER);
       //driver.findElement(By.linkText("Miss")).click();
       driver.findElement(By.xpath("//*[@id=\"FirstName\"]")).clear();
       driver.findElement(By.xpath("//*[@id=\"FirstName\"]")).sendKeys("maha");
       driver.findElement(By.xpath("//*[@id=\"CountryList\"]")).click();
       driver.findElement(By.xpath("//*[@id=\"CountryList\"]/option[104]")).click();
       driver.findElement(By.xpath("//*[@id=\"Phone\"]")).clear();
       driver.findElement(By.xpath("//*[@id=\"Phone\"]")).sendKeys("7894561237");
       driver.findElement(By.xpath("//*[@id=\"updatePersonalDetailsBtn\"]")).click();
	   Thread.sleep(3000);
	   driver.findElement(By.id("header-account-info-user-fullname")).click();
	   driver.findElement(By.xpath("/html/body/div[3]/section/div/div[2]/div/ul/li[4]/div/div/div[2]/a")).click();
	}
	public void close()
	{
		driver.close();
	}

}
