const Chance = require('chance');
const chance = new Chance();

const generateUser = () => ({
  name: chance.name(),
  email: chance.email(),
  password: chance.string({ length: 8 }), // Gere uma senha aleatória
  admin: chance.bool()
});

module.exports = { generateUser };
