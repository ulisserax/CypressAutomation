//import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import pages from '../../support'

//BDD Gherkin syntax with all the accessible elements
Given(/^that I am at the main page$/, () => {
	pages.visitUrl();
});

And(/^I see that there are some blank spaces$/, () => {
	pages.findCountry();
    pages.findCity();
    pages.findText();
    pages.findStartDate();
    pages.findEndDate();
});

When(/^I click and type to fill the blank space-s and-or click on the dropdown options$/, () => {
	pages.clickCountry();
    pages.clickCity();
    pages.fillText();
    pages.setStartDate();
    pages.setEndDate();
});

When(/^click on the search button$/, () => {
	pages.clickSearchButton();
});

Then(/^a table list is displaying$/, () => {
	pages.notDisplayingAlert();
    pages.displayingSearchResult();
});


Then(/^the table list should not be displayed$/, () => {
	pages.notDisplayingSearchResult();
});


Then(/^I click on the rent button$/, () => {
	pages.clickRentButton();
});

Then(/^I click again on the second rent button$/, () => {
	pages.clickRentButton2();
});

Then(/^I fulfill all the personal information$/, () => {
	pages.findSummaryPage();
    pages.fillName();
    pages.fillLastName();
    pages.fillCardNumber();
    pages.fillEmail();
    pages.clickRentButton3();
});

Then(/^finally I should be able to finish the rental process$/, () => {
	pages.displayingSuccessPage();
});



