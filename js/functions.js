 let request= new XMLHttpRequest();
 request.open("GET","https://api.nasa.gov/planetary/apod?api_key=rj9ILpja9fPVeaXhnuWdbpDWqVfVUtnb81fB8qqR&count=1");
 let data;
 request.onload=()=>{
    let response=request.response;
     data=JSON.parse(response);
   console.log(data);

    let imgurl=data[0].url;
    let img=document.getElementsByTagName("img")[0];
    img.setAttribute('src',imgurl);
 }
 request.send();


const  api = "https://api.nasa.gov/planetary/apod?api_key=rj9ILpja9fPVeaXhnuWdbpDWqVfVUtnb81fB8qqR&count=1";
let gt;
fetch(api)
.then(data=> data.json())
.then(res=>{gt =res});
console.log(gt);