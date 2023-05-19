import { useState } from "react";
import Search from "../components/Search";
import Table from "../components/Table";
import Grafico from "../components/Grafico";

export default function UsuarioPage() {
  const [usuarios, setUsuarios] = useState();

  return (
    <div className="container">
        <h1 style={{ textAlign: 'right', color: 'white' }}>Double V Partners</h1>
        <hr />
        <Search setUsuarios={setUsuarios} />
        <Table usuarios={usuarios} />
        <Grafico usuarios={usuarios} />
    </div>
  )
}
