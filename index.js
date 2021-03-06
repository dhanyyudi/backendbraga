// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });

// Register plugins
fastify.register(require("fastify-static"), require("./config/static.js").public);
fastify.register(require("fastify-static"), require("./config/static.js").assets);
fastify.register(require("fastify-static"), require("./config/static.js").forms);

// Declare a route
fastify.get("/", async (request, reply) => {
  reply.sendFile("index.html"); // serving path.join(__dirname, 'public', 'index.html') directly
});

// Declare a route
fastify.get("/apaya", async (request, reply) => {
  return { hello: "apaya" };
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();