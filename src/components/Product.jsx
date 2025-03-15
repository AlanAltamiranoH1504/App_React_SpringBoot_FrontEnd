import {useEffect, useState} from "react";
import {listProductos} from "../services/ProductoService.js";
import {ProductTable} from "./ProductTable.jsx";

export const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const result = listProductos();
        setProducts(result)
    }, []);
    return (
        <>
            <div class="container-xl my-3">
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="fw-bolder text-center px-4 py-3 text-uppercase bg-secondary rounded text-white">Aplicacion
                            Spring Boot - React - BootStrap</h2>
                    </div>
                </div>
            </div>
            <ProductTable products={products}/>

        </>
    )
}