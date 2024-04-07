"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { supabaseBrowser } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

function Header({ user }: { user: User | null }) {
  const router = useRouter();

  const handleLoginWithGithub = () => {
    const supabase = supabaseBrowser();
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: location.origin + "/auth/callback",
      },
    });
  };

  const handleLogoutWithGithub = async () => {
    const supabase = supabaseBrowser();
    await supabase.auth.signOut();
    router.refresh();
  };

  return (
    <div className="h-20">
      <div className="p-5 border-b flex items-center justify-between h-full">
        <div>
          <h1 className="text-xl font-bold">Daily Chat</h1>
          <div className="flex items-center flex-row gap-2 ">
            <div className="h-4 w-4 bg-green-500 animate-pulse rounded-full" />
            <h2 className="text-sm text-gray-400">2 online</h2>
          </div>
        </div>
        {user ? (
          <Button onClick={handleLogoutWithGithub}>Logout</Button>
        ) : (
          <Button onClick={handleLoginWithGithub}>Login</Button>
        )}
      </div>
    </div>
  );
}

export default Header;
