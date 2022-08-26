//Function created to generate some random dates to validate the date square boxes when fullfilling the period of rental

function generateRandomDate() {
    const currentDate = Date.now();
    const unixTime = Math.floor(Math.random() * currentDate);
    const randomDate = new Date(unixTime).toLocaleDateString({year: 'numeric', month: '2-digit', day: '2-digit'});
    const convertedDate = Cypress.moment(randomDate, 'DD/MM/YYYY').format('yyyy-MM-DD');
    return convertedDate;
}
//=================================================================================================================

//Command to take the elements from the elements.js
const el = require('./pages/content/elements').ELEMENTS;

class generalElements {

    visitUrl(){
        //Access to the website registered via cypress.json
        cy.visit('/');
    }

    findCountry(){
        //Elements created using the pageObject architecture
        //asserting if the country element exists
        cy.get(el.country).should('have.class', "form-control");
    }

    findCity(){
        //asserting if the city element exists
        cy.get(el.city).should('have.class', "form-control");
    }

    findText(){
        //asserting if the text element exists
        cy.get(el.text).should('have.id', "model");
    }

    findStartDate(){
        //asserting if the start date element exists
        cy.get(el.startDate).should('have.class', "form-control");
    }

    findEndDate(){
        //asserting if the end date element exists
        cy.get(el.endDate).should('have.class', "form-control");
    }

    findSummaryPage(){
        //asserting if the summary page element exists
        cy.get(el.summary).should('have.id', "content")
    }

    clickCountry(){
        //action to click on the blank space regarding country
        cy.get(el.country).select('France').should('have.value', '3');
    }    

    clickCity(){
        //action to click on the blank space regarding city
        cy.get(el.city).select('Paris').should('have.value', '4');
    }

    fillText(){
        //action to type on the blank space regarding model
        cy.get(el.text).type('Lamborghini Murcielago');
    }

    fillName(){
        //action to type on the blank space regarding name, in summary page
        cy.get(el.nameUser).type('user');
    }

    fillLastName(){
        //action to type on the blank space regarding last name, in summary page
        cy.get(el.lastNameUser).type('lastName');
    }

    fillCardNumber(){
        //action to type on the blank space regarding card number, in summary page
        cy.get(el.cardNumberUser).type('99999999');
    }

    fillEmail(){
        //action to type on the blank space regarding email, in summary page
        cy.get(el.emailUser).type('user@mail.com');
    }

    setStartDate(){
        //action to type on the blank space regarding pickup date, in summary page
        cy.get(el.startDate).type(generateRandomDate());
    }

    setEndDate(){
        //action to type on the blank space regarding drop-off date, in summary page
        cy.get(el.endDate).type(generateRandomDate());
    }

    clickSearchButton(){
        //action to click on the search button to see if possible to access the table list
        cy.get(el.searchButton).click();
    }

    clickRentButton(){
        //action to click on the first visible rent button on the content page to see if possible to access the summary page
        cy.get(el.rentButton).click();
    }

    clickRentButton2(){
        //action to click on the second visible rent button on an intermediate page to see if possible to access the personal info page
        cy.get(el.rentButton2).click();
    }

    clickRentButton3(){
        //action to click on the third visible rent button on the personal info page to see if possible to complete the rental process
        cy.get(el.rentButton3).click();
    }

    notDisplayingAlert(){
        //action to assert if the red message alert regarding any issues with the survey is not evident
        cy.get(el.popupAlert).should('not.be.visible');
    }

    displayingSearchResult(){
        //action to assert if the table list is evident after filling the survey
        cy.get(el.table);
    }

    notDisplayingSearchResult(){
        //action to assert that the table is not visible in case of any issues when filling the survey
        cy.get(el.table).should('not.be.visible');
    }

    displayingSuccessPage(){
        //Considering that it would be possible to access a success page, this is a test to assert if the page does not return any issues
        cy.get(el.pageNotFound).should('not.contain', '(404)').should('not.have.id', 'summary');
    }
}
//Command to be possible to export the class to be used
export default new generalElements();