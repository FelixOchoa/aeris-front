"use client";
import { Provider } from "react-redux";
import { NavController } from "@/components/Navigation/NavController";
import store from "./store";

const ProviderRX = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Provider store={store}>
        <NavController />
        {children}
      </Provider>
    </>
  );
};

export default ProviderRX;
