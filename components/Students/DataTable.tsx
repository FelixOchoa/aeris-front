type StudentsProps = {
  students: {
    id: number;
    names: string;
    lastnames: string;
    email: string;
    identification: string;
    grade: string;
    phone: string;
    born_date: string;
  }[];
};

export const DataTable = ({ students }: StudentsProps) => {
  return (
    <>
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Nombres
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Apellidos
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Correo
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Identificación
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Grado
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Teléfono
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Fecha de nacimiento
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Editar</span>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {students.map((student) => (
            <tr key={student.id}>
              <td className="px-6 py-4 whitespace-nowrap">{student.names}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {student.lastnames}
              </td>
              <td className="px-6 py-4 whitespace-nowrap font-semibold">
                {student.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {student.identification}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="inline-flex items-center gap-1 rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-gray-900">
                  {student.grade}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{student.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {student.born_date}
              </td>
              <td className="pr-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 rounded-full bg-[#fabd04] text-black hover:text-gray-900 px-2 py-1 text-xs font-semibold"
                >
                  Editar
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
