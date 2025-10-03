import { useNavigate } from "react-router-dom";
import type { Usuario } from "../../types/Usuarios";
import { useForm } from "react-hook-form";

const Cadastro = () =>{
    const navigate = useNavigate();

    const {register, handleSubmit, formState: { errors }} = useForm<Usuario>();

    return (
        <main>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Cadastro</h1>
                <div>
                    <label>Nome</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Nome de usuário</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email"/>
                </div>
                <button type="submit" onClick={() => navigate("/login")}> Cadastrar</button>
            </form>
        </main>
    )
}

export default Cadastro;