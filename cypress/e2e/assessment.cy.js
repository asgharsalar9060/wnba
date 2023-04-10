const { describe, it } = require("mocha");

describe('Regular Season Standings Test', ()=>{

  before(()=>{
    cy.visit('https://www.wnba.com/standings/#?season=2022')
  })

  it('Season Standings Test', ()=>{
    cy.get('#filter-season').select('2018 Season').should('contain', '2018')
    cy.get('#filter-season option').should('have.length', '12')
    cy.get("#league > wnba-stat-table > .row > .stat-table__overflow > .table > tbody > :nth-child(n) > .text > .team").each(($teams) => {
      const texts = Array.from($teams, team => team.innerText);
      cy.log(`Team: ${texts}`)
    });
  })
})