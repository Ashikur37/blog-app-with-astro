export async function get({ params, request }:any) {
    const base="https://res.cloudinary.com/dxlmkfscm/image/";
    const res=await fetch(base+"/fetch/f_auto/q_auto/c_scale,h_"+params.height+",w_"+params.width+"/"+base+params.image+".jpg");
    const blob= await res.blob();
      return new Response(blob, { status: 200, });
      //  return new Response(`${base}/fetch/f_auto/q_auto/c_scale,h_${params.height},w_${params.width}/${base}${params.image}.jpg`, { status: 200, });

      // return new

  }

  ///upload/v1673790646/images/mnahr2gh67etsitulzaw


  //https://res.cloudinary.com/dxlmkfscm/image/fetch/f_auto/q_auto/c_scale,h_500,w_500/https://res.cloudinary.com/dxlmkfscm/image/upload/v1673790646/images/mnahr2gh67etsitulzaw.jpg
  //https://res.cloudinary.com/dxlmkfscm/image/fetch/f_auto/q_auto/c_scale,h_500,w_500/https://res.cloudinary.com/dxlmkfscm/image/upload/v1673790646/images/mnahr2gh67etsitulzaw.jpg
