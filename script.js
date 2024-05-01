//your JS code here. If required.
let select =document.getElementById("colorSelect");
    let inputBtn = document.querySelector("input");
    
   // select.addEventListener("change", function selectAndRemove(event_details){
        //let selectedColor = select.options[select.selectedIndex];
        
        inputBtn.addEventListener("click",removeColor);
        function removeColor(){
            select.remove(select.selectedIndex);
        }