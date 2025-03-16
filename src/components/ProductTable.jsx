import {useState} from "react";

export const ProductTable = ({products, setProducts}) => {

    const [inputNombre, setInputNombre] = useState('');
    const [inputDescripcion, setInputDescripcion] = useState('');
    const [inputPrecio, setInputPrecio] = useState('');
    const [idProducto, setIdProducto] = useState(null);

    const handleDelete = (id) => {
        const productosActualizados = products.filter((producto) => {
            return producto.id !== id;
        });
        setProducts(productosActualizados);
    }

    const handleEdit = (id) => {
        const productoEditar = products.filter((producto) => {
            return producto.id === id;
        });
        const producto = productoEditar[0];
        const {nombre, descripcion, precio} = producto;
        setInputNombre(nombre);
        setInputDescripcion(descripcion);
        setInputPrecio(precio);
        setIdProducto(id);
    }

    const handleEditForm = (e) => {
        e.preventDefault();
        const id = idProducto;
        const productosActualizados = products.map((producto) => {
            return producto.id === id ? {
                ...producto, nombre: inputNombre, descripcion: inputDescripcion, precio: inputPrecio
            } : producto
        });
        setProducts(productosActualizados);
        setIdProducto(null);
    }

    return (

        <div className="container-xl">
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped table-bordered text-center">
                        <thead className="table-dark">
                        <tr>
                            <th className="py-3 text-uppercase">Id</th>
                            <th className="py-3 text-uppercase">Nombre</th>
                            <th className="py-3 text-uppercase">Descripcion</th>
                            <th className="py-3 text-uppercase">Precio</th>
                            <th className="py-3 text-uppercase">Edición</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((producto) => (
                            <tr key={producto.id}>
                                <td class="py-3">{producto.id}</td>
                                <td class="py-3">{producto.nombre}</td>
                                <td class="py-3">{producto.descripcion}</td>
                                <td class="py-3">{producto.precio}</td>
                                <td>
                                    <div className="d-flex justify-content-center gap-4">
                                        <a href="#" className="btn btn-warning text-uppercase fw-bold"
                                           data-bs-toggle="modal" data-bs-target="#modal"
                                           onClick={() => handleEdit(producto.id)}>
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
                                        <a href="#" className="btn btn-danger text-uppercase fw-bold"
                                           onClick={() => handleDelete(producto.id)}>
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
                    <div className="modal fade" id="modal">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="btn-close ms-auto" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    <h1 className="modal-title text-center text-uppercase fw-bold">Edición de
                                        Productos</h1>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={handleEditForm}>
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
                                                      onChange={(e) => setInputDescripcion(e.target.value)}
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-bold">Precio</label>
                                            <input type="text" className="form-control" name="precio" id="precio"
                                                   placeholder="Precio del producto" required value={inputPrecio}
                                                   onChange={(e) => setInputPrecio(e.target.value)}
                                            />
                                        </div>
                                        <div className="modal-footer">
                                            <input type="submit"
                                                   className="btn btn-primary block w-100 text-uppercase fw-bold"
                                                   value="Actualizar"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}