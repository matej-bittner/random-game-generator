import React from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
interface ErrorCardProps {
  message?: string;
}
const ErrorCard = ({ message }: ErrorCardProps) => {
  if (!message) return null;
  return (
    <div className="2xl:hidden w-full max-w-[400px] bg-destructive/15 rounded-xl px-3 py-2 items-center justify-center flex text-center text-destructive font-medium shadow-sm border-2 border-destructive/20">
      <MdOutlineErrorOutline size={40} />
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default ErrorCard;
