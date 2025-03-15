import {useEffect, useState} from "react";
import {listProductos} from "../services/ProductoService.js";

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

            <div class="container-xl">
                <div class="row">
                    <div class="col-md-12">
                        <table className="table table-striped table-bordered text-center">
                            <thead className="table-dark">
                            <tr>
                                <th className="py-3 text-uppercase">Id</th>
                                <th className="py-3 text-uppercase">Nombre</th>
                                <th className="py-3 text-uppercase">Precio</th>
                                <th className="py-3 text-uppercase">Descripcion</th>
                                <th className="py-3 text-uppercase">Edición</th>
                            </tr>
                            </thead>
                            <tbody>
                            {products.map((producto) => (
                                <tr>
                                    <td>{producto.id}</td>
                                    <td>{producto.nombre}</td>
                                    <td>{producto.precio}</td>
                                    <td>{producto.descripcion}</td>
                                    <td>
                                        <div class="d-flex justify-content-center gap-4">
                                            <a href="" className="btn btn-warning text-uppercase fw-bold"
                                               data-bs-toggle="modal" data-bs-target="#modal">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="feather feather-edit">
                                                    <path
                                                        d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                                    <path
                                                        d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                                </svg>
                                            </a>
                                            <a href="" className="btn btn-danger text-uppercase fw-bold">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                     className="feather feather-x-square">
                                                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                    <line x1="9" y1="9" x2="15" y2="15"></line>
                                                    <line x1="15" y1="9" x2="9" y2="15"></line>
                                                </svg>
                                            </a>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        {/*Modal de edicion*/}
                        <div class="modal fade" id="modal">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal"aria-label="Close"></button>
                                        <h1 class="modal-title text-center text-uppercase fw-bold">Edición de
                                            Productos</h1>
                                    </div>
                                    <div className="modal-body">
                                        <form>
                                            <div class="mb-3">
                                                <label class="form-label fw-bold">Nombre</label>
                                                <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre del producto" required/>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Descripción</label>
                                                <textarea type="text" className="form-control" name="descripcion" id="descripcion" placeholder="Descripcion del producto" required/>
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label fw-bold">Precio</label>
                                                <input type="text" className="form-control" name="precio" id="precio" placeholder="Precio del producto"/>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <input type="submit" class="btn btn-success block w-100 text-uppercase fw-bold" value="Actualizar"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}