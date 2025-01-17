interface CardProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  name?: string;
  img?: string;
}
export const Card: React.FC<CardProp> = ({ children, name, img, ...props }) => {
  return (
    <button
      className="w-full bg-white flex justify-center items-center min-h-32 hover:bg-primary/10 rounded-md"
      {...props}
    >
      {img && (
        <img src={img} alt={name} className="w-full h-full object-cover" />
        
      )}
      {children}
      {name && <p>{name}</p>}
    </button>
  );
};
