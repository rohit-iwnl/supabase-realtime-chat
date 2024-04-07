import { Imessage } from "@/lib/store/messages";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Message({ message }: { message: Imessage }) {
  console.log(message);
  return (
    <div className="flex gap-2">
      <Link href={`https://github.com/${message.users?.display_name}`}>
        <Image
          className="rounded-full ring-2 hover:ring-4 transition-all ease-in-out transform"
          src={message.users?.avatar_url!}
          alt="Profile Picture"
          width={40}
          height={40}
        />
      </Link>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h1 className="font-bold">{message.users?.display_name}</h1>
          <h1 className="text-sm text-gray-400">
            {new Date(message.created_at).toDateString()}
          </h1>
        </div>
        <p className="text-gray-300 font-light">{message.text}</p>
      </div>
    </div>
  );
}

export default Message;
