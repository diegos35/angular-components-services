//Una interfaz es un modelo que nos indica los atributos de un objeto.
export interface Product {
id: string;
name: string;
price: number;
image: string;
category?: string; //? opcional
}
