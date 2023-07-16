import Head from "next/head";
import Link from "next/link";
import Profile from "../components/atomic/templates/Profile";
import Header from "../components/atomic/templates/ToggleBtn";
import { Layout } from "../components/Layout";

export default function PageProfile() {
  return (
    <Layout title="Profile">
      <Profile />
    </Layout>
  );
}
