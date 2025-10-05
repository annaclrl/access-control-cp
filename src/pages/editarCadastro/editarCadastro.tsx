import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import type { Usuario } from "../../types/Usuarios";
import { useEffect, useState } from "react";

const EditarCadastro = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState<Usuario | null>(null);
    const { register, handleSubmit, setValue } = useForm<Usuario>();

    useEffect(() => {
        const fetchUsuario = async () => {
            const res = await fetch(`http://localhost:3333/usuarios/${id}`);
            const data = await res.json();
            setUsuario(data);
            setValue("nome", data.nome);
            setValue("nomeUsuario", data.nomeUsuario);
            setValue("email", data.email);
        };
        fetchUsuario();
    }, [id, setValue]);

    const onSubmit = handleSubmit(async (data: Usuario) => {
    
    
    const checkDuplicado = await fetch(`http://localhost:3333/usuarios?email=${data.email}`);
    const usuariosDuplicados = await checkDuplicado.json();
    
    
    if (usuariosDuplicados.some((u: Usuario) => u.id !== id)) { 
        alert("Email já cadastrado! Por favor, use outro.");
        return;
    }
    
    try {
        
        const response = await fetch(`http://localhost:3333/usuarios/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

    return (
    <main className="flex justify-center items-center h-screen bg-gray-500">
      <form onSubmit={onSubmit} className="bg-white p-6 rounded-2xl shadow-md w-90">
        <h1 className="text-xl font-bold mb-4 text-center">Editar Cadastro</h1>

        
        <div className="mb-4">
          <label className="block mb-2">Nome</label>
          <input
            type="text"
            {...register("nome", { required: "O nome é obrigatório" })}  
            className="w-full border rounded p-2"
            />
          {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
        </div>

        
        <div className="mb-4">
          <label className="block mb-2">Nome de Usuário</label>
          <input
            type="text"
            {...register("nomeUsuario", { required: "O nome de usuário é obrigatório" })}
            className="w-full border rounded p-2"
            />
          {errors.nomeUsuario && <p className="text-red-500 text-sm mt-1">{errors.nomeUsuario.message}</p>}
        </div>

        
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            type="email"
            {...register("email", { required: "O email é obrigatório" })}
            className="w-full border rounded p-2"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <button type="submit" className="w-full bg-gray-800 text-white rounded p-2">
          Salvar Alterações
        </button>
      </form>
    </main>
  );
};

export default EditarCadastro;