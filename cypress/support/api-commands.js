Cypress.Commands.add('getUsers', () => {
  cy.request({
    method: 'GET',
    url: '/api/users',
    failOnStatusCode: false,
  })
})

Cypress.Commands.add('getUser', (_id) => {
  cy.request({
    method: 'GET',
    url: `/api/users/${_id}`,
    failOnStatusCode: false,
  })
})

Cypress.Commands.add('postUser', (name, job) => {
  const payload = {
    name: name,
    job: job,
  }
  cy.request({
    method: 'POST',
    url: `/api/users`,
    body: payload,
    failOnStatusCode: false,
  })
})

Cypress.Commands.add('updateUser', (id, user) => {
  cy.request({
    method: 'PUT',
    url: `/api/users/${id}`,
    failOnStatusCode: false,
    body: user,
  })
})
