import { useNavigate } from "react-router-dom";
import type { Usuario } from "../../types/Usuarios";
import { useForm } from "react-hook-form";

const Cadastro = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<Usuario>();

    return (
        <main>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                </div>
                <button type="submit" onClick={() => navigate("/login")}>Cadastrar</button>
            </form>
        </main>
    )
}

export default Cadastro;