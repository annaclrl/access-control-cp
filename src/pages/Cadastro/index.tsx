import { useNavigate } from "react-router-dom";

const Cadastro = () =>{

    const navigate = useNavigate();
    return (
        <main>
            <form>
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