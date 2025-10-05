import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import type { Usuario } from "../../types/Usuarios";
import { useEffect, useState } from "react";

const EditarCadastro = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const { register, handleSubmit, setValue } = useForm<Usuario>();

  useEffect(() => {
    const fetchUsuario = async () => {
      const res = await fetch(`http://localhost:3333/usuarios/${id}`);
      const data = await res.json();
      setUsuario(data);
      setValue("nome", data.nome);
      setValue("nomeUsuario", data.nomeUsuario);
      setValue("email", data.email);
    };
    fetchUsuario();
  }, [id, setValue]);
  }