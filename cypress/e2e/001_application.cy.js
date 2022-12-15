/// <reference types="cypress"/>

describe('Go to staffbase, start the application', () => {
  it('passes', () => {
    cy.visit('https://staffbase.com/en/')
    //accepting cookie
    cy.get('#onetrust-accept-btn-handler').click()
    //main menu
    cy.get('.flex-nav__burger ').click() 
    //about us
    cy.get('.current-menu-item > .flex-nav__link-wrapper > .flex-nav__link > .flex-nav__link-icon').click()
    //click careers
    cy.get('.menu-item-92243 > .flex-nav__link').click()
    //click careers in engineering team
    cy.get('#explore-our-teams > .container > .grid > :nth-child(2) > a.flex').click()
    //click quality assurance engineer. There is space for iprovement - search element with job name because it's not static 
    cy.contains('Quality Assurance Engineer').click()
    //optionally can be used this locator
    //cy.get(':nth-child(2) > .group').click()
    
    cy.wait(500)
    //click Apply
    cy.get('.flex-grow > .staffbase-block  > .container > .relative > .flex > .inline-flex').click()
  })
})