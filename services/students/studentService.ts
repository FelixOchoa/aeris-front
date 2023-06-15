const getStudents = async () => {
  try {
    const response = await fetch(`${process.env.API_AERIS_BACKEND}/students`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

const createStudents = async (student: any) => {
  try {
    const newStudent = {
      ...student,
      born_date: student.bornDate,
      type_identification: student.typeIdentification,
    };
    delete newStudent.bornDate;
    delete newStudent.typeIdentification;

    const response = await fetch(
      `${process.env.API_AERIS_BACKEND}/create-user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newStudent),
      }
    );

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const StudentService = {
  getStudents,
  createStudents,
};
