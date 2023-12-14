import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "@/context/UserProvider";
import { ThemeProvider } from "@/context/Theme";
import {StepProvider} from "@/context/stepContext"

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
    <ThemeProvider>
      <StepProvider>
        <Component {...pageProps} />
        <ToastContainer />
      </StepProvider>
    </ThemeProvider>
  </UserProvider>
  )
};
