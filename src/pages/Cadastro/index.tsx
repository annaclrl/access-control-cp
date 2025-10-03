import { useNavigate } from "react-router-dom";
import type { Usuario } from "../../types/Usuarios";
import { useForm } from "react-hook-form";
const apiUrl = import.meta.env.VITE_API_URL;

const Cadastro = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<Usuario>();


    const onSubmit = handleSubmit(async (data: Usuario) => {
        const responseUsuario = await fetch(`${apiUrl}/usuarios?nomeUsuario=${data.nomeUsuario}`);
        const usuarioExistente = await responseUsuario.json();

        if (usuarioExistente.length > 0) {
            alert("Nome de usuário já existe.");
            return;
        }

        const responseEmail = await fetch(`${apiUrl}/usuarios?email=${data.email}`);
        const emailExistente = await responseEmail.json();

        if (emailExistente.length > 0) {
            alert("Email já cadastrado.");
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/usuarios`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) throw new Error("Erro ao cadastrar usuário.");
            alert("Cadastro realizado com sucesso!");

        } catch (error) {
            console.error(error);
            alert("Ocorreu um erro ao tentar cadastrar. Tente novamente.");
        }

    });

    return (
        <main>
            <form onSubmit={onSubmit}>
                <h1>Cadastro</h1>
                <div>
                    <label>Nome</label>
                    <input type="text"
                        {...register("nome",
                            {
                                required: "O nome é obrigatório",
                                minLength: { value: 3, message: "O nome deve ter no mínimo 3 caracteres" },
                            })
                        }
                    />
                    {errors.nome && <p>{errors.nome.message}</p>}
                </div>
                <div>
                    <label>Nome de usuário</label>
                    <input type="text"
                        {...register("nomeUsuario",
                            {
                                required: "O nome de usuário é obrigatório",
                                minLength: { value: 3, message: "O nome de usuário deve ter no mínimo 3 caracteres" },
                            })
                        }
                    />
                    {errors.nomeUsuario && <p>{errors.nomeUsuario.message}</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input type="email"
                        {...register("email",
                            {
                                required: "O email é obrigatório",
                                minLength: { value: 10, message: "O email deve ter no mínimo 10 caracteres" },
                            })
                        }
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <button type="submit" onClick={() => navigate("/login")}>Cadastrar</button>
            </form>
        </main>
    )
}

export default Cadastro;