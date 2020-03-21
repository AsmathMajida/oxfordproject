package com.Oxford_Academy.PageObject;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class Edit_profile 
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
