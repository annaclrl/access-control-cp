import { Link, useNavigate } from "react-router-dom";
import type { LoginForm } from "../../types/Usuarios";
import { useForm } from "react-hook-form";
const apiUrl = import.meta.env.VITE_API_URL;

const Login = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

    const onSubmit = async (data: LoginForm) => {
        try {
            const response = await fetch(`${apiUrl}/usuarios?nomeUsuario=${data.nomeUsuario}&email=${data.email}`,);

            if(!response.ok) throw new Error("Erro ao consultar usuário.");

            const usuario = await response.json();

            if (usuario.length > 0) {
                localStorage.setItem("usuarioLogado", JSON.stringify(usuario[0]));
                alert("Login realizado com sucesso!");
            } else {
                alert("Nome de usuário ou email incorretos.");
            }
        } catch (error) {
            console.error(error);
            alert("Ocorreu um erro ao tentar logar. Tente novamente.");
        }
    }


    return (
        <main>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Login</h1>
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
                <button type="submit" onClick={() => navigate("/")}>Entrar</button>
                <p> Ainda não tem uma conta? <Link to={"/cadastro"}>Cadastre-se aqui</Link></p>
            </form>
        </main>
    )
}

export default Login;