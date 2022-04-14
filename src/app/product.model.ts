//Una interfaz es un modelo que nos indica los atributos de un objeto.
export interface Product {
id: string;
title: string;
price: number;
image: string;
description: string
category?: string; //? opcional
}
