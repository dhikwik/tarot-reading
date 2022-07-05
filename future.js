function tarot(opt){
   
    var out;
    if(opt == "1"){
        out =  `No Way..You are a donkey`;
    } 
    if(opt == "2"){
        out = `You are lucky.It will happen`;
    }
    if(opt == "3"){
        out = `Not a chance`;
    }
    if(opt == "4"){
        out = `Absolutely Dreams will come true`;
    }
    if(opt == "5"){
        out = `Most likely to happen if you try`;
    }
    if(opt == "6"){
        out = `Not in this life`;
    }
    document.getElementById("output").innerText=out
}