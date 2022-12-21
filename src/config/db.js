const mongoose = require('mongoose');

mongoose.set("strictQuery", false);

const connectDatabase = async () => {

    const username = process.env.DB_USERNAME;
    const password = process.env.DB_PASSWORD;

    const connectionString = process.env.CONNECTION_STRING
        .replace('{{USERNAME}}', username)
        .replace('{{PASSWORD}}', password);

    const con = await mongoose.connect(connectionString);
    const { name } = con.connection;
    console.log(`db connection was creaated successfully! Database: ${name}`);
}

module.exports = { connectDatabase };