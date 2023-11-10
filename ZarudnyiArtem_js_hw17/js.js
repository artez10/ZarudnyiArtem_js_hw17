let userName = prompt('What is your name').trim();
userName = userName[0].toUpperCase() + userName.slice(1).toLowerCase();


let userLast = prompt('What is your Surname').trim();
userLast = userLast[0].toUpperCase() + userLast.slice(1).toLowerCase();
console.log(userName,userLast);

let userEmail = prompt('Enter your mail').replaceAll().toLowerCase();
userEmail = (!userEmail.includes('@')) ? `not valid email <b> ${userEmail} </b> (symbol @ not exist)`: 
(userEmail.startsWith('@')) ? `not valid email <b> ${userEmail} </b> (symbol @ found on the first place)`:   
(userEmail.endsWith('@')) ? `not valid email <b> ${userEmail} </b> (symbol @ found on the last place)`:  
`<b> ${userEmail} </b>`;

document.write(userEmail);

dateOfBirth = +prompt('Enter your birthday').replaceAll();
today = new Date();
thisYear = today.getFullYear();
userAge= thisYear - dateOfBirth;

document.write(`<br /> ${userName} ${userLast}`);

if (dateOfBirth>1900 && dateOfBirth<2023) {
document.write(`${userAge}`);
}
else {
    document.write(`<br /> not valid year of birth`)
}
