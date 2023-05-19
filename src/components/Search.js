import { Fragment } from "react";
import axios from "axios";
import { Form } from "../hooks/Form";
import Alerta from './Alerta';
import { Search as SearchButton } from 'react-bootstrap-icons';

export default function Search({ setUsuarios }) {
    const { formState, onInputChange, onResetForm } = Form({
        usuario: ''
    });

    const { usuario } = formState;

    const validadorUsuario = (usuario) => {
        if (usuario.length < 4) {
            Alerta("El usuario debe contener 4 o más caracteres", "error");
            return false;
        } 

        if (usuario === "doublevpartners") {
            Alerta("No se puede realizar una búsqueda por la palabra 'doublevpartners'", "error");
            return false;
        }

        return true;
    }

    const buscarUsuario = async () => {
        const validate = validadorUsuario(usuario);

        if (validate) {
            const response = await axios.get(`https://api.github.com/search/users?q=${usuario}&perpage=10`);
            setUsuarios(response?.data?.items);
        }

        onResetForm();
    } 

    return (
        <Fragment>
            <div className="row justify-content-center">
                <div className="col-lg-9 col-md-9 col-sm-12">
                    <input onChange={onInputChange} type="text" className="form-control" name="usuario" placeholder="Buscar un usuario..." value={usuario} />
                </div>
                <div className="col-lg-1 col-md-9 col-sm-12">
                    <button type="submit" className="btn btn-light" onClick={buscarUsuario} style={{ textAlign: 'right' }}>
                        <SearchButton />
                    </button>
                </div>
            </div>
        </Fragment>
    )
}
