import type { Metadata } from "next";
import AdminConsole from "@/components/AdminConsole";

export const metadata: Metadata = {
  title: "Quản trị website",
  robots: { index: false, follow: false },
};

export default function AdminPage(){
  return <AdminConsole/>;
}
