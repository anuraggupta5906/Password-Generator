let password = '';
   const passchar='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*_';
   
function passwordgenerator(passlength) { 
    for(let i = 0 ; i<passlength ; i++)
    {
        password += passchar[Math.floor(Math.random()*passchar.length)];
    }
       return console.log(password);
}
    passwordgenerator(12);
