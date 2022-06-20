const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}

const password = process.argv[2];

const url = `mongodb://fullstack:${password}@cluster0-shard-00-00.zdvdp.mongodb.net:27017,cluster0-shard-00-01.zdvdp.mongodb.net:27017,cluster0-shard-00-02.zdvdp.mongodb.net:27017/test?ssl=true&replicaSet=atlas-jplkes-shard-0&authSource=admin&retryWrites=true&w=majority`;
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
});

const Person = mongoose.model('Person', personSchema)

// If the password is the only parameter given to the program, it should display all of the entries in the phonebook:
if (process.argv.length < 4) {
    console.log('phonebook:')
    Person.find({}).then(result => {
        result.forEach(person => {
            console.log(`${person.name} ${person.number}`);
        })
        mongoose.connection.close();
        process.exit(1);
    });
}

if (process.argv.length >= 4) {
    const name = process.argv[3];
    const number = process.argv[4];

    const person = new Person({
        name: name,
        number: number
    });

    person.save().then(result => {
        console.log(`added ${name} number ${number} to phonebook`)
        mongoose.connection.close()
    });
}