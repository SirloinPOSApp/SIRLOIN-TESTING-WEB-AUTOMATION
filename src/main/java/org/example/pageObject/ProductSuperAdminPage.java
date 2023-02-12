package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductSuperAdminPage {
    public static WebDriver driver;

    public ProductSuperAdminPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }
    @FindBy(xpath = "//h3[@class='font-bold text-2xl text-[#4AA3BA]']")
    private WebElement productPage ;
    public String getProductPage(){
        return productPage.getText() ;
    }
}