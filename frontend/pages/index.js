import logo from "../assets/imgs/logo.png";
import Layout from "../components/Layout";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [effect, setEffect] = useState(false);
  return (
    <div>
      <Layout>
        <section className="h-[35rem] w-full flex justify-center relative items-center">
          <button
            class="relative inline-flex z-10 mt-24  items-center justify-center 
          p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg
           group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300
            group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-800"
          >
            <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Connect with MetaMask
            </span>
          </button>
          <div className="w-full h-full absolute">
            <img
              className="w-full h-full object-cover "
              src="https://images.unsplash.com/photo-1488330890490-c291ecf62571?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </section>
      </Layout>
    </div>
  );
}
