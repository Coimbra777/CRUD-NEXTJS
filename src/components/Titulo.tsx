interface TituloProps {
  children: string;
}

export default function Titulo(props: TituloProps) {
  return (
    <div className="flex flex-col justify-center text-center ">
      <h1 className="p-6 text-2xl">{props.children}</h1>
      <hr className="border-2 " />
    </div>
  );
}
