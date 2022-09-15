let mydetails={
    uname:'arjun',
    age:25,
    email:'xyz@gmail.com',


}
let mydetails_all=JSON.stringify(mydetails);


localStorage.setItem('mydetails',mydetails_alldata);

let mydetails_alldata=JSON.parse(localStorage.getItem('mydetails'));

console.log(mydetails_alldata);