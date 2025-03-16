import {useEffect, useState} from "react";
import {listProductos} from "../services/ProductoService.js";
import {ProductTable} from "./ProductTable.jsx";

export const Product = () => {
    const [products, setProducts] = useState([]);
    //Input de formulario
    const [inputNombre, setInputNombre] = useState("");
    const [inputPrecio, setInputPrecio] = useState("");
    const [inputDescripcion, setInputDescripcion] = useState("");

    useEffect(() => {
        const result = listProductos();
        setProducts(result)
    }, []);

    //Funcion que recibe el contenido del formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        //Validacion de formulario
        if (inputNombre.trim() === "" || inputNombre === null || inputPrecio.trim() === "" || inputPrecio === null || inputDescripcion.trim() === "" || inputDescripcion === null) {
            console.log("Formulario con errores")
            return;
        }

        const nuevoProducto = {
            id: Math.floor(Math.random() * 10),
            nombre: inputNombre,
            precio: inputPrecio,
            descripcion: inputDescripcion
        }
        //Actualizamos los productos
        setInputNombre("");
        setInputDescripcion("");
        setInputPrecio("");
        setProducts([...products, nuevoProducto]);
    }

    return (
        <>
            <div>
                <div className="container-xl my-3">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="fw-bolder text-center px-4 py-3 text-uppercase bg-secondary rounded text-white">Aplicacion
                                Spring Boot - React - BootStrap</h2>
                        </div>
                    </div>
                </div>

                <div className="container-xl mb-3">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-6">
                            <a href="" className="btn btn-success block w-100 text-uppercase fw-bolder"
                               data-bs-toggle="modal" data-bs-target="#modal_nuevo_producto">Agregar Producto</a>
                        </div>
                    </div>
                </div>

                {/*Modal de creacion producto*/}
                <div className="modal fade" id="modal_nuevo_producto">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h1 className="modal-title text-center text-uppercase fw-bold">Nuevo Producto</h1>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Nombre</label>
                                        <input type="text" className="form-control" name="nombre" id="nombre"
                                               placeholder="Nombre del producto" required value={inputNombre}
                                               onChange={(e) => setInputNombre(e.target.value)}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Descripción</label>
                                        <textarea type="text" className="form-control" name="descripcion"
                                                  id="descripcion" placeholder="Descripcion del producto"
                                                  required value={inputDescripcion}
                                                  onChange={(e) => setInputDescripcion(e.target.value)}/>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Precio</label>
                                        <input type="text" className="form-control" name="precio" id="precio"
                                               placeholder="Precio del producto" value={inputPrecio}
                                               onChange={(e) => setInputPrecio(e.target.value)}/>
                                    </div>

                                    <div className="modal-footer">
                                        <input type="submit"
                                               className="btn btn-primary block w-100 text-uppercase fw-bold"
                                               value="Agregar"/>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <ProductTable products={products}/>
            </div>
        </>
    )
}