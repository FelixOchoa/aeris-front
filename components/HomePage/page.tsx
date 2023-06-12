import Image from "next/image";
import Link from "next/link";
import useScroll from "@/hooks/useScroll";
import { Slide, Fade } from "react-awesome-reveal";

export const HomePage = () => {
  const { ref, showAnimation } = useScroll();

  return (
    <main className="bg-[#202124] text-white min-h-screen px-20 pt-20">
      <section className="flex justify-center items-center">
        <Slide triggerOnce>
          <div className="flex flex-col">
            <Fade cascade triggerOnce>
              <p className="text-[#a8a9ac] uppercase">
                ¿Qué es la gestión académica?
              </p>
              <h1 className="text-4xl w-[450px] mt-5">
                Transformando la gestión académica con Aeris
              </h1>
              <p className="text-[#a8a9ac] mt-10 text-sm w-[500px]">
                Aeris revoluciona la gestión académica en instituciones
                educativas con una solución integral y moderna. Simplificamos
                procesos, optimizamos tareas y ofrecemos una experiencia
                eficiente para estudiantes, padres y personal educativo.
                Transformamos la planificación, el seguimiento y la comunicación
                en el entorno educativo con nuestra plataforma innovadora.
              </p>
              <div className="flex gap-10 mt-10">
                <button className="bg-[#fabd04] text-[#202124] py-3 px-8 rounded-sm font-medium uppercase">
                  Ver más
                </button>
                <button className="bg-[#202124] text-white py-3 px-8 rounded-sm font-medium uppercase border-2 hover:bg-white hover:text-[#202124] transition-all ease-in-out">
                  Iniciar sesión
                </button>
              </div>
            </Fade>
          </div>
        </Slide>
        <Slide direction="right">
          <Image
            src="/images/kidHome.png"
            width={500}
            height={500}
            alt="kid"
            quality={100}
            draggable={false}
            sizes="500px"
          />
        </Slide>
      </section>

      <section className="flex flex-col items-center">
        <h1 className="text-4xl mt-24 mb-10" ref={ref}>
          Transformando la gestión académica con Aeris
        </h1>
        {showAnimation && (
          <Slide direction="left" triggerOnce>
            <div
              className={
                showAnimation ? "flex mt-10 pb-10 justify-center" : "hidden"
              }
            >
              <div className="flex flex-col border-2 border-[#a8a9ac] items-center w-[400px] p-10 rounded-l-sm">
                <h2 className="text-2xl">Gestión de estudiantes</h2>
                <p className="text-[#a8a9ac] mt-5 text-sm">
                  Aeris simplifica la gestión de estudiantes al organizar de
                  manera eficiente la información personal, seguimiento
                  académico y generación de informes. Con Aeris, el seguimiento
                  del progreso y el rendimiento académico se vuelve más fácil y
                  efectivo.
                </p>
                <Link
                  href="/platform"
                  className="self-start pt-4 uppercase underline underline-offset-8"
                >
                  Leer más
                </Link>
              </div>
              <div className="flex flex-col border-2 border-[#a8a9ac] border-l-0 border-r-0 items-center w-[400px] p-10 relative">
                <h2 className="text-2xl">Gestión de materias</h2>
                <p className="text-[#a8a9ac] mt-5 text-sm">
                  La gestión de materias en Aeris simplifica la administración y
                  organización de las asignaturas académicas. Con Aeris, puedes
                  gestionar de manera eficiente la información, horarios y
                  asignación de docentes para cada materia. Mejora la
                  planificación y organización académica en tu institución
                  educativa con Aeris.
                </p>

                <Link
                  href="/platform"
                  className="self-start pt-4 uppercase underline underline-offset-8"
                >
                  Leer más
                </Link>
              </div>
              <div className="flex flex-col border-2 border-[#a8a9ac] items-center w-[400px] p-10 rounded-r-sm">
                <h2 className="text-2xl">Gestión de notas</h2>
                <p className="text-[#a8a9ac] mt-5 text-sm">
                  La gestión de notas en Aeris simplifica el registro, cálculo y
                  seguimiento de las calificaciones de los estudiantes. Con
                  Aeris, puedes gestionar eficientemente las notas, generar
                  informes detallados y tener un seguimiento actualizado del
                  desempeño académico. Optimiza la gestión de notas en tu
                  institución educativa con Aeris.
                </p>
                <Link
                  href="/platform"
                  className="self-start pt-4 uppercase underline underline-offset-8"
                >
                  Leer más
                </Link>
              </div>
            </div>
          </Slide>
        )}
      </section>
    </main>
  );
};
