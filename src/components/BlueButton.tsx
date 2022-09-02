import { MouseEventHandler } from "react";

interface IProps {
  children: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
export default function BlueButton({ children, onClick }: IProps) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
