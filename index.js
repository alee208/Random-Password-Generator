const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = document.getElementById("password1");
let password2 = document.getElementById("password2");
let passwordLength = document.getElementById("password-el");




function generatePassword() {
    randomPassword1();
    randomPassword2();
};


function randomPassword1() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength.value; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        randomPassword += characters[randomIndex];
    }
    password1.textContent = randomPassword;
};

function randomPassword2() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength.value; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        randomPassword += characters[randomIndex];
    }
    password2.textContent = randomPassword;
};


