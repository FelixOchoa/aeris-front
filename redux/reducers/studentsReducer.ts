const initialState = {
  students: [],
};

const studentsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "GET_STUDENTS":
      return {
        ...state,
        students: action.payload.students,
      };
    case "CREATE_STUDENT":
      return {
        ...state,
        students: [...state.students, action.payload.student],
      };

    default:
      return state;
  }
};

export default studentsReducer;
