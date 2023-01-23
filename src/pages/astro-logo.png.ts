export async function get({ params, request }:any) {
  const res=await fetch('https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg');
  const blob= await res.blob();
  // let objectURL = URL.createObjectURL(blob);
      return {
      body: blob,
      encoding: 'binary',
    };
//   fetch('https://upload.wikimedia.org/wikipedia/commons/7/77/Delete_key1.jpg')
//   .then(res => res.blob()) // Gets the response and returns it as a blob
//   .then(blob => {
//     // Here's where you get access to the blob
//     // And you can use it for whatever you want
//     // Like calling ref().put(blob)

//     // Here, I use it to make an image appear on the page
//     // let objectURL = URL.createObjectURL(blob);
//     // let myImage = new Image();
//     // myImage.src = objectURL;
//     // document.getElementById('myImg').appendChild(myImage)
//     return {
//       body: "blob",
//       // encoding: 'binary',
//     };
// });




}