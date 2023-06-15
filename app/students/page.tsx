"use client";
import { useStudents } from "@/hooks/useStudents";
import { useState } from "react";
import { DataTable } from "@/components/Students/DataTable";
import { Modal } from "@/components/Students/Modal";
import { Toaster } from "react-hot-toast";

export default function Students() {
  const { students } = useStudents();
  const [active, setActive] = useState<boolean>(false);

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <Modal active={active} setActive={setActive} />
      <main className="p-8">
        <section className="flex flex-row justify-between items-center">
          <h1 className="text-2xl font-semibold">Estudiantes</h1>
          <button
            className="bg-[#fabd04] text-[#202124] py-3 px-8 rounded-lg font-medium uppercase"
            onClick={() => setActive(true)}
          >
            Crear estudiante
          </button>
        </section>
        <section className="mt-8 rounded-lg border border-gray-200 shadow-md max-lg:overflow-scroll">
          <DataTable students={students} />
        </section>
      </main>
    </>
  );
}
