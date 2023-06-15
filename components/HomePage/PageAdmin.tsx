import Link from "next/link";

export default function HomePageAdmin() {
  return (
    <main className="p-8">
      <section className="w-full flex flex-row justify-between">
        <div className="bg-gradient-to-r from-rose-100 to-teal-100 w-80 h-36 rounded-2xl shadow-md p-6">
          <h2 className="text-xs font-bold">
            Estudiantes registrados en el sistema:
          </h2>
          <div className="flex flex-row w-full justify-between items-center pt-[60px] font-semibold">
            <p className="text-xl">Estudiantes: 10</p>
            <Link
              href="/students"
              className="text-xs underline text-gray-500 font-semibold"
            >
              Ver estudiantes
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-r from-rose-100 to-teal-100 w-80 h-36 rounded-2xl shadow-md p-6">
          <h2 className="text-xs font-bold">
            Estudiantes registrados en el sistema:
          </h2>
          <div className="flex flex-row w-full justify-between items-center pt-[60px] font-semibold">
            <p className="text-xl">Estudiantes: 10</p>
            <Link
              href="/students"
              className="text-xs underline text-gray-500 font-semibold"
            >
              Ver estudiantes
            </Link>
          </div>
        </div>
        <div className="bg-gradient-to-r from-rose-100 to-teal-100 w-80 h-36 rounded-2xl shadow-md p-6">
          <h2 className="text-xs font-bold">
            Estudiantes registrados en el sistema:
          </h2>
          <div className="flex flex-row w-full justify-between items-center pt-[60px] font-semibold">
            <p className="text-xl">Estudiantes: 10</p>
            <Link
              href="/students"
              className="text-xs underline text-gray-500 font-semibold"
            >
              Ver estudiantes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
