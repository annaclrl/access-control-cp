import { Link, useNavigate } from "react-router-dom";
import type { LoginForm } from "../../types/Usuarios";
import { useForm } from "react-hook-form";


const Login = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm<LoginForm>();

    const onSubmit = async (data: LoginForm) => {
        try {
            const API_BASE = import.meta.env.VITE_API_URL_BASE;

            const response = await fetch(`${API_BASE}/usuarios?nomeUsuario=${data.nomeUsuario}&email=${data.email}`);

            if (!response.ok) throw new Error("Erro ao consultar usuário.");

            const usuario = await response.json();

            if (usuario.length > 0) {
                localStorage.setItem("usuarioLogado", JSON.stringify(usuario[0]));
                alert("Login realizado com sucesso!");
                navigate("/usuarios");
            } else {
                alert("Nome de usuário ou email incorretos.");
            }
        } catch (error) {
            console.error(error);
            alert("Ocorreu um erro ao tentar logar. Tente novamente.");
        }
    }

    return (
        <main className="flex justify-center items-center h-screen bg-gray-500">
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-2xl shadow-md w-90">
                <h1 className="text-xl font-bold mb-4 text-center">Login</h1>
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
                <button type="submit" className="w-full bg-gray-800 text-white rounded p-2 ">Entrar</button>
                <p className="mt-4 text-center text-sm text-gray-600"> Ainda não tem uma conta? <Link to={"/cadastro"} className="text-blue-500 underline">Cadastre-se aqui</Link></p>
            </form>
        </main>
    )
}

export default Login;