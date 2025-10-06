import { useEffect, useState } from "react";

interface Usuario {
    nome: string;
    email: string;
}

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
            <h1 className="text-lg font-semibold">Painel de Usuários</h1>
            <div className="text-right">
                <p className="font-bold">{usuario.nome}</p>
                <p className="text-sm">{usuario.email}</p>
            </div>
        </header>
    );
};

export default Header;