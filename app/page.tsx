import { redirect } from "next/navigation";

export default function Page() {
  redirect("/voice");
  return <div></div>;
}
