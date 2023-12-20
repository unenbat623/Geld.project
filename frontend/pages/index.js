import { Inter } from "next/font/google";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { FaBeer, FaHome } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Cards from "@/components/Cards";
import Expense from "@/components/Expense";
import LastExpensed from "@/components/Last_expense";
import { UserContext } from "@/context/UserProvider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { user, logout } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user]);

  if (!user) {
    return null;
  }

  const getIcons = (name, color) => {
    const icons = {
      beer: <FaBeer size={90} color={color} />,
      home: <FaHome size={90} color={color} />,
    };
    return icons[name];
  };
  return (
    <div className="w-full bg-gray-200">
      <Navbar />
      <Cards />
      <Expense />
      <LastExpensed />
    </div>
  );
}
