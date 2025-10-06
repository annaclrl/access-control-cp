export type Usuario = {
  id: number;
  nome: string;
  nomeUsuario: string;
  email: string;
};

export type UsuarioLogado = Pick<Usuario, "nomeUsuario" | "email">;

export type LoginForm = Pick<Usuario, "nomeUsuario" | "email">;
