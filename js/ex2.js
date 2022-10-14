//Complete code for the following function
//Display text for 400 level courses
const displayText400 = () => {
    var d = Array.from(document.getElementsByClassName("400level"));
    var s =[]
    d.forEach(element =>{
      s += element.textContent + '\n';
    })
    return s;
}
const dis = displayText400();
console.log(dis);