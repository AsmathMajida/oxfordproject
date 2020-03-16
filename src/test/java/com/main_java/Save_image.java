package com.main_java;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import java.net.URL;
import java.util.concurrent.TimeUnit;

import javax.imageio.ImageIO;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class Save_image 
{
    WebDriver driver;
	By link=By.xpath("//*[@id=\"cloudCMS\"]/div[6]/div/div[2]/a[2]/img");
	By image=By.id("issueImage");
	By cover=By.xpath("//*[@id=\"InfoColumn\"]/div/div[1]/div[2]/div[4]/a/span");
	public void url() 
	 {
		System.setProperty("webdriver.chrome.driver","src/test/resources/Driver/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
		System.out.println(driver.getTitle());
     }
	public void homepage()
	 {
		driver.get("https://academic.oup.com/journals");
	 }
	public void link_click()
	{
		driver.findElement(link).click();
		driver.findElement(image).click();
		driver.findElement(cover).click();
	}
	public void save_image() throws IOException
	{
		WebElement logo=driver.findElement(By.cssSelector("https://oup.silverchair-cdn.com/oup/backfile/Content_public/Journal/burnstrauma/Issue/8/11/cover.png?Expires=1587319355&Signature=mud9uCHap2~ciIq6Kxb2BmbZF9sDcRkPcjq6BlzVBrgWw70iLwZvPKmuBTOri5Li1MIa0lapv7vWCu1FFRgVWvXh9T2gCQtW~cxkGV10i3o2-6CNaXb8-~Sso6iqmySUN35CISurptdl-8b3gM-1VMPZPFMt08iKCrLiKVsJ7AHHUWsmuRufdpytMaLLVUrJrkH7T40aMnFSNmyaerU3PeW1~mFCeaoysdtVXYMT1FMIQA0jYaNkWsbuTxH972tCxMAPV8v28-3laD6qEvA6KGePnv1mhFLg4tFjWRXc-CMD3WdCsW4vN3948HJyKoRbh2WRmEhMKvyk-6pgInyPtQ__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA"));
		String logoSRC=logo.getAttribute("src");
		 URL imageURL = new URL(logoSRC);
	     BufferedImage saveImage = ImageIO.read(imageURL);
	     ImageIO.write(saveImage, "png", new File("src/test/resources/Image/image.png"));
	}
	public void fini()
	{
		driver.close();
	}
    
}
