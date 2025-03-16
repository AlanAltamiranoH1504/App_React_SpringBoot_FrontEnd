import axios from "axios";

export const listProductos = () =>{
    const initProducts = [
        {
            id: 1,
            nombre: "Monitor Samsung",
            precio: "2000.00",
            descripcion: "Monitor de 18 pulgadas"
        },
        {
            id: 2,
            nombre: "Laptop Asus",
            precio: "20000.00",
            descripcion: "Laptop de 16 pulgadas"
        },
        {
            id: 3,
            nombre: "Laptop Lennovo",
            precio: "20,000.00",
            descripcion: "Laptop de 16 pulgadas Gris"
        },
        {
            id: 4,
            nombre: "Laptop Victus HP",
            precio: "25,000.00",
            descripcion: "Laptop de 17 pulgadas Negra"
        }
    ];

    return initProducts;
}

const URL_BACK = 'http://localhost:8080';

// End point findAll del servidor
export const findAll = async () =>{
    try {
        const response = await axios.get(`${URL_BACK}/productos`);
        return response;
    }catch (e){
        console.log("Error: " + e)
    }
}