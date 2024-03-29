//=================================
// Puerto
//=================================
process.env.PORT = process.env.PORT || 3000;

//=================================
// Entorno
//=================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//=================================
// Base de datos
//=================================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    // urlDB = 'mongodb://localhost:27017/cafe';
    urlDB = 'mongodb+srv://jmsm157:QORgX93Jvh2DuAPk@cluster0.lfrqd.mongodb.net/cafe?retryWrites=true&w=majority';
} else {
    urlDB = process.env.NODE_ENV.MONGO_URI;
}

process.env.URLDB = urlDB;