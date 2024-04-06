"use client";
import React from "react";
import { Input } from "./input";

function ChatInput() {
  const handleSendMessage = (message: string) => {
    alert(message);

    
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
