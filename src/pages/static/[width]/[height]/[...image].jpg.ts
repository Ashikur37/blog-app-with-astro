function x() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('done!');

    },7000);
  });
}

export async function get({ params, request }:any) {
    const base="https://res.cloudinary.com/dxlmkfscm/image/";
    const res=await fetch(base+"/fetch/f_auto/q_auto/c_scale,h_"+params.height+",w_"+params.width+"/"+base+params.image+".jpg");
    const blob= await res.blob();
    const result = await x();
    // setTimeout(function(){
      return new Response(blob, { status: 200,headers:{
        "Cache-Control": "public, max-age=86400, stale-while-revalidate=604800",
        "content-type": "image/jpeg"
      }  });
    // },5000)
     
      //  return new Response(`${base}/fetch/f_auto/q_auto/c_scale,h_${params.height},w_${params.width}/${base}${params.image}.jpg`, { status: 200, });

      // return new

  }

  ///upload/v1673790646/images/mnahr2gh67etsitulzaw


  //https://res.cloudinary.com/dxlmkfscm/image/fetch/f_auto/q_auto/c_scale,h_500,w_500/https://res.cloudinary.com/dxlmkfscm/image/upload/v1673790646/images/mnahr2gh67etsitulzaw.jpg
  //https://res.cloudinary.com/dxlmkfscm/image/fetch/f_auto/q_auto/c_scale,h_500,w_500/https://res.cloudinary.com/dxlmkfscm/image/upload/v1673790646/images/mnahr2gh67etsitulzaw.jpg
