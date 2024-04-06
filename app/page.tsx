import ChatInput from "@/components/ui/ChatInput";
import Header from "@/components/ui/Header";
import { Input } from "@/components/ui/input";
import InitUser from "@/lib/store/InitUser";
import { createClient } from "@/utils/supabase/server";
import React from "react";

export default async function Page() {
  const supabase = createClient();

  const { data } = await supabase.auth.getUser();

  console.log(data?.user);

  return (
    <>
      <div className="max-w-3xl mx-auto md:py-10 h-screen">
        <div className="h-full border rounded-md flex flex-col">
          <Header user={data?.user} />
          <div className="flex-1 flex flex-col p-5 h-full overflow-y-auto">
            <div className="flex-1"></div>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((value, index) => {
                return (
                  <div className="flex gap-2" key={index}>
                    <div className="h-10 w-10 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h1 className="font-bold">Rohit</h1>
                        <h1 className="text-sm text-gray-400">
                          {new Date().toDateString()}
                        </h1>
                      </div>
                      <p className="text-gray-300 font-light">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Impedit dolorem sit distinctio quidem expedita
                        quibusdam? Repellendus quibusdam deleniti, obcaecati in
                        voluptate odit soluta molestiae nemo consequatur quidem
                        delectus nostrum non.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <ChatInput />
        </div>
      </div>
      <InitUser user={data?.user} />
    </>
  );
}
