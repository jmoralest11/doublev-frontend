import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Alerta from "../components/Alerta";

export default function DetalleUsuarioPage() {
    const { login } = useParams();
    const [usuario, setUsuario] = useState();
    const navigate = useNavigate();

    const obtenerUsuario = async () => {
        try {
            const response = await axios.get(`https://api.github.com/users/${login}`);
            setUsuario(response.data);
        } catch (error) {
            console.log("🚀 ~ file: DetalleUsuarioPage.js:14 ~ obtenerUsuario ~ error:", error)
        }
    }

    const guardarUsuario = async () => {
        try {
            await axios.post(`http://localhost:4000/`, usuario);
            Alerta('Se guardo satisfactoriamente el usuario en la API', 'success');
            return navigate('/');
        } catch (error) {
            console.log("🚀 ~ file: DetalleUsuarioPage.js:22 ~ guardarUsuario ~ error:", error)
        }
    }

    useEffect(() => {
        obtenerUsuario();
    }, [login]);

    if (usuario) {
        return (
            <div className="container p-5">
                <div class="card" style={{ width: '30rem', margin: '0 auto' }}>
                    <img class="card-img-top" src={usuario.avatar_url} alt={usuario.login} />
                    <div class="card-body">
                        <h5 class="card-title" style={{ fontSize: '40px' }}>{usuario.name}</h5>
                        <p class="card-text">
                            <p>Fecha de creación: {usuario.created_at}</p>
                            <p>Compañía: {usuario.company}</p>
                        </p>
                        <Link to={'/'} class="btn btn-primary btn-blue" style={{ marginRight: '10px' }}>Volver</Link>
                        <button class="btn btn-primary btn-blue" onClick={guardarUsuario}>Exportar</button>
                    </div>
                </div>
            </div>
        )
    }
}
