# Sistema de Cadastro e Login de Usuários

Este projeto é uma aplicação web simples construída com **React**, **TypeScript** e **React Hook Form**, utilizando **JSON Server** como banco de dados fake para gerenciamento de usuários. Ele permite que os usuários se cadastrem, façam login e vejam suas informações na tela inicial, além de oferecer a funcionalidade de logout.

---

## 👨‍💻 Integrantes

Anna Clara Russo Luca — RM: 561928
Gabriel Duarte Maciel — RM: 565754
Tiago Guedes da Costa — RM: 564731

---

## Funcionalidades

### Cadastro de Usuário
- Formulário para cadastro de novos usuários com validações:
  - Nome (mínimo 3 caracteres)
  - Nome de usuário (mínimo 3 caracteres, único)
  - Email (mínimo 10 caracteres, único)
- Verificação de duplicidade de nome de usuário e email antes do cadastro.
- Atribuição automática de ID incremental para novos usuários.
- Redirecionamento para a página de login após cadastro bem-sucedido.

### Login de Usuário
- Formulário de login solicitando nome de usuário e email.
- Validação das credenciais com base nos dados do JSON Server.
- Armazenamento do ID do usuário no `localStorage` ao realizar login.
- Redirecionamento para a página inicial (`/home`) após login bem-sucedido.

### Página Inicial (Home)
- Exibição do usuário logado (nome de usuário e email) no centro da tela.
- Botão de **Logout** que limpa o `localStorage` e redireciona para a página de login.
- Layout responsivo e centralizado vertical e horizontalmente usando Flexbox.

---

## Tecnologias Utilizadas
- **React** + **TypeScript**: para desenvolvimento da interface do usuário.
- **React Hook Form**: para gerenciamento de formulários e validações.
- **React Router Dom**: para gerenciamento de rotas.
- **JSON Server**: para simular uma API RESTful simples.
- **Tailwind CSS**: para estilização rápida e responsiva.

---

## Estrutura do Projeto

src/
├─ components/
│ └─ Cabecalho.tsx
├─ pages/
│ ├─ Login.tsx
│ ├─ Cadastro.tsx
│ └─ Home.tsx
├─ types/
│ └─ Usuarios.ts
├─ App.tsx
└─ routes/
└─ index.tsx
db.json

- `Cabecalho.tsx`: componente que exibe informações do usuário logado.
- `Login.tsx`: página de login do usuário.
- `Cadastro.tsx`: página de cadastro de novos usuários.
- `Home.tsx`: página inicial após login com exibição de informações do usuário.
- `db.json`: banco de dados fake do JSON Server com usuários cadastrados.

---

## Como Rodar o Projeto

1. **Instalar dependências**
```bash
npm install
```

2. Iniciar o JSON Server
```bash
npm run api
```

3. Iniciar a aplicação React
```bash
npm start
```

---

## Observações

- Ao abrir a página inicial, se o usuário estiver logado, suas informações são exibidas automaticamente.

- Caso o usuário não esteja logado ou não haja dados válidos, apenas a mensagem "Bem Vindo" será exibida.

- Logout limpa os dados do usuário armazenados no localStorage e redireciona para a tela de login.

---

## Link do repositorio

https://github.com/annaclrl/access-control-cp
