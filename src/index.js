import Fastify from 'fastify'
import fastifyRoutes from './routes';


const fastify = Fastify({
    logger: true
  })



fastify.register(fastifyRoutes)


fastify.get('/', function (request, reply) {
    reply.send({ hello: 'world' })
  })

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  console.log("Server listing address: " + address)
})
