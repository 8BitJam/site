import { FaInfoCircle } from "react-icons/fa";

function Tooltip({ text }: { text: string }) {
  return (
    <div className="group relative ml-3 flex justify-center">
      <div className="opacity-0 group-hover:opacity-100 pointer-events-none w-70 border-2 border-gray-700 px-4 py-2 bg-gray-900 text-gray-300 absolute text-xl leading-5 bottom-[calc(100%+5px)] transition-opacity! duration-300">
        {text}
      </div>
      <FaInfoCircle size={17} className="cursor-pointer" />
    </div>
  );
}

export default Tooltip;
