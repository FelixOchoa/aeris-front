import { useEffect, useState } from "react";
import { getCurrentUser } from "@/redux/actions/authActions";
import { useDispatch } from "react-redux";

const useAuth = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    const { payload } = dispatch(getCurrentUser());
    setUser(payload);
  }, [dispatch]);

  return { user };
};

export default useAuth;
