import Cliente from "@/core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";
interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}
export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.clienteExcluido || props.clienteSelecionado;
  function renderizarCabeçalho() {
    return (
      <tr>
        <th className="p-4 rounded-tl-lg">Código</th>
        <th className="p-4">Nome</th>
        <th className="p-4">Idade</th>
        {exibirAcoes ? (
          <th className="p-4 rounded-tr-lg text-center">Ações</th>
        ) : (
          false
        )}
      </tr>
    );
  }

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 === 0 ? "bg-slate-300" : "bg-slate-200"}`}
        >
          <td className="p-4">{cliente.id}</td>
          <td className="p-4">{cliente.nome}</td>
          <td className="p-4">{cliente.idade}</td>
          {exibirAcoes ? renderizarAcoes(cliente) : false}
        </tr>
      );
    });
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex justify-center items-center">
        {props.clienteSelecionado && (
          <button
            onClick={() => props.clienteSelecionado?.(cliente)}
            className="flex justify-center items-center text-green-700 hover:bg-slate-100 rounded-full p-2 m-1"
          >
            {IconeEdicao}
          </button>
        )}

        <button
          onClick={() => props.clienteExcluido?.(cliente)}
          className="flex justify-center items-center text-red-700 hover:bg-slate-100 rounded-full p-2 m-1"
        >
          {IconeLixo}
        </button>
      </td>
    );
  }

  return (
    <table className="w-full ">
      <thead className="bg-gray-700 text-left ">{renderizarCabeçalho()}</thead>
      <tbody className="text-left text-black">{renderizarDados()}</tbody>
    </table>
  );
}
