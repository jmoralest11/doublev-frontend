import Swal from 'sweetalert2';

const Alerta = (mensaje, tipo) => {
  Swal.fire({
    title: mensaje,
    icon: tipo,
    confirmButtonText: 'Aceptar'
  });
};

export default Alerta;
