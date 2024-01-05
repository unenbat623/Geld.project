import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "../UserProvider";
import myAxios from "@/utils/axios";
import { toast } from "react-toastify";

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [transactionData, setTransactionData] = useState({
    name: "huushuur",
    amount: 10000,
    transaction_type: "EXP",
    description: "this is a food with friend",
    category_id: "",
    updated_at: "2023-17-15T16:14",
  });

  const [transactions, setTransactions] = useState([]);
  const [reFetch, setReFetch] = useState(false);

  const changeTransactionData = (key, value) => {
    setTransactionData({ ...transactionData, [key]: value });
  };

  const addTransaction = async () => {
    console.log("DATA", transactionData);
    console.log("USER", user.id);
    try {
      const { data } = await myAxios.post("/transactions/", {
        ...transactionData,
        user_id: "2937eddf-a325-408e-be3c-14bc8c9707a8",
      });
      console.log("FF", data);
      setReFetch(!reFetch);
      toast.success("Гүйлгээг амжилттай нэмлээ.");
    } catch (error) {
      console.log("error", error);
      toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  const getTransaction = async () => {
    console.log("WORKING");
    try {
      const {
        data: { transactions },
      } = await myAxios.get("/auth/getTransaction/");
      console.log("TRA");
      toast.success("Гүйлгээнүүдийг амжилттай татлаа.");
      setTransactions(transactions);
    } catch (error) {
      console.log("TER", error);
    }
  };

  useEffect(() => {
    console.log("TCT");
    getTransaction();
  }, [reFetch]);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        transactionData,
        changeTransactionData,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
