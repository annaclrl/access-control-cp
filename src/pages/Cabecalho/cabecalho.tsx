import { useEffect, useState } from "react";
import type { Usuario } from "../types/Usuarios";

const Header = () => {
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    useEffect(() => {
        const usuarioLogado = localStorage.getItem("usuarioLogado");
        if (usuarioLogado) {
            setUsuario(JSON.parse(usuarioLogado));
        }
    }, []);
    if (!usuario) return null; 

    return (
        <header className="bg-gray-800 text-white py-3 px-6 flex justify-between items-center shadow-md">
            <h1 className="text-lg font-semibold">Sistema de Usuários</h1>
            <div className="text-sm">
                <p><span className="font-bold">{usuario.nome}</span></p>
                <p>{usuario.email}</p>
            </div>
        </header>
    );
};

export default Header;