interface PropTile {
  digit: number;
  name: string;
  increase: number;
  id: number;
}

export const Tile: React.FC<PropTile> = ({ digit, increase, name, id }) => {
  return (
    <article
      className={`${
        id === 1 ? "bg-primary text-white" : "bg-primary/15"
      } p-4 rounded-md shadow-md min-h-32 flex flex-col justify-between hover:shadow-2xl`}
    >
      <header>
        <h2 className={`text-md font-bold  ${id != 1 && "text-black "}`}>
          {name}
        </h2>
      </header>
      <h3 className="text-3xl font-bold">{digit}</h3>
      <div className="flex justify-between items-center text-xs">
        <p>vs. anterior mes</p>
        <p>{increase}%</p>
      </div>
    </article>
  );
};
