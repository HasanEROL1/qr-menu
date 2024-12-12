//db json dan veri alma
export const fetchMenu = async () =>{
    //fetch ile db json dan veri alındı
    const res = await fetch ("../db.json")
    //veriler js e göre çevrildi
    const data = await res.json()
    
    return data
}