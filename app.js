 let start_box=document.querySelector(".start_box")
 let box2=document.querySelector(".box2")
 let natija=document.querySelector(".natija")
let ism=document.querySelector("#ism")
let familya=document.querySelector("#familya")
let vazn=document.querySelector("#vazn")
let boy=document.querySelector("#boy")
let erkak=document.querySelector(".erkak")
let ayol=document.querySelector(".ayol")


 function start() {
    start_box.style.display="none"
    box2.style.display="flex"
    
 }
 
 function qaytish() {
    start_box.style.display="flex"
    box2.style.display="none"
    
 }
 function tekshirish() {

if(boy.value>=176 && boy.value<=199 && vazn.value>=76 && vazn.value<=100){
    natija.innerHTML=`${erkak.checked ? "Janob" : "Honim" }` +" " + ism.value + " " + familya.value +" "+ "sizning vazningiz narmal"}

 if (boy.value>=176 && boy.value<=199 && vazn.value>100){
    natija.innerHTML=`${erkak.checked ? "Janob" : "Honim" }` +" " + ism.value + " " + familya.value +" "+ "sizda ortiqcha vazn mavjud. sizga sport bilan shug'urlanishni va parhez qilishingizni maslahat beramiz"
}
if(boy.value>=176 && boy.value<=199 && vazn.value<76 ){
    natija.innerHTML=`${erkak.checked ? "Janob" : "Honim" }` +" " + ism.value + " " + familya.value +" "+ "sizning vazningiz bo'yingizga nisbatan oz."}
    if(boy.value>=160 && boy.value<=175 && vazn.value>=60 && vazn.value<=75){
        natija.innerHTML=`${erkak.checked ? "Janob" : "Honim" }` +" " + ism.value + " " + familya.value +" "+ "sizning vazningiz narmal"}
        if (boy.value>=160 && boy.value<=175 && vazn.value>75){
            natija.innerHTML=`${erkak.checked ? "Janob" : "Honim" }` +" " + ism.value + " " + familya.value +" "+ "sizda ortiqcha vazn mavjud. sizga sport bilan shug'urlanishni va parhez qilishingizni maslahat beramiz"
 }
 if(boy.value>=160 && boy.value<=175 && vazn.value<60 ){
    natija.innerHTML=`${erkak.checked ? "Janob" : "Honim" }` +" " + ism.value + " " + familya.value +" "+ "sizning vazningiz bo'yingizga nisbatan oz."}
 
 }