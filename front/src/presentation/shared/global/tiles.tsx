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
      } p-4 rounded-md shadow-md`}
    >
      <header>
        <h2 className={`text-sm font-medium ${id != 1 && "text-black/50"}`}>{name}</h2>
      </header>
      <section className="">
        <h3 className="text-2xl font-bold">{digit}</h3>
        <div className="flex justify-between items-center">
          <small className="text-xs">vs. anterior mes</small>
          <p className="font-bold">{increase}%</p>
        </div>
      </section>
    </article>
  );
};
