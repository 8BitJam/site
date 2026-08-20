"use client";

type TextareaProps = {
  placeholder: string;
  value: string;
  setValue:
    | React.Dispatch<React.SetStateAction<string>>
    | ((newVal: string) => void);
  disabled?: boolean;
  styles?: string;
};

function Textarea({
  placeholder,
  value,
  setValue,
  disabled,
  styles,
}: TextareaProps) {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      disabled={disabled}
      className={`bg-gray-900 border-gray-700 border-2 outline-none px-4 py-1 text-gray-300 resize-y font-normal
       text-base min-h-50 ${styles} ${disabled && "resize-none!"}`}
    />
  );
}

export default Textarea;
