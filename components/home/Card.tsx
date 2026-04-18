interface CardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

function Card({ title, description, children }: CardProps) {
  return (
    <div className="text-blue-600 flex-1 flex flex-col gap-y-3 border-2 border-gray-700 min-w-80 p-5 cursor-pointer hover:bg-gray-900">
      {children}
      <h2 className="font-jersey font-bold text-3xl">{title}</h2>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}

export default Card;
