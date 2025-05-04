const passbox=document.getElementById("passbox");
const inputslider=document.getElementById("inputslider")

const slidervalue=document.getElementById("slidervalue")
const Lowercase=document.getElementById("Lowercase")
const Uppercase=document.getElementById("Uppercase")
const Number=document.getElementById("Number")
const Symbol=document.getElementById("Symbol")
const genearatebtn=document.getElementById("generate_pass")
const copyicon=document.getElementById('content_copy');

//showing input slider
slidervalue.textContent=inputslider.value
inputslider.addEventListener('input',()=>{
    slidervalue.textContent=inputslider.value
})

genearatebtn.addEventListener('click',()=>{
    passbox.value=genearatebtnpass();
})

//function to genrate paasowrd
let numbers='0123456789'
let symbol='~$!@#%^&*?/'
let lowechars='abcdefghijklmnopqrstuvwxyz';
let uppercase ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function genearatebtnpass(){
    let genpssword="";
    let allchars="";
    allchars+=Lowercase.checked ? lowechars : "";
    allchars+=Uppercase.checked ? uppercase : "";
    allchars+=Number.checked ? numbers : "";
    allchars+=Symbol.checked ? symbol : "";
    if(allchars==="" || allchars.length==0){
        return genpssword;
    }
    let i=1;
    while(i<=inputslider.value){
        genpssword += allchars.charAt(Math.floor(Math.random()*allchars.length));
        i++;
    }
    return genpssword;
}

copyicon.addEventListener('click',()=>{
    if(passbox.value!=="" || passbox.value.length>=1){
  navigator.clipboard.writeText(passbox.value);
  copyicon.innerText="check"
copyicon.title="Password Copied"
setTimeout(()=>{
    copyicon.innerHTML="content_copy"
    copyicon.title="";
  },3000)
    }
})