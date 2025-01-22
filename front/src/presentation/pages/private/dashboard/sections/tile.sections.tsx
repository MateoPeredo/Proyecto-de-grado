import { Tile } from "../../../../shared/global/tiles";

const mookTile = [
  { id: 1, digit: 1, increase: 15, name: "Events over time" },
  { id: 2, digit: 250, increase: 20, name: "Active Users" },
  { id: 3, digit: 1000, increase: 10, name: "Page Views" },
  { id: 4, digit: 50, increase: 5, name: "Conversions" },
];
export const SectionTile = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {mookTile.map((tile) => (
        <Tile
          id={tile.id}
          digit={tile.digit}
          increase={tile.increase}
          key={tile.id}
          name={tile.name}
        />
      ))}
    </div>
  );
};
