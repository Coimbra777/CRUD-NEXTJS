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
  return (
    <div className="flex justify-center items-center h-screen">
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes}></Tabela>
      </Layout>
    </div>
  );
}
