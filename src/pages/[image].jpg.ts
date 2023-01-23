export async function get({ params, request }:any) {
  const res=await fetch('https://res.cloudinary.com/dxlmkfscm/image/upload/v1674393390/images/'+params.image+".jpg");
  const blob= await res.blob();
    return new Response(blob, { status: 200, });
}
//https://res.cloudinary.com/dxlmkfscm/image/upload/v1674393390/images/mjplseelncodaqrhoqar.jpg
// 