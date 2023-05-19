import axios from 'axios';
import { Chart as ChartJS } from 'chart.js/auto'
import { useEffect, useState } from 'react';
import { Bar, Chart } from 'react-chartjs-2'

export default function Grafico({ usuarios }) {
    const [detalleUsuario, setDetalleUsuario] = useState();
    const [nombreUsuario, setNombreUsuario] = useState();
    const [seguidores, setSeguidores] = useState();

    const primerosDiez = (usuarios) => {
        const primerosDiez = usuarios?.slice(0, 10);
        return primerosDiez;
    }

    const obtenerDetalleUsuario = async (valueUsuarios) => {
        const detailsUsers = await Promise.all(
            valueUsuarios?.map(async (usuario) => {
                const response = await axios.get(`https://api.github.com/users/${usuario?.login}`);
                return response?.data;
            })
        )
        setDetalleUsuario(detailsUsers);
        getNombres();
        getSeguidores();
    }

    const getNombres = () => {
        const nombresUsuarios =
            detalleUsuario?.map((usuario) => {
                return usuario?.name;
            })
        setNombreUsuario(nombresUsuarios);
    }

    const getSeguidores = () => {
        const seguidoresUsuarios =
            detalleUsuario?.map((usuario) => {
                return usuario?.followers;
            })
        seguidoresUsuarios?.sort((a, b) => b - a); // Ordenar los datos de mayor a menor
        setSeguidores(seguidoresUsuarios);
    }

    primerosDiez(usuarios);

    if (usuarios) {
        const valueUsuarios = primerosDiez(usuarios);

        obtenerDetalleUsuario(valueUsuarios);
    }

    if (usuarios) {
        const data = {
            labels: nombreUsuario,
            datasets: [{
                label: "Seguidores",
                backgroundColor: "rgba(26, 157, 245, 96)",
                borderColor: 'black',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(66, 212, 211, 83)',
                hoverBorderColor: '#FF0000',
                data: seguidores
            }]
        }

        const opciones = {
            maintainAspectRatio: false,
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                },
                x: {
                    barPercentage: 0.5 // Define el ancho de las barras como el 50% del ancho disponible
                }
            }
        }


        return (
            <div className='card mt-5 p-2'>
                <Bar data={data} options={opciones} />
            </div>
        )
    }
}
