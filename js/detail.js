import { renderDetailPage,renderNotFoundPage } from "./ui.js"

const params =  new URLSearchParams(window.location.search)
const id = parseInt (params.get("id"))

//ürün detayının aktarılacağı html
const outlet = document.getElementById('outlet')
//sayfa yüklendiğnde çalışacak fonksiyon

document.addEventListener("DOMContentLoaded",async () =>{
    // db json a istek at
    const res = await fetch('../db.json')
    const data = await res.json()//veriler js nesnesine çevrildi
   const product = data.menu.find((item) => item.id === id)

   //eğer ürün yoksa ürün bulunamadı sayfasına git
   if(!product) {
 ///  ürün bulunamadı içeriğini render et
 renderNotFoundPage(outlet)
   } else{

 renderDetailPage(product,outlet)
   }
})

