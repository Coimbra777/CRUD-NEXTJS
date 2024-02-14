interface EntradaProps {
  tipo?: "text" | "number";
  texto: string;
  value: any;
  somenteLeitura?: boolean;
  valorMudou?: (valor: any) => void;
}

export default function Entrada(props: EntradaProps) {
  return (
    <div className="flex flex-col mb-4">
      <label className="mb-4">{props.texto}</label>
      <input
        className="rounded-lg focus:outline-none text-black px-4 py-2 bg-slate-200"
        type={props.tipo ?? "text"}
        value={props.value}
        readOnly={props.somenteLeitura}
        onChange={(e) => props.valorMudou?.(e.target.value)}
      />
    </div>
  );
}
