const { expect } = require("chai");
const { it } = require("mocha");
const txt= " its a test";
//  var xpath={
//   first:[
//     '//a[@role="button"]',
//     '//span[normalize-space()="Issue & Consumption"]'
//   ]
//   };
import myJson from '../../../cypress.json';
 
// for (var i=0; i<xpath.first.length; i++) {
//   for (var key in xpath.first[i]) {
//       for (var j= 0; j<xpath.first[i][key].length; j++) {
//           console.log(xpath.first[i][key][j])
//       }
//   }
// }

describe('url', () => {
  it('should go to url', () => {
    cy.visit('http://uat.hmis.com/login')
    cy.get('#username').type("midas")
    cy.get('#password').type("mid@s!23#")
    cy.get('#frmlogin > .btn').as('button')
    cy.get('@button').click()
    cy.visit('http://uat.hmis.com/3014/home#')
    cy.xpath('//em[@class="icon-square"]')
    .click()
    cy.xpath('//input[@id="searchNav"]')
    .type('Inventory', {force: true} )
    .as('s')
    cy.xpath('//a[normalize-space()="Inventory"]').
    click()
    .as('c')
   });

  it('go to issue', () => {
    cy.xpath(myJson[1].first[0]).click()
    cy.xpath(myJson[1].first[1])
    .click()
    cy.xpath(myJson[1].first[2])
    .click()
    cy.xpath('//select[@id="userDept"]', {force: true})
    .select('DAMAGE STORE')
    .should('have.value','2')
    cy.xpath('//a[normalize-space()="Save"]').click()
    cy.wait(2000)
    cy.xpath('//a[@id="showPopup_1"]').click()
    cy.xpath('//body[1]/div[11]/div[1]/div[1]/div[2]/div[1]/div[1]/table[1]/tbody[1]/tr[1]/td[4]')
    .click( {force: true})
    cy.wait(2000)
    cy.xpath('//input[@id="quantity_1"]').should('have.value', '2', {force: true})
    .clear()
    .type('1')
    cy.xpath('//input[@id="remarks_1"]')
    .type('bug' , {force: true})
    cy.xpath('//input[@id="main_remark"]')
    .type(txt)
    // cy.xpath('//button[@class="btn btn-success save_inventory"]').click()
    })
  })

    // it('Go to issue List', () => {
    //   cy.xpath('//a[normalize-space()="Issue List"]').click()
    //   cy.xpath('')
    

      
     
     
      

      //tr[@id='rowno_1']//a[@id='showPopupReturn']
