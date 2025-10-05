import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Usuario } from "../../types/Usuarios";

const ListarUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const res = await fetch("http://localhost:3334/usuarios");
                const data = await res.json();
                setUsuarios(data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        };

        fetchUsuarios();
    }, []);

    const handleEditar = (id: string) => {
        navigate(`/editar-cadastro/${id}`);
    };

    return (
        <main className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
            <h1 className="text-2xl font-bold mb-6">Usuários Cadastrados</h1>
            <div className="bg-white shadow-md rounded-lg w-full max-w-3xl p-4">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="p-3 text-left">Nome</th>
                            <th className="p-3 text-left">Usuário</th>
                            <th className="p-3 text-left">Email</th>
                            <th className="p-3 text-center">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((usuario) => (
                            <tr key={usuario.id} className="border-b hover:bg-gray-50">
                                <td className="p-3">{usuario.nome}</td>
                                <td className="p-3">{usuario.nomeUsuario}</td>
                                <td className="p-3">{usuario.email}</td>
                                <td className="p-3 text-center">
                                    <button
                                        onClick={() => handleEditar(usuario.id)} className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                                    >
                                        Editar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};
export default ListarUsuarios;