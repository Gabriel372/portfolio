import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/layout/Layout";
import { useContext } from "react";
import { TstateTheme } from "@/types/Types";
import { MyContext } from "@/context/MyContext";
import { MyContextProvider } from "@/context/MyContext";

export default function App({ Component, pageProps }: AppProps) {
  const {ThemeIsDark} = useContext(MyContext) as TstateTheme ;


  return (
  <MyContextProvider>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </MyContextProvider>
  

  )
  }
