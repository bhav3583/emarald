package com.emerald.pages;

import com.emerald.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.*;

public class MarketingPages extends Utility {
    private static final Logger log = LogManager.getLogger(MarketingPages.class.getName());

    public MarketingPages() {
        PageFactory.initElements(driver, this);
    }

    @FindBy(xpath = "//a[contains(text(),'Last month')]")
    WebElement month;

    @FindBy(xpath = "//a[contains(text(),'Last week')]")
    WebElement week;

    //@FindBy(xpath = "//div[@id='cookies-consent']/div/div/div/div/div[2]/button[1]")
    @FindBy(xpath = "//div[@id='cookies-consent']/div/div/div/div/div[2]/button[1]/span")
    WebElement accept;


    @FindBy(xpath = "//span[@class='intent_publication_date font-weight-normal']")
    List<WebElement> publicationDate;

    public void clickOnAcceptButton() {
        clickOnElement(accept);
    }

    public void clickOnLastMonthLink() {
        waitForElementWithFluentWait(By.xpath("//a[contains(text(),'Last month')]"), 10, 2);
        clickOnElement(month);
    }


    public void VerifyPublicationByMonth() throws ParseException {
        Calendar calendar = Calendar.getInstance();
        String currentDate = new SimpleDateFormat("dd MMMM yyyy").format(calendar.getTime());
        System.out.println(currentDate);

        calendar.add(Calendar.DAY_OF_MONTH, -30);
        String pastDate = new SimpleDateFormat("dd MMMM yyyy").format(calendar.getTime());
        System.out.println(pastDate);

        List<String> dateList = new ArrayList<>();
        List<String> dateAfterSortList = new ArrayList<>();
        for (WebElement date : publicationDate) {

            dateList.add(date.getText());
        }
        System.out.println("Result before sorting " + dateList);
        Collections.sort(dateList);
        System.out.println("Result after sorting "+dateList);
        dateAfterSortList.addAll(dateList);
        Assert.assertEquals(dateList, dateAfterSortList);

    }

    public void verifyMonth() throws ParseException {
        Calendar calendar = Calendar.getInstance();
        String currentDate = new SimpleDateFormat("dd MMMM yyyy").format(calendar.getTime());
        calendar.add(Calendar.DAY_OF_MONTH, -30);
        String pastDate = new SimpleDateFormat("dd MMMM yyyy").format(calendar.getTime());

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd MMMM yyyy");
        LocalDate startDate = LocalDate.parse(pastDate, dtf);
        LocalDate endDate = LocalDate.parse(currentDate, dtf);

        System.out.println("startDate : " + startDate);
        System.out.println("endDate : " + endDate);



        DateRangeValidator checker = new DateRangeValidator(startDate, endDate);
        //List<String> dateList = new ArrayList<>();
        for (WebElement date : publicationDate) {
            // dateList.add(date.getText());
            System.out.println(date.getText());

            String actualD = date.getText();
            LocalDate testDate = LocalDate.parse(actualD, dtf);
            System.out.println("testDate : " + testDate);

            if (checker.isWithinRange(testDate)) {
                System.out.println("testDate is within the date range.");
            } else {
                System.out.println("testDate is NOT within the date range.");
            }
        }


    }

    public void clickOnLastWeekLink() {
        clickOnElement(week);
    }

    public void verifyPublicationByWeek() {
        ArrayList<String> beforeList = new ArrayList<>();
        for (WebElement week : publicationDate) {
            beforeList.add(week.getText());
        }
        System.out.println(beforeList);
        clickOnElement(week);

        List<WebElement> afterList = new LinkedList<>();
        for (WebElement a : publicationDate) {
            afterList.add(a);
            System.out.println(afterList);
        }

        Assert.assertEquals(beforeList, afterList);

    }

}


