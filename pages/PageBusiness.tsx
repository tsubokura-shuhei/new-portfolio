import Head from "next/head";
import Link from "next/link";
import { Layout } from "../components/Layout";
import Header from "../components/atomic/templates/Header";

export default function PageBusiness() {
  return (
    <div>
      <Header />
      <Layout>
        <h1>ビジネスページ</h1>
        <Link href="/">HOME</Link>
      </Layout>
    </div>
  );
}
