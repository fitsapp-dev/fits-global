'use strict'

module.exports = async function (app) {
  app.post('/api/contact', async (request, reply) => {
    const { name, email, message } = request.body
    
    try {
      const result = await app.platformatic.db.query(
        'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3) RETURNING id',
        [name, email, message]
      )
      
      reply.code(201).send({ id: result[0].id })
    } catch (err) {
      request.log.error(err)
      reply.code(500).send({ error: 'Failed to save contact information' })
    }
  })
}