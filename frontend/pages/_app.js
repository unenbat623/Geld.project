import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "@/components/context/UserProvider";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
    <Component {...pageProps}/>
    <ToastContainer />
  </UserProvider>
  )
};
