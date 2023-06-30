import 'detenv/config';
import express, { Request, Response} from 'express'
import routeMain from './routes';


const app = express()
const PORT = process.env.PORT || 3001;

/*Routing: Enrutamiento*/
//  http://localhost:3000/
app.get('/', ( req: Request, res: Response ) => {
    const message: string = 'Bienvenido a la API pasteleria web';

    console.log(message ); //mensaje a la terminal
    res.send ( `<h1>${message}</h1>` ); // mensaje al navegador
    
    res.send();
});

//http://localhost:3000/home (Endpoint)
app.get( '/home', (req: Request, res: Response) => {
    const namePage : string = 'Home';

    console.log( namePage );
    res.send(`<h1>${ namePage }</h1>`);    
})

/** Middleware */
app.use( '/api', routeMain );

app.listen( PORT, () => {
    console.log(`Servidor lanzado en http://localhost:${ PORT } `);
});




