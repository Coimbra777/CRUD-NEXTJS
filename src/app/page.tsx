"use client";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Pedro", 36, "2"),
    new Cliente("Carlos", 24, "3"),
    new Cliente("João", 40, "4"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome);
  }
  function clienteExcluido(cliente: Cliente) {
    console.log("Excluir ...", cliente.nome);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao>Novo Cliente</Botao>
        </div>
        {/* <Tabela
          clientes={clientes}
          clienteSelecionado={clienteSelecionado}
          clienteExcluido={clienteExcluido}
        /> */}
        <Formulario />
      </Layout>
    </div>
  );
}
