document.getElementById("clicked").addEventListener("click",myFunction)
function myFunction(event){
    event.preventDefault()
    //const l = document.getElementById("fname")
    
    //localStorage.setItem(`Name is ${document.getElementById("fname").value}`)
    //console.log(localStorage.getItem('fname'));
    console.log(`Name is ${document.getElementById("fname").value}`)
    console.log(`Email is ${document.getElementById("email").value}`)
    console.log(`Phone Number is ${document.getElementById("phone").value}`)
    console.log(`Time set for call is ${document.getElementById("birthdaytime").value}`)


}

