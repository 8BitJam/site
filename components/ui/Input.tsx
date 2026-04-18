"use client";

interface InputProps {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

function Input({ placeholder, value, setValue }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="max-w-100 bg-gray-900 border-gray-700 border-2 outline-none px-4 py-1 text-gray-300 text-2xl font-jersey"
    />
  );
}

export default Input;
