function styleP(){
    var s=document.getElementsByTagName('p');
    for(i=0;i<s.length;i++)
    {
        s[i].setAttribute("style","background-color: yellow");
        s[i].style.fontWeight = "bold";
    }
}


styleP();
