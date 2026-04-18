interface HeaderProps {
  title: string;
  description: string;
}

function Header({ title, description }: HeaderProps) {
  return (
    <div className="flex flex-col gap-y-3 items-center text-center">
      <h2 className="text-blue-600 font-extrabold text-5xl font-jersey">
        {title}
      </h2>
      <p className="text-gray-300 w-[80%]">{description}</p>
    </div>
  );
}

export default Header;
