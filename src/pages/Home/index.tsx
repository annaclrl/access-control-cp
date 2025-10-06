import { useNavigate } from "react-router-dom";
import type { Usuario, UsuarioLogado } from "../../types/Usuarios";
import { useEffect, useState } from "react";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userLogado");
    navigate("/login");
  };

  const [usuario, setUsuario] = useState<UsuarioLogado | null>(null);

  useEffect(() => {
    const storedId = localStorage.getItem("userLogado");
    if (!storedId) return;

    const userId = Number(storedId);

    const fetchUsuario = async () => {
      try {
        const response = await fetch(`http://localhost:3334/usuarios?id=${userId}`);
        if (!response.ok) throw new Error("Erro ao buscar usuário");
        const usuarios: Usuario[] = await response.json();
        if (usuarios.length > 0) {
          setUsuario(usuarios[0]);
        } else {
          setUsuario(null);
        }
      } catch (error) {
        console.error(error);
        setUsuario(null);
      }
    };

    fetchUsuario();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      {usuario && (
        <div className="text-center">
          <p className="font-bold text-lg">{usuario.nomeUsuario}</p>
          <p className="text-sm">{usuario.email}</p>
        </div>
      )}
      <button
        onClick={handleLogout}
        className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;