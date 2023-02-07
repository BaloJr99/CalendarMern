const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

const dbConnection = async() => {
    try {
        mongoose.connect( process.env.DB_CONNECTION );

        console.log('DB Online')
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD');
    }
}

module.exports = {
    dbConnection
}