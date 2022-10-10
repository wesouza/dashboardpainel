const { Router } = require("express");
const { createClient } = require("@supabase/supabase-js");

const express = require("express");
const app = express();
const route = express.Router();

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://ziunwaeqtkedonwflnmp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppdW53YWVxdGtlZG9ud2Zsbm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjUzNjYyMzEsImV4cCI6MTk4MDk0MjIzMX0.-Mw9PHUILgRPiHaO-clVRP_3a7C2qixW5bphA6QmssQ"
);

app.use(route);

route.get("/", async (req, res) => {
  const mySubscription = supabase
    .from("messages")
    .on("*", (payload) => {
      console.log("Change received!", payload);
    })
    .subscribe();
  console.log(mySubscription);
});

app.listen(3333, () => {
  console.log("start server");
});
