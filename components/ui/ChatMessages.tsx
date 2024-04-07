import React, { Suspense } from "react";
import ListMessages from "./ListMessages";
import { createClient } from "@/utils/supabase/server";
import InitMessages from "@/lib/store/InitMessages";
import { Imessage } from "@/lib/store/messages";

async function ChatMessages() {
  const supabase = createClient();

  let messagesData: Imessage[] = [];

  const { data, error } = await supabase.from("messages").select("*,users(*)");
  console.log(data);

  return (
    <Suspense fallback={"Loading..."}>
      <ListMessages />
      <InitMessages messages={data || []} />
    </Suspense>
  );
}

export default ChatMessages;
