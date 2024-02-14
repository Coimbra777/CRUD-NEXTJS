interface BotaoProps {
  children: any;
}

export default function Botao(props: BotaoProps) {
  return (
    <button className="bg-blue-800 px-4 py-2 rounded-md mb-4">
      {props.children}
    </button>
  );
}
