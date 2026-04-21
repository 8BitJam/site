"use client";

interface InputProps {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  email?: boolean;
  disabled?: boolean;
}

function Input({ placeholder, value, setValue, email, disabled }: InputProps) {
  return (
    <input
      type={email ? "email" : "text"}
      disabled={disabled || false}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="max-w-100 bg-gray-900 border-gray-700 border-2 outline-none px-4 py-1 text-gray-300 text-2xl font-jersey"
    />
  );
}

export default Input;
