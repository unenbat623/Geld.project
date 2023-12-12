import axios from "axios";
import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [formUserData, setFormUserData] = useState({
    email: "",
    password: "",
    name:""
  });
 
  const changeFormUserData = (key, value) => {
    setFormUserData({ ...formUserData, [key]: value });
  };


  const login = async () => {
    if (!formUserData.email || !formUserData.password) {
      toast("Email эсвэл Password Заавал бөглөх ёстой");
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:8008/auth/signin", {
        userEmail: formUserData.email,
        userPassword: formUserData.password,
      });
      console.log("DDD++++++>", data.user);
      setUser(data.user);
      router.push("/");
    } catch (error) {
      console.log("error", error);
      toast.error(`${error.response.data.message}`, { autoClose: 3000 });
    }
  };

  const logout = () => {
    setUser(null);
  };

  const signup = async () => {
    if (!formUserData.name || !formUserData.email || !formUserData.password) {
      toast("User эсвэл Email эсвэл Password Заавал бөглөх ёстой");
      return;
    }
    try {
      const { data } = await axios.post("http://localhost:8008/auth/signup", {
        name: formUserData.name,
        email: formUserData.email,
        password: formUserData.password
      });
      console.log("DDD++++++>", data.user);
      setUser(data.user);
      router.push("/step_one");
    } catch (error) {
      console.log("error", error);
      toast.error(`${error.response.data.message}`, { autoClose: 3000 });
    }
    
  };

  return (
    <UserContext.Provider
      value={{
        user,
        formUserData,
        changeFormUserData,
        login,
        logout,
        signup,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;