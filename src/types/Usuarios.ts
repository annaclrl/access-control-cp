export type Usuario = {
    nome: string;
    nomeUsuario: string;
    email: string;
}

export type LoginForm = Pick<Usuario, 'nomeUsuario' | 'email'> ;