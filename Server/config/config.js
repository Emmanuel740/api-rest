//PUERTO
process.env.PORT = process.env.PORT || 3001;

// Entorno
process.env.NODE_ENV = process.NODE_ENV || 'dev';
// conexion a la base de datos

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27107/cafeteria';
} else {
    urlDB = 'mongodb+srv://admin:ortizdeluna10@cluster0-uw13s.mongodb.net/cafeteria';
}

process.env.URLDB = urlDB;