
export async function get({ params, request }:any) {
  const res=await fetch('https://res.cloudinary.com/dxlmkfscm/image/upload/v1674393390/images/'+params.image+".jpg");
  const blob= await res.blob();
  
    return new Response(blob,
      
      {  status: 200,headers:{
      cacheControl:'public, max-age=86400',
      "Cache-Control": "public, max-age=86400",
    "Expires": new Date(Date.now() + 86400000).toUTCString()
    } });
}
//https://res.cloudinary.com/dxlmkfscm/image/upload/v1674393390/images/mjplseelncodaqrhoqar.jpg
// https://res.cloudinary.com/dxlmkfscm/image/upload/v1674393390/images/mjplseelncodaqrhoqar.jpg