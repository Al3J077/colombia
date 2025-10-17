import React, { useEffect, useState } from "react";

function Home() {
const [departamentos, setDepartamentos] = useState(null);
const [capitales, setCapitales] = useState(null);
const [modo, setModo] = useState("departamentos"); 
const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    const urlDpt =
      "https://gist.githubusercontent.com/diaztibata/fe3d238ee6b59ef71c8001654441a9f6/raw/4974a1b1cab3ac606dd96aa2d34d6e7c8e007daf/departamentosglobal.json";
    const urlCpt =
      "https://gist.githubusercontent.com/diaztibata/fe3d238ee6b59ef71c8001654441a9f6/raw/4974a1b1cab3ac606dd96aa2d34d6e7c8e007daf/capitalesglobal.json";

    const fetchJson = async (url, setter) => {
      try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error("Error al cargar JSON: " + resp.status);
        const json = await resp.json();
        setter(json);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchJson(urlDpt, setDepartamentos);
    fetchJson(urlCpt, setCapitales);
  }, []);

  let lista = [];

  if (modo === "capitales" && capitales) {
    lista = capitales.data.cpt;
  } else if (modo === "departamentos" && departamentos) {
    lista = departamentos.data.dpt;
  }

  let listaFiltrada;

  if (busqueda.length >= 2) {
    listaFiltrada = lista.filter((unavuelta) =>
      unavuelta.nm.toLowerCase().includes(busqueda.toLowerCase())
    );
  } else {
    listaFiltrada = lista; 
  }

  return (
    <>
      <h1>{modo}</h1>
      <input type="text" 
      value={busqueda} onChange={(e) => setBusqueda(e.target.value)}
      />
      
      <div className="Filtro">
        <button onClick={() => setModo("departamentos")}>Departamento</button>
        <button onClick={() => setModo("capitales")}>Capitales</button>
      </div>

      <ul className="Lista">
        {listaFiltrada.length > 0 ? (
          listaFiltrada.map((item) => (
            <li key={item.id}>{item.nm}</li>
          ))
          
        ) : (
          <li>Cargando datos...</li>
        )}
      </ul>
    </>
  );
}

export default Home;
