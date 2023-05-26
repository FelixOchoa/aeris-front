interface InputProps {
  type: string;
  handle: (e: any) => void;
}

export const Input = ({ type, handle }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full px-8">
      <label htmlFor={type} className="font-medium text-sm">
        {type === "email" ? "Correo electrónico" : "Contraseña"}
      </label>
      <input
        type={type}
        onChange={handle}
        placeholder={
          type === "email" ? "Escribe el correo electrónico" : "••••••••••"
        }
        className="border-2 border-[#eae9ec] rounded-md p-2 outline-none text-[#a8a9ac] font-medium text-sm mb-3"
      />
    </div>
  );
};
