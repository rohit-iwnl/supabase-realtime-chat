"use client";
import React from "react";
import { Input } from "./input";
import { supabaseBrowser } from "@/utils/supabase/client";

function ChatInput() {
  const supabase = supabaseBrowser();

  const handleSendMessage = async (message: string) => {
    alert(message);

    await supabase.from("messages").insert({ text: message });
  };

  return (
    <div className="p-5">
      <Input
        placeholder="Send a message"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSendMessage(e.currentTarget.value);
            e.currentTarget.value = "";
          }
        }}
      />
    </div>
  );
}

export default ChatInput;
