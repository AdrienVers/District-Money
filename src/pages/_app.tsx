import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/AllPages/Navbar";
import Footer from "../components/AllPages/Footer";
import { AuthContextProvider } from "../context/AuthContext";
import { useRouter } from "next/router";
import ProtectedPage from "../components/AllPages/ProtectedPage";
import HomeNews from "../components/Home/HomeNews";

const noAuthRequired = [
  "/",
  "/bourse",
  "/investment",
  "/lexique",
  "/secteurs",
  "/login",
  "/signup",
];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      <Navbar />
      <HomeNews />
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedPage>
          <Component {...pageProps} />
        </ProtectedPage>
      )}
      <Footer />
    </AuthContextProvider>
  );
}
