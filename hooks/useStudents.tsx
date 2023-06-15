import { useEffect, useState } from "react";
import { getStudentsF, createStudent } from "@/redux/actions/studentsActions";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";

export const useStudents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getStudents = async () => {
      dispatch(await getStudentsF());
    };
    getStudents();
  }, [dispatch]);

  const { students } = useSelector((state: any) => state.students);

  return { students };
};

export const useFormStudent = (setActive?: any) => {
  const dispatch = useDispatch();

  const [names, setNames] = useState<string>("");
  const [lastnames, setLastnames] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [grade, setGrade] = useState<string>("1");
  const [role, setRole] = useState<string>("student");
  const [bornDate, setBornDate] = useState<string>("");
  const [identification, setIdentification] = useState<string>("");
  const [typeIdentification, setTypeIdentification] = useState<string>("CC");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const student = {
      names,
      lastnames,
      email,
      password,
      phone,
      address,
      grade,
      role,
      bornDate,
      identification,
      typeIdentification,
    };

    const answer = dispatch(await createStudent(student));
    if (answer) {
      toast.success(answer.message);
      dispatch(await getStudentsF());
      setActive(false);
    }
  };

  return {
    handleSubmit,
    names,
    setNames,
    lastnames,
    setLastnames,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    address,
    setAddress,
    grade,
    setGrade,
    role,
    setRole,
    bornDate,
    setBornDate,
    identification,
    setIdentification,
    typeIdentification,
    setTypeIdentification,
  };
};
