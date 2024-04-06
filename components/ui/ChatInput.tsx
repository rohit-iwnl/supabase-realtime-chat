"use client";
import React from "react";
import { Input } from "./input";
import { supabaseBrowser } from "@/utils/supabase/client";
import { toast } from "sonner";

function ChatInput() {
  const supabase = supabaseBrowser();

  const handleSendMessage = async (message: string) => {
    await supabase
      .from("messages")
      .insert({ text: message })
      .then((response) => {
        if (response.error) {
          toast.error(response.error.message);
        }
      });
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
