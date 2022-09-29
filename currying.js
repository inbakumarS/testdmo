let multiply=function(a,b){
    console.log(a*b);
}

let multipleByTwo=multiply.bind(this,2);
multipleByTwo(5);

let multipleByThree=multiply.bind(this,2);
multipleByThree(7);


let multiply1=function(x){
    return function(y){
        console.log(x*y);
    }
}

let multipleByOne=multiply1(4);
multiplebyone(2);