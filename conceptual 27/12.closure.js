//Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.


//inner function theke ourter function k access korte partesi
//inner function k outer function er bire theke call korte partese.
//different different variable a store kore jai.


function deductLifeCounter(studentName){
    let life = 3; //inner function theke ourter function k access korte partesi

    let lifeDeductExecute = () => {
        if(life >0){ //3number line akhane access korte partesi
            life --;
            console.log(`${studentName}, You lost a life. Life remaining: ${life}`);
        } else {
            console.log(`${studentName}, Your life is over! No life left!`);
        }
    }
    return lifeDeductExecute;
}

const pervez = deductLifeCounter("Pervez");
const ahmed = deductLifeCounter("ahmed");
const sohag = deductLifeCounter("sohag");
const kabir = deductLifeCounter("kabir");
pervez();
pervez();
kabir();
pervez();
pervez();
pervez();
ahmed();
sohag();
sohag();


