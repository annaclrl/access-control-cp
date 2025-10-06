import { useEffect, useState } from "react";
import type { Usuario, UsuarioLogado } from "../../types/Usuarios";


const Cabecalho = () => {
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
        <header className="bg-gray-800 text-white py-3 px-6 flex justify-between items-center shadow-md">
            <h1 className="text-lg font-semibold">Bem Vindo</h1>
            {usuario && (
                <div className="text-right">
                    <p className="font-bold">{usuario.nomeUsuario}</p>
                    <p className="text-sm">{usuario.email}</p>
                </div>
            )}
        </header>
    );
}

export default Cabecalho;