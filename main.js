let  cujSources = document.getElementsByClassName("cuj-source")
let jumbotrons = document.getElementsByClassName("jumbotron-main")
console.log(cujSources)
console.log(jumbotrons)

for (i=0;i<cujSources.length;i++) {
    cujSources[i].addEventListener("click",()=>{
        console.log("Event listener added!")
        for (j=1;j<jumbotrons.length;j++) {
            jumbotrons[j].style.display = "none"
        }
    })
}