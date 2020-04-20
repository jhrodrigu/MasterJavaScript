export class Zapatilla{
    static marca(marca: any) {
        throw new Error("Method not implemented.");
    }
    // public nombre: string;
    // public marca: string;
    // public color: string;
    // public precio: number;
    // public stock: boolean;

    // constructor(nombre, marca, color, precio, stock){
    //     this.nombre = nombre;
    //     this.marca = marca;
    //     this.color = color;
    //     this.precio = precio;
    //     this.stock = stock;
    // }

    constructor(
        public nombre: string,
        public marca: string,
        public color: string,
        public precio: number,
        public stock: boolean,
    ){}
}