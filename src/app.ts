import express from 'express'

const app = express()

/*Routin: Enrutamiento*/
//  http://localhost:3000/
app.get('/', ( req, res ) => {
    const message = 'Bienvenido a la API pasteleria web';

    console.log(message ); //mensaje a la terminal
    res.send ( `<h1>${message}</h1>` ); // mensaje al navegador
    
    res.send();
});

app.get( '/home', (req, res) => {
    const namePage = 'home';

    console.log( namePage );
    res.send(`<h1>${ namePage }</h1>`);    
})

app.listen( 3000, () => {
    console.log('Servidor lanzado en el puerto 3000');
});
