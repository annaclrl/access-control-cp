import { Link } from "react-router-dom";
import type { LoginForm } from "../../types/Usuarios";
import { useForm } from "react-hook-form";
const apiUrl = import.meta.env.VITE_API_URL;

const Login = () => {

    const {register, handleSubmit} = useForm<LoginForm>();

    const onSubmit = async (data: LoginForm) => {
        try{
            const response = await fetch (`${apiUrl}/usuarios?nomeUsuario=${data.nomeUsuario}&email=${data.email}`, );
            const usuario = await response.json();

            if (usuario.length > 0){
                localStorage.setItem("usuarioLogado", JSON.stringify(usuario[0]));
                alert("Login realizado com sucesso!");
            }else{
                alert("Nome de usuário ou email incorretos.");
            }
        }catch (error){
            console.error(error);
            alert("Ocorreu um erro ao tentar logar. Tente novamente.");
        }
    }


    return(
        <main>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <h1>Login</h1>
                <div>
                    <label>Nome de usuário</label>
                    <input type="text" {...register("nomeUsuario", {required: true})}/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" {...register("email", {required: true})}/>
                </div>
                <p> Ainda não tem uma conta? <Link to={"/cadastro"}>Cadastre-se aqui</Link></p>
            </form>
        </main>
    )
}

export default Login;