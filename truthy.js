let data; 
data = 0;
data = "";
data = "0";
data = ' ';
data = false;
data = true;
data = null;
data = undefined;
data = {};
data = [];
if(data){
    console.log("truthy");
} else {
    console.log("falsy");
}

let price ;
price = 0;
if(!price){ //man k ultai dite use kora hoi.
    console.log("price is falsy");
}

let value = 0;
if(!!value){  // !! ata dara kono man er value boolean kora bujhai.
    console.log("truthy");
}
