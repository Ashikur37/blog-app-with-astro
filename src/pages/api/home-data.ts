import { supabase } from "../../../utils/supabase";
function x() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('done!');
  
      },7000);
    });
  }
export async function get({ params, request }:any) {
    const result = await x();
    const {data,errors}:any=await supabase.from('Post') .select("*");

    return new Response(
        JSON.stringify({
            data,errors
        })
        ,{
            status: 200,
            headers: {
              "Content-Type": "application/json"
            }
          }

    )
}