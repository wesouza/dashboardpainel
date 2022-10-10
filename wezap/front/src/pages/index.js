import { createClient } from "@supabase/supabase-js";
import { useEffect } from "react";

const supabase = createClient(
  "https://ziunwaeqtkedonwflnmp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppdW53YWVxdGtlZG9ud2Zsbm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUzNjYyMzEsImV4cCI6MTk4MDk0MjIzMX0.-Mw9PHUILgRPiHaO-clVRP_3a7C2qixW5bphA6QmssQ"
);

export default function Home() {
  useEffect(() => {
    const mySubscription = supabase
      .from("messages")
      .on("*", (payload) => {
        console.log("Change received!", payload.new);
      })
      .subscribe();
    console.log(mySubscription);
  }, []);
  return (
    <>
      <div>
        <h1>Home</h1>
      </div>
    </>
  );
}
