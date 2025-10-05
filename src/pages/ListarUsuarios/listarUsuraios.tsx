import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Usuario } from "../../types/Usuarios";

const ListarUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const res = await fetch("http://localhost:3333/usuarios");
                const data = await res.json();
                setUsuarios(data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        };

        fetchUsuarios();
    }, []);

const handleEditar = (id: number) => {
    navigate(`/editar-cadastro/${id}`);
};
return (
    <main>
        <h1>Usuários Cadastrados</h1>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Usuário</th>
                        <th>Email</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.nome}</td>
                            <td>{usuario.nomeUsuario}</td>
                            <td>{usuario.email}</td>
                            <td>
                                <button
                                    onClick={() => handleEditar(usuario.id!)}>
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