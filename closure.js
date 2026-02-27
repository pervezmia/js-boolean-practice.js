//closure holo innerFunction tar outer Function er variable gulo mone rakhte pare and use korte pare.

function outerFunction() {
    let count = 0;
    function innerFunction() {
        console.log("count is", count++);
        // console.log("this is a important thing in js that name is closure.");
    }
    return innerFunction;
}

console.log(outerFunction());
const result = outerFunction();
result ();
result ();
result ();
result ();
