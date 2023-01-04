let count=0;
let button=document.getElementById('increment-btn');
let count_el=document.getElementById('count-el');
let save_btn=document.getElementById("save-btn");
let prev_entries=document.getElementById("prev-entries");

button.addEventListener('click',function increment(){
    count++;
    count_el.innerHTML=count;
})
save_btn.addEventListener('click',function prev(){
    prev_entries.innerHTML+= count +" " + "-"+" ";
    count=0;
    count_el.innerHTML=count;
})