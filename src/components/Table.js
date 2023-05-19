import { Fragment } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { Person } from 'react-bootstrap-icons';

const columnas = [
    {
        name: "Identificador usuario",
        selector: "id",
        sortable: true
    },
    {
        name: "Login usuario",
        selector: "login",
        sortable: true
    },
    {
        name: "Enlace",
        cell: row => <Link to={`/${row.login}`}><Person style={{ fontSize: '25px' }} /></Link>,
        ignoreRowClick: true,
        allowOverflow: true,
        button: true
    }
]

const paginacionOpciones = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}

export default function Table({ usuarios }) {
    if (usuarios) {
        return (
            <div className="card mt-5 p-3" style={{ fontSize: '40px' }}>
                <div class="card-body">
                    <DataTable
                        style={{ borderRadius: '5px' }}
                        columns={columnas}
                        data={usuarios}
                        pagination
                        paginationComponentOptions={paginacionOpciones}
                        conditionalRowStyles={[
                            {
                                when: row => true
                            }
                        ]}
                    />
                </div>
            </div>
        )
    }
}
