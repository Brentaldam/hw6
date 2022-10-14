const bodyNodes = () => {
//return document.body.querySelectorAll('*');

document.body.childNodes.forEach(node => {
 console.log(node);
 
});

}

const nodes = bodyNodes();


