import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <h1 className="text-4xl">We use two form of pre-rendering here.</h1>
        <div className="mt-10 self-start ml-[275px] text-xl">
          <h4>✔Static rendering</h4>
          <h4>✔Server Side Rendering</h4>
        </div>
      </div>
    </>
  );
}
