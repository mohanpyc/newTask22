function htmlElmstop(){
    let htmlElm=document.getElementById("headerDiv");
    htmlElm.style.backgroundColor="white";
    htmlElm.style.textAlign="left";

    let newBtn=document.createElement("button");
    newBtn.id="newBtn1"
    newBtn.style.padding="10px";
    newBtn.style.margin="10px";
    let newlink=document.createElement("a");
    newlink.textContent="Apply Styles";
    newlink.setAttribute("href","#giveStyles1")


    newBtn.appendChild(newlink)
    htmlElm.appendChild(newBtn);
    
}

function cgStyleHeader(){
    let htmlElm=document.getElementById("headerDiv");
    htmlElm.style.backgroundColor="khaki";
    htmlElm.style.textAlign="center";
    htmlElm.style.color="steelblue";
    htmlElm.style.padding=".7%";
    htmlElm.style.fontFamily="'Montserrat', sans-serif";
    let newBtn=document.getElementById("newBtn1");
    newBtn.style.backgroundColor="red";
    if(htmlElm.parentNode){
        htmlElm.removeChild(htmlElm.lastChild)
    }
   

}



