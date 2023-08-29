const Chance = require('chance');
const chance = new Chance();

const generateEpi = () =>({

    name: chance.string(),
});

module.exports = {generateEpi};