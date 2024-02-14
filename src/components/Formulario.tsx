import Cliente from "@/core/Cliente";
import Entrada from "./Entrada";
import { useState } from "react";
import Botao from "./Botao";

interface FormularioProps {
  cliente: Cliente;
  clienteMudou?: (cliente: Cliente) => void;
  cancelado?: () => void;
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
      <div className="flex justify-end mt-10">
        <Botao
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
          cor="verde"
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
        <Botao onClick={props.cancelado} cor="vermelho">
          Cancelar
        </Botao>
      </div>
    </div>
  );
}
