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
    <main>
      <form onSubmit={onSubmit}>
        <h1>Editar Cadastro</h1>

        
        <div>
          <label>Nome</label>
          <input
            type="text"
            {...register("nome", { required: "O nome é obrigatório" })}
            />
          {errors.nome && <p>{errors.nome.message}</p>}
        </div>

        
        <div>
          <label>Nome de Usuário</label>
          <input
            type="text"
            {...register("nomeUsuario", { required: "O nome de usuário é obrigatório" })}
            />
          {errors.nomeUsuario && <p>{errors.nomeUsuario.message}</p>}
        </div>

        
        <div>
          <label>Email</label>
          <input
            type="email"
            {...register("email", { required: "O email é obrigatório" })}
            className=""
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <button type="submit">
          Salvar Alterações
        </button>
      </form>
    </main>
  );
};

export default EditarCadastro;