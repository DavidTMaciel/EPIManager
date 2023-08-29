const Chance = require('chance');
const chance = new Chance();

const generateCollaborator = () =>({

    name: chance.name(),
    office: chance.name(),
    admission_Date: chance.date({string: true}),
    constructions: chance.company(),
    company: chance.company(),
    
});

module.exports = { generateCollaborator}