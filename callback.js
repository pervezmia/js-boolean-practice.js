// document.getElementById("#btn")
// .addEventListener("click",function(event){  //call back function

// })

function settleLife (name , isBCS, marriage, parti){
    if(isBCS){
        marriage(parti)
    }
}
function boloKobul (parti){
    console.log("Kobul", parti);
}
settleLife("tomal", true, boloKobul, "nari");
// boloKobul("pori");
