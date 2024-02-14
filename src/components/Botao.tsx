interface BotaoProps {
  cor?: "inicial" | "vermelho" | "verde";
  children: any;
  onClick?: () => void;
}

export default function Botao(props: BotaoProps) {
  let corClasses = "bg-blue-800";
  if (props.cor === "vermelho") {
    corClasses = "bg-red-700";
  } else if (props.cor === "verde") {
    corClasses = "bg-green-700";
  }
  return (
    <button
      onClick={props.onClick}
      className={`${corClasses} px-4 py-2 rounded-md mb-4`}
    >
      {props.children}
    </button>
  );
}
