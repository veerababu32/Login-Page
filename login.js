let emailNode=document.getElementById("email");
let passNode=document.getElementById("pass");
let tdNode1=document.getElementById("error1");
let tdNode2=document.getElementById("error2");
let tdNode3=document.getElementById("error3")

let newObject = [{
    email: "mailto:chandu@gmail.com",
    password: "Chandu@123"
}, {
    email: "mailto:sena@gmail.com",
    password: "Sena@123"
}]


function validate1(){
    tdNode1.textContent="";
    let emailId=emailNode.value;
    let exp=emailId.substring(emailId.indexOf('@')+1);
    console.log(exp);
    if(emailId==''){
        tdNode1.textContent="*this field is required";
        return false;
    }
    else if(!emailId.includes('@') || exp==''){
        tdNode1.textContent="*Please put valid email id";
        return false;
    }
    else{
        return true;
    }
}

function validate2(){
    tdNode2.textContent="";
    let password=passNode.value;
    let regExp=new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    console.log(regExp.test(password));
    if(password==''){
        tdNode2.textContent="*this field is required";
        passNode.style.border=border1;
        return false;
    }
    else if(regExp.test(password)==false){
        let spanNode=document.createElement("span");
        spanNode.textContent="the password should contain atleast one";
        let ulnode=document.createElement("ul");
        let linode1=document.createElement("li");
        linode1.textContent="Capital letter";
        let linode2=document.createElement("li");
        linode2.textContent="Small Letter";
        let linode3=document.createElement("li");
        linode3.textContent="Digit";
        let linode4=document.createElement("li");
        linode4.textContent="Special Symbol";
        ulnode.append(linode1,linode2,linode3,linode4);
        tdNode2.append(spanNode,ulnode);
        return false;
    }
    else if(password.length<8 || password.length>15){
        tdNode2.textContent="*Password should be atleast 5 and atmost 12 characters long";
        return false;
    }
    else{
        return true;
    }
}

function validateForm(){
    let st1=validate1();
    let st2=validate2();
    if (s1 && s2) {
        s3 = check_total()
    }
    return s1 && s2 && s3
}

function check_total() {
    err.textContent = ""
    let checkval = storeobj.some(each => each.email == emailele.value && each.password == passele.value)
    if (checkval) {
        return true
    } else {
        err.textContent = "Email or Password is incorrect"
        return false
    }
}

function check_mail_pass() {
    let newval = storeobj.some(each => each.email == emailele.value && each.password == passele.value)
    if (check.checked && newval) {
        newObj = {
            email: emailele.value,
            password: passele.value
        }
    }
}

function on_submiting() {
    localStorage.setItem("setObj", JSON.stringify(newObj))
}

let h1 = localStorage.getItem("setObj")
let p1 = JSON.parse(h1)
let oops = storeobj.some(each => each.email == emailele.value && each.password == passele.value)
console.log(p1)
emailele.value = p1.email;
passele.value = p1.password