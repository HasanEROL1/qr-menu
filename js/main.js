import { fetchMenu } from "./api.js";
import { renderCards } from "./ui.js";

//sayfa yüklenmesi

document.addEventListener("DOMContentLoaded",async () =>{
    const data = await fetchMenu()
    // db jsondan alınan veriler ekrana render edildi
    renderCards(data.menu)
   // input elemanlarına eriş
  const inputs = document.querySelectorAll("#buttons input")

  inputs.forEach((input) => {
    input.addEventListener("change",
() => {
    const selected = input.id

    //eğer hepsi seçiliyse tüm ürünleri render et
    if(selected === "all") {
        renderCards(data.menu)
    } else {
        //ilgili category ürünlerini filtrele
        const filtered =data.menu.filter((item)=> item.category == selected)
        // hepsi seçili değilse ilgili category render et
        renderCards(filtered)
    }
}  )
})
})
