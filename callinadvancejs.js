//call
let value={num:5};

var addingValue=function(a,b){
    return this.num+a+b;
}

console.log(addingValue.call(value,3,5));

//apply
let value1={num:5};

var addingValue=function(a,b){
    return this.num+a+b;
}

var arr=[2,4,3];
console.log(addingValue.apply(value1,arr));

//bind
var value2={num:2};

var addingValue=function(a,b,c){
    return this.num+a+b+c;
}
//var arr1=[2,4,3];
let bound=addingValue.bind(value2);
console.log(bound(1,2,4));


let student={
    age:20,
};

var studentAge=function(){
    return this.age+'is my age ';
}

let bound1=studentAge.bind(student);
console.log(bound1());