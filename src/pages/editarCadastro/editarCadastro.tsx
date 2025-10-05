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
  }
   const onSubmit = async (data: Usuario) => {
    await fetch(`http://localhost:3333/usuarios/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    alert("Cadastro atualizado!");
    navigate("/cadastro");
  };

  if (!usuario) return <p>Carregando...</p>;

  return (
    <main>
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1>Editar Cadastro</h1>

        <label>Nome</label>
        <input {...register("nome")}/>

        <label>Nome de Usuário</label>
        <input {...register("nomeUsuario")}/>

        <label>Email</label>
        <input {...register("email")}/>

        <button>Salvar</button>
      </form>
    </main>
  );
};

export default EditarCadastro;