import { Link, useNavigate } from "react-router-dom";
import type { Usuario } from "../../types/Usuarios";
import { useForm } from "react-hook-form";

const Cadastro = () => {
    const navigate = useNavigate();

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Usuario>();

  const onSubmit = handleSubmit(async (data: Usuario) => {
    try {
      const responseUsuario = await fetch(`http://localhost:3334/usuarios?nomeUsuario=${data.nomeUsuario}`);
      const usuariosComMesmoNome = await responseUsuario.json();
      if (usuariosComMesmoNome.length > 0) {
        alert("Nome de usuário já cadastrado!");
        return;
      }

      const responseEmail = await fetch(`http://localhost:3334/usuarios?email=${data.email}`);
      const usuariosComMesmoEmail = await responseEmail.json();
      if (usuariosComMesmoEmail.length > 0) {
        alert("Email já cadastrado!");
        return;
      }

      const responseTodos = await fetch("http://localhost:3334/usuarios");
      const todosUsuarios: Usuario[] = await responseTodos.json();
      const ultimoId = todosUsuarios.length > 0 ? Math.max(...todosUsuarios.map(u => u.id)) : 0;
      const novoId = ultimoId + 1;

      const response = await fetch("http://localhost:3334/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: novoId,
          nome: data.nome,
          nomeUsuario: data.nomeUsuario,
          email: data.email,
        }),
      });

      if (!response.ok) throw new Error(`Erro ao cadastrar usuário: ${response.status}`);

      alert("Cadastro realizado com sucesso!");
      navigate("/login");
    } catch (error: any) {
      console.error(error);
      alert(`Ocorreu um erro ao tentar cadastrar: ${error.message || error}`);
    }
  });

    return (
        <main className="flex justify-center items-center h-screen bg-gray-500">
            <form onSubmit={onSubmit} className="bg-white p-6 rounded-2xl shadow-md w-90">
                <h1 className="text-xl font-bold mb-4 text-center">Cadastro</h1>
                <div className="mb-4">
                    <label className="block mb-2">Nome</label>
                    <input type="text"
                        {...register("nome",
                            {
                                required: "O nome é obrigatório",
                                minLength: { value: 3, message: "O nome deve ter no mínimo 3 caracteres" },
                            })
                        }
                        className="w-full border rounded p-2"
                    />
                    {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}

                </div>
                <div className="mb-4">
                    <label className="block mb-2">Nome de usuário</label>
                    <input type="text"
                        {...register("nomeUsuario",
                            {
                                required: "O nome de usuário é obrigatório",
                                minLength: { value: 3, message: "O nome de usuário deve ter no mínimo 3 caracteres" },
                            })
                        }
                        className="w-full border rounded p-2"
                    />
                    {errors.nomeUsuario && <p className="text-red-500 text-sm mt-1">{errors.nomeUsuario.message}</p>}
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Email</label>
                    <input type="email"
                        {...register("email",
                            {
                                required: "O email é obrigatório",
                                minLength: { value: 10, message: "O email deve ter no mínimo 10 caracteres" },
                            })
                        }
                        className="w-full border rounded p-2"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <button type="submit" className="w-full bg-gray-800 text-white rounded p-2 ">Cadastrar</button>
                <p className="mt-4 text-center text-sm text-gray-600"> Já possui uma conta? <Link to={"/login"} className="text-blue-500 underline">Faça Login aqui</Link></p>
            </form>
        </main>
    )
};

export default Cadastro;
