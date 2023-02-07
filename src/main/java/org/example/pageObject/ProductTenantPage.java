package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductTenantPage {
    public static WebDriver driver;

    public ProductTenantPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }
    String pathImage = System.getProperty("user.dir") + "\\src\\test\\resources\\image\\" ;
    @FindBy(xpath = "//span[.='Product']")
    private WebElement barProduct ;
    public void clickBarProduct(){
        barProduct.click();
    }

    @FindBy(xpath ="//h3[@class='font-bold text-2xl text-[#4AA3BA]']")
    private WebElement titleProductPage ;

    public String titleProductTenant(){
        return titleProductPage.getText();
    }

    @FindBy(xpath ="//h2[@class='swal2-title']" )
    private WebElement pesanSuccesLogin ;
    public String pesanLoginSukses(){
        return pesanSuccesLogin.getText() ;

    }
    @FindBy(xpath = "//button[@class='swal2-confirm swal2-styled swal2-default-outline']")
    private WebElement okeButtonLogin;
    public void clickOkeButton(){
        okeButtonLogin.click();
    }

    @FindBy(xpath = "//button[@id='add-product']")
    private WebElement buttonTambahProduct ;
    public void clickTambahProduct(){
        buttonTambahProduct.click();
    }
    @FindBy(xpath = "//h3[@class='flex m-10 font-bold text-2xl text-[#4AA3BA]']")
    private WebElement titleTambahProduct ;
    public String getTitleAddProduct(){
        return titleTambahProduct.getText();
    }

    @FindBy(xpath = "//input[@id='product_image']" )
    private WebElement uploadFoto ;
    public void choosePhoto(){
        uploadFoto.sendKeys(pathImage+"abc.jpg");
    }

    public void pilihFoto(String photosName){
        uploadFoto.sendKeys(pathImage+photosName);
    }

    @FindBy(xpath = "//input[@id='upc']")
    private WebElement noBarcode ;
    public void setNoBarcode(String barcode){
        noBarcode.sendKeys(barcode);
    }

    @FindBy(xpath = "//input[@id='category']")
    private WebElement inputKategori ;
    public void setInputKategori(String kategori){
        inputKategori.sendKeys(kategori);
    }

    @FindBy(xpath = "//input[@id='supplier']")
    private WebElement inputSuplier ;
    public void setInputSuplier(String suplier){
        inputSuplier.sendKeys(suplier);
    }

    @FindBy(xpath = "//input[@id='product_name']")
    private WebElement inputProduct ;
    public void setInputProduct(String namaProduk){
        inputProduct.sendKeys(namaProduk);
    }

    @FindBy(xpath ="//input[@id='price']" )
    private WebElement inputHargaJual ;
    public void setHargaJual(String hargaJual){
        inputHargaJual.sendKeys(hargaJual);
    }

    @FindBy(xpath = "//input[@id='buying_price']")
    private WebElement inputHargaBeli;
    public void setHargaBeli(String hargaBeli){
        inputHargaBeli.sendKeys(hargaBeli);
    }
    @FindBy(xpath = "//input[@id='stock']")
    private WebElement inputStok;
    public void setStokProduk(String stokproduk){
        inputStok.sendKeys(stokproduk);
    }
    @FindBy(xpath = "//input[@id='minimum_stock']" )
    private WebElement inputMinimumStok ;
    public void setMinimumStok(String minStok){
        inputMinimumStok.sendKeys(minStok);
    }

    @FindBy(xpath = "//button[@id='save']")
    private WebElement buttonSave ;
    public void clickSave(){
        buttonSave.click();
    }



}