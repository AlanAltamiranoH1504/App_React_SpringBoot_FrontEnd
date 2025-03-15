import {useState} from "react";

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
    }
]

export const Product = () => {
    const [products, setProducts] = useState(initProducts);
    return (
        <>
            <div class="container-xl my-3">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="fw-bolder text-center px-4 py-3 text-uppercase bg-secondary rounded text-white">Aplicacion de Alan Altamirano</h2>
                    </div>
                </div>
            </div>

            <table class="table table-striped table-bordered text-center">
                <thead class="table-dark">
                <tr>
                    <th class="py-3">Id</th>
                    <th class="py-3">Nombre</th>
                    <th class="py-3">Precio</th>
                    <th class="py-3">Descripcion</th>
                </tr>
                </thead>
                <tbody>
                {products.map((producto) => (
                    <tr>
                        <td>{producto.id}</td>
                        <td>{producto.nombre}</td>
                        <td>{producto.precio}</td>
                        <td>{producto.descripcion}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}