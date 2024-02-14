import Cliente from "@/core/Cliente";
import Entrada from "./Entrada";
import { useState } from "react";

interface FormularioProps {
  cliente: Cliente;
}

export default function Formulario(props: FormularioProps) {
  const id = props.cliente?.id;
  const [nome, setNome] = useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = useState(props.cliente?.idade ?? 0);
  return (
    <div>
      {id ? <Entrada somenteLeitura texto="Código" value={id} /> : false}

      <Entrada texto="Nome" value={nome} valorMudou={setNome} />

      <Entrada
        texto="Idade"
        tipo="number"
        value={idade}
        valorMudou={setIdade}
      />
    </div>
  );
}
