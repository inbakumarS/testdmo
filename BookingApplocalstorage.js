function saveToLocalStorage(event){
    event.preventDefault();

    const name=event.target.username.value;
    const email=event.target.emailId.value;
    const phonenumber=event.target.phonenumber.value;

   // localStorage.setItem('name',name);
    //localStorage.setItem('email',email);
    //localStorage.setItem('phonenumber',phonenumber);
    const obj={
        name,
        email,
        phonenumber
    }
    localStorage.setItem(obj.email,JSON.stringify(obj));
   showNewUserOnScreen(obj);
}
window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj);

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i];
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showNewUserOnScreen(userDetailsObj);
    }
})
function showNewUserOnScreen(user){
    /*if(localStorage.getItem(user.email)!==null){
       removeUserFromScreen(user.email);
    }*/
    const parentNode=document.getElementById('listofUsers');
    const childHTML=`<li id=${user.email}>${user.name}-${user.email}-${user.phonenumber}
                         <button onclick=deleteUser('${user.email}')>Delete</button>
                         <button onclick=editUserDetails('${user.email}','${user.name}','${user.phonenumber}')>Edit</button>
    </li>`

    parentNode.innerHTML+=childHTML;
}

//edit user
function editUserDetails(emailId,name,phonenumber){
    document.getElementById('email').value = emailId;
    document.getElementById('username').value = name;
    document.getElementById('phonenumber').value = phonenumber;

    deleteUser(emailId);
}

//delete user
function deleteUser(emailId){
    console.log(emailId);
    localStorage.removeItem(emailId);
    removeUserFromScreen(emailId);
}

function removeUserFromScreen(emailId){
    const parentNode=document.getElementById('listofUsers');
    const childNodeToBeDeleted=document.getElementById(emailId);

    parentNode.removeChild(childNodeToBeDeleted);
   
}