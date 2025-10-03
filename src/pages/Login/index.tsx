import { Link } from "react-router-dom";

const Login = () => {
    return(
        <main>
            <h1>Login</h1>
            <form>
                <div>
                    <label>Nome de usuário</label>
                    <input type="text" name="nomeUsuario"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email"/>
                </div>
                <p> Ainda não tem uma conta? <Link to={"/cadastro"}>Cadastre-se aqui</Link></p>
            </form>
        </main>
    )
}

export default Login;