import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/Layout";
import Profile from "../components/atomic/templates/Profile";
import Header from "../components/atomic/templates/Header";
import Footer from "../components/atomic/templates/Footer";

export default function PageProfile() {
  return (
    <div>
      <Header />
      <Layout>
        <Profile />
      </Layout>
      <Footer />
    </div>
  );
}
