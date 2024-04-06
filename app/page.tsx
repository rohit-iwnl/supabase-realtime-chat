import Header from "@/components/ui/Header";
import InitUser from "@/lib/store/initUser";
import { createClient} from "@/utils/supabase/server";
import React from "react";

export default async function Page() {

  const supabase = createClient()

  const {data} = await supabase.auth.getUser();

  console.log(data?.user)

  return (
    <>
    <div className="max-w-3xl mx-auto md:py-10 h-screen">
      <div className="h-full border rounded-md">
        <Header user={data?.user}/>
      </div>
    </div>
    <InitUser user={data?.user} />
    </>
  );
}
