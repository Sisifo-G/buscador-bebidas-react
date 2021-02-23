import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const { categorias } = useContext(CategoriasContext);

  // Función para leer los contenidos del formulario
  const obtenerDatosReceta = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form action="" className="col-12">
      <fieldset className="text-center">
        <legend>Busca bebidas por categoría o ingrediente</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control mt-3"
            type="text"
            placeholder="Busca por Ingrediente"
            onChange={obtenerDatosReceta}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control mt-3"
            name="categoria"
            onChange={obtenerDatosReceta}
          >
            <option value=""> -- Selecciona Categoría --</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary mt-3"
            value="Buscar Bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
