var mysql = requiere('mysql');

var conexion = mysql.createConnection({
    hots: 'localhost',
    database: 'tamalito',
    user: 'root',
    password: ''
});

conexion.connect(function(error){

    if(error){
        throw error;
    }else {
        console.log('Conexion exitosa');
    }

});
conexion.end();