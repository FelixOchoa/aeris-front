import { useEffect, useRef } from "react";
import { Slide } from "react-awesome-reveal";
import { useFormStudent } from "@/hooks/useStudents";

type ModalProps = {
  active: boolean;
  setActive: (active: boolean) => void;
};

export const Modal = ({ active, setActive }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleClickOutsideRef = useRef<(event: MouseEvent) => void>();
  const {
    handleSubmit,
    setNames,
    setLastnames,
    setEmail,
    setPassword,
    setPhone,
    setAddress,
    setGrade,
    setRole,
    setBornDate,
    setIdentification,
    setTypeIdentification,
  } = useFormStudent(setActive);

  handleClickOutsideRef.current = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setActive(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      handleClickOutsideRef.current?.(event);
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {active && (
        <section className="fixed top-3 w-full h-full bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto">
          <div className="w-1/2 h-1/2 absolute top-3" ref={modalRef}>
            <Slide direction="up" triggerOnce>
              <div className="bg-white rounded-lg w-full flex flex-col justify-center items-center py-5">
                <h1 className="text-2xl font-semibold">Crear estudiante</h1>
                <form
                  className="flex flex-col w-3/4 mt-5"
                  onSubmit={handleSubmit}
                >
                  <div className="flex flex-col">
                    <label className="text-[#202124] font-medium mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="border border-gray-200 rounded-md px-4 py-2"
                      placeholder="Digite su nombre"
                      required
                      onChange={(event) => setNames(event.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="text-[#202124] font-medium mb-2">
                      Apellidos
                    </label>
                    <input
                      required
                      type="text"
                      className="border border-gray-200 rounded-md px-4 py-2"
                      placeholder="Digite sus apellidos"
                      onChange={(event) => setLastnames(event.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="text-[#202124] font-medium mb-2">
                      Correo
                    </label>
                    <input
                      type="email"
                      required
                      className="border border-gray-200 rounded-md px-4 py-2"
                      placeholder="Digite su correo"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="text-[#202124] font-medium mb-2">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="border border-gray-200 rounded-md px-4 py-2"
                      placeholder="Digite su contraseña"
                      required
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="text-[#202124] font-medium mb-2">
                      Rol
                    </label>
                    <select
                      className="border border-gray-200 rounded-md px-4 py-2 cursor-not-allowed"
                      disabled
                      onChange={(event) => setRole(event.target.value)}
                    >
                      <option value="student">Estudiante</option>
                    </select>
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="text-[#202124] font-medium mb-2">
                      Grado
                    </label>
                    <select
                      className="border border-gray-200 rounded-md px-4 py-2"
                      required
                      onChange={(event) => setGrade(event.target.value)}
                    >
                      <option value="1">1°</option>
                      <option value="2">2°</option>
                      <option value="3">3°</option>
                      <option value="4">4°</option>
                      <option value="5">5°</option>
                      <option value="6">6°</option>
                      <option value="7">7°</option>
                      <option value="8">8°</option>
                      <option value="11">9°</option>
                      <option value="10">10°</option>
                      <option value="11">11°</option>
                    </select>
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="text-[#202124] font-medium mb-2">
                      Teléfono
                    </label>
                    <input
                      type="number"
                      className="border border-gray-200 rounded-md px-4 py-2"
                      placeholder="Digite su teléfono"
                      required
                      onChange={(event) => setPhone(event.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="text-[#202124] font-medium mb-2">
                      Dirección
                    </label>
                    <input
                      type="text"
                      required
                      className="border border-gray-200 rounded-md px-4 py-2"
                      placeholder="Digite su dirección"
                      onChange={(event) => setAddress(event.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="text-[#202124] font-medium mb-2">
                      Fecha de nacimiento
                    </label>
                    <input
                      type="date"
                      required
                      className="border border-gray-200 rounded-md px-4 py-2"
                      onChange={(event) => setBornDate(event.target.value)}
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="text-[#202124] font-medium mb-2">
                      Identificación
                    </label>
                    <input
                      type="number"
                      required
                      className="border border-gray-200 rounded-md px-4 py-2"
                      placeholder="Digite su identificación"
                      onChange={(event) =>
                        setIdentification(event.target.value)
                      }
                    />
                  </div>
                  <div className="flex flex-col mt-3">
                    <label className="text-[#202124] font-medium mb-2">
                      Tipo de identificación
                    </label>
                    <select
                      className="border border-gray-200 rounded-md px-4 py-2"
                      required
                      onChange={(event) =>
                        setTypeIdentification(event.target.value)
                      }
                    >
                      <option value="CC">Cédula de ciudadanía</option>
                      <option value="TI">Tarjeta de identidad</option>
                      <option value="CE">Cédula de extranjería</option>
                      <option value="RC">Registro civil</option>
                    </select>
                  </div>
                  <div className="flex justify-center gap-10 items-center mt-8 w-full pb-6">
                    <button
                      className="bg-[#fabd04] text-[#202124] py-3 px-8 rounded-lg font-medium uppercase"
                      type="submit"
                    >
                      Crear
                    </button>

                    <button
                      className="bg-[#202124] text-white  py-3 px-8 rounded-lg font-medium uppercase"
                      onClick={() => setActive(false)}
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </Slide>
          </div>
        </section>
      )}
    </>
  );
};
