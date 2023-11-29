import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Cards from "@/components/cards";
import Expense from "@/components/expense";
import LastExpensed from "@/components/last_expense";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-full bg-gray-200 h-screen">
      <Navbar />
      <Cards />
      <Expense />
      <LastExpensed />
    </div>
  );
}
