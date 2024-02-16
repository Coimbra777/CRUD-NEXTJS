"use client";
import Botao from "@/components/Botao";
import Formulario from "@/components/Formulario";
import Layout from "@/components/Layout";
import Tabela from "@/components/Tabela";
import Cliente from "@/core/Cliente";
import { useEffect, useState } from "react";

export default function Home() {
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const [visivel, setVisivel] = useState<"tabela" | "form">("tabela");

  const clientes = [
    new Cliente("Ana", 34, "1"),
    new Cliente("Pedro", 40, "2"),
    new Cliente("Carlos", 25, "3"),
    new Cliente("José", 28, "4"),
    new Cliente("Maria", 19, "5"),
  ];

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel("form");
  }
  function clienteExcluido(cliente: Cliente) {
    console.log("Excluir ...", cliente.nome);
  }
  async function salvarCliente(cliente: Cliente) {
    setVisivel("tabela");
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel("form");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Layout titulo="Cadastro Simples">
        {visivel === "tabela" ? (
          <>
            <div className="flex justify-end">
              <Botao onClick={() => novoCliente()}>Novo Cliente</Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={clienteSelecionado}
              clienteExcluido={clienteExcluido}
            />
          </>
        ) : (
          <Formulario
            cliente={cliente}
            clienteMudou={salvarCliente}
            cancelado={() => setVisivel("tabela")}
          />
        )}
      </Layout>
    </div>
  );
}
