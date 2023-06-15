import { StudentService } from "@/services/students/studentService";

export const getStudentsF = async () => {
  try {
    const { code, data } = await StudentService.getStudents();

    if (code === 400) {
      return {
        type: "GET_STUDENTS_ERROR",
        payload: {
          students: [],
        },
      };
    }

    return {
      type: "GET_STUDENTS",
      payload: {
        students: data,
      },
    };
  } catch (error) {
    return {
      type: "GET_STUDENTS_ERROR",
      payload: {
        students: [],
      },
    };
  }
};

export const createStudent = async (student: any) => {
  try {
    const { code, data } = await StudentService.createStudents(student);

    if (code === 400) {
      return {
        type: "CREATE_STUDENT_ERROR",
        payload: {
          student: {},
        },
        message: "Error en los datos: no ha sido posible crear el estudiante.",
      };
    }

    return {
      type: "CREATE_STUDENT",
      payload: {
        student: data,
      },
      message: "Sistema: el estudiante ha sido creado satisfactoriamente.",
    };
  } catch (error) {
    return {
      type: "CREATE_STUDENT_ERROR",
      payload: {
        student: {},
      },
      message: "Error en los datos: no ha sido posible crear el estudiante.",
    };
  }
};
