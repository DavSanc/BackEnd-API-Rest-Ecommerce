import { Auth } from "./auth.interface";

// Interfac: modela y define la estructura de datos y sus tipos (solo eso)
export interface User extends Auth {
    nombre: string;
    rol: string;
}

/*User {
    nombre,
    rol,
    password,
    email
}*/