import ChatInput from "@/components/ui/ChatInput";
import ChatMessages from "@/components/ui/ChatMessages";
import Header from "@/components/ui/Header";
import ListMessages from "@/components/ui/ListMessages";
import { Input } from "@/components/ui/input";
import InitUser from "@/lib/store/InitUser";
import { createClient } from "@/utils/supabase/server";
import React from "react";

export default async function Page() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  return (
    <>
      <div className="max-w-3xl mx-auto md:py-10 h-screen">
        <div className="h-full border rounded-md flex flex-col">
          <Header user={data?.user} />
          <ChatMessages />
          <ChatInput />
        </div>
      </div>
      <InitUser user={data?.user} />
    </>
  );
}
