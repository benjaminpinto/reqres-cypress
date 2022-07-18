describe('empty spec', () => {
  it('Verify GET users', () => {
    cy.getUsers().then((response) => {
      expect(response.body.page).equal(1)
      expect(response.body.per_page).equal(6)
      expect(response.body.data).length(6)
    })
  })

  it('Verify GET user ID = 2', () => {
    const userID = 2
    cy.getUser(userID).then((response) => {
      expect(response.status).eq(200)
      expect(response.body.data.id).eq(userID)
      expect(response.isOkStatusCode).be.true
    })
  })

  it('Verify GET inexistent user ID = 2000', () => {
    const userID = 2000
    cy.getUser(userID).then((response) => {
      expect(response.status).eq(404)
      expect(response.body).be.empty
    })
  })

  it('Verify POST user', () => {
    cy.postUser('Benjamin', 'QA Automation Engineer').then((response) => {
      console.log(response)
    })
  })

  it('Verify PUT user id = 2', () => {
    const _id = 2
    const user = {
      name: 'JozBraham',
      job: 'World Owner',
    }
    cy.updateUser(_id, user).then((response) => {
      expect(response.status).eq(200)
      expect(response.body.name).eq(user.name)
    })
  })
})
