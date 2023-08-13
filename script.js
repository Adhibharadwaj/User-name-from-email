const button = document.getElementById("btn");
const emailInput = document.getElementById("usr");

button.addEventListener('click', () => {
    const userEmail = emailInput.value;
    // console.log(userEmail);


function getUserNameFromEmail(userEmail){
    return userEmail.slice (0,userEmail.indexOf("@"));
}
console.log(getUserNameFromEmail(userEmail));
});