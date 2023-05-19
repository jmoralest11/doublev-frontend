import { Route, Routes } from 'react-router-dom';
import UsuarioPage from './page/UsuarioPage';
import NotFoundPage from './page/NotFoundPage';
import DetalleUsuarioPage from './page/DetalleUsuarioPage';

function App() {
  return (
    <div className="container p-5">
      <Routes>
        <Route path="/" element={<UsuarioPage />} />
        <Route path="/:login" element={<DetalleUsuarioPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
