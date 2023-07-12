// Interfac: modela y define la estructura de datos y sus tipos (solo eso)
export interface Product {
    name: string;
    id: number;
    price: number;
    description: string;
    category: string;
    stock: number
    portions: number;
    image: string;
    userId: number;
    deliveryDate: Date
}