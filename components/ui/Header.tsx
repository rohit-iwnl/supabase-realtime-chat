"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { supabaseBrowser } from "@/utils/supabase/client";

function Header() {
  const handleLoginWithGithub = () => {
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
  };
  return (
    <div className="p-5 border-b flex items-center justify-between">
      <div>
        <h1 className="text-xl font-bold">Daily Chat</h1>
        <div className="flex items-center flex-row gap-2 ">
          <div className="h-4 w-4 bg-green-500 animate-pulse rounded-full" />
          <h2 className="text-sm text-gray-400">2 online</h2>
        </div>
      </div>
      <Button onClick={handleLoginWithGithub}>Login</Button>
    </div>
  );
}

export default Header;
