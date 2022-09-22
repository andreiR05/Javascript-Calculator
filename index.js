let buttons = document.querySelectorAll('.button');
let displayButtons = document.querySelectorAll('.display');
let theOperator = document.querySelectorAll('.operator');
let erase = document.querySelector(".btnclear");
let del = document.querySelector('.btndel');
let equal = document.querySelector('.btnequal');
let principalScreen = document.querySelector('.screen2');
let secondScreen = document.querySelector('.screen1');
let steps = document.querySelector('#steps');
let show = document.querySelector('#show');
let stepsShow = document.querySelector('#stepsShow');

let str,position,position1,position2;
let positionFirstParanthesis,positionSecondParanthesis;
let portion,portion2,maxIndex,maxIndex2;
let firstNum ,secondNum,ord;
let thesteps = [];

document.addEventListener('keydown',(e)=>{

    if(e.key == "1"){
     document.querySelector('.btn1').click();
    }
    if(e.key == "2"){
        document.querySelector('.btn2').click();
    }
    if(e.key == "3"){
     document.querySelector('.btn3').click();
    }
    if(e.key == "4"){
     document.querySelector('.btn4').click();
    }
    if(e.key == "5"){
     document.querySelector('.btn5').click();
    }
    if(e.key == "6"){
     document.querySelector('.btn6').click();
    }
    if(e.key == "7"){
     document.querySelector('.btn7').click();
    }
    if(e.key == "8"){
        document.querySelector('.btn8').click();
    }
    if(e.key == "9"){
     document.querySelector('.btn9').click();
    }
    if(e.key == "Enter"){
     document.querySelector('.btnequal').click();
    }
    if(e.key == "Backspace"){
     document.querySelector('.btndel').click();
    }
    if(e.key == "Delete"){
     document.querySelector('.btnclear').click();
    }
    if(e.key == "+"){
        document.querySelector('.btnplus').click();
    }
    if(e.key == "-"){
     document.querySelector('.btnminus').click();
    }    
    if(e.key == "*"){
     document.querySelector('.btnmultiply').click();
    }    
    if(e.key == "/"){
     document.querySelector('.btndivide').click();
    }
    if(e.key == "^"){
    document.querySelector('.btnraise').click();
       }
    if(e.key == "."){
    document.querySelector('.btnpoint').click();
    }
});

buttons.forEach(button => {
    button.addEventListener("click",function(){
        button.classList.add('active');
    });
    setTimeout(button.classList.remove('active'),500);
});

buttons.forEach(button => {
    button.addEventListener("mouseover",function(){
        button.classList.add('active');
    });
});

theOperator.forEach(button =>{
    button.addEventListener("click",function(){
        str = secondScreen.innerText;
        secondScreen.append(button.innerText);
        str[-1] = button.innerText;
        if(str.endsWith('+')||str.endsWith('-')||str.endsWith('/')||str.endsWith('*')||str.endsWith('%')||str.endsWith('^')){
            str = secondScreen.innerText;
            secondScreen.innerText = str.slice(0,str.length-2);
            secondScreen.append(button.innerText);
        }
});
});

buttons.forEach(button => {
    button.addEventListener("mouseleave",function(){
        button.classList.remove('active');
    });
});

del.addEventListener('click',function(){
    str = secondScreen.innerHTML.toString();
    str = str.slice(0,str.length-1);
    secondScreen.innerHTML = str;
});

displayButtons.forEach(button => {
    button.addEventListener("click",function(){
            // if(button.innerText[-1])
            secondScreen.append(button.innerText);
    });
});

erase.addEventListener('click',function(){
    secondScreen.innerHTML="";
})

//functions

function evaluateParanthesis(paranthesisValue){
    while(
        (paranthesisValue.includes("\*"))||
        (paranthesisValue.includes("\/"))||
        (paranthesisValue.includes("\^"))||
        (paranthesisValue.includes("\+"))||
        (paranthesisValue.includes("\-"))||
        (paranthesisValue.includes("\%")))   
    {

    if(paranthesisValue.includes("\^")){
        position = paranthesisValue.indexOf("^") ;
        [firstNum,secondNum,position1,position2] = getNumbers(paranthesisValue,position);
        result = operate(firstNum,secondNum,"^");
        paranthesisValue = paranthesisValue.slice(0,position1 + 1) + result + paranthesisValue.slice(position2+position+1);
        
    }else if(paranthesisValue.includes("\*")){
        position = paranthesisValue.indexOf("*") ;
        [firstNum,secondNum,position1,position2] = getNumbers(paranthesisValue,position);
        result = operate(firstNum,secondNum,"*");
        paranthesisValue = paranthesisValue.slice(0,position1 + 1) + result + paranthesisValue.slice(position2+position+1);
        
    }else if(paranthesisValue.includes("\/")){
        position = paranthesisValue.indexOf("\/") ;
        [firstNum,secondNum,position1,position2] = getNumbers(paranthesisValue,position);
        if(b=0){
            return secondScreen.innerText = "Don't divide by 0!"
        }else{
            result = firstNum/secondNum ;
            parseFloat(result);
            paranthesisValue = paranthesisValue.slice(0,position1 + 1) + result + paranthesisValue.slice(position2+position+1);
            
        }
    }else if(paranthesisValue.includes("\%")){
        position = paranthesisValue.indexOf("%") ;
        [firstNum,secondNum,position1,position2] = getNumbers(paranthesisValue,position);
        result = operate(firstNum,secondNum,"%");
        paranthesisValue = paranthesisValue.slice(0,position1 + 1) + result + paranthesisValue.slice(position2+position+1);
    }else if(paranthesisValue.includes("\-")){
        position1 = paranthesisValue.indexOf("-") ;
        if(position1 !== 0){
            position = paranthesisValue.indexOf("-");
            [firstNum,secondNum,position1,position2] = getNumbers(paranthesisValue,position);
            result = firstNum + (-1)*secondNum;
            paranthesisValue = paranthesisValue.slice(0,position1 + 1) + result + paranthesisValue.slice(position2+position+1);
        }
        if(position1 == 0){
            if((paranthesisValue.includes("\-"))){
                paranthesisValue = paranthesisValue.slice(1);
                console.log('aici')
                if(paranthesisValue.includes("\-")){
                    position = paranthesisValue.indexOf("-");
                    [firstNum,secondNum,position1,position2] = getNumbers(paranthesisValue,position);
                                        // portion = str.slice(0,position);
                    // portion2 = str.slice(position+1);
                    // firstNum = parseFloat(str.slice(0,position));
                    // secondNum = parseFloat(portion2);
                    // console.log(`portion ${portion}`);
                    // console.log(`portion2 ${portion2}`);
                    // console.log(`primul ${firstNum}`);
                    // console.log(`doilea ${secondNum}`);
                    result = (-1)*firstNum + (-1)*secondNum;
                    paranthesisValue = result + paranthesisValue.slice(position2+position+1);
                    console.log(`valoarea parantezei: ${paranthesisValue}`);

                }else if(paranthesisValue.includes("\+")){
                    position = paranthesisValue.indexOf("+");
                    [firstNum,secondNum,position1,position2] = getNumbers(paranthesisValue,position);
                    result = (-1)*firstNum + secondNum;
                    paranthesisValue = result + paranthesisValue.slice(position2+position+1);

                }else{
                    paranthesisValue = "-" + paranthesisValue;
                    break
                }
                console.log(typeof(paranthesisValue));
            }
        }

    }else if(paranthesisValue.includes("\+")){

        
        position = paranthesisValue.indexOf("+") ;
        [firstNum,secondNum,position1,position2] = getNumbers(paranthesisValue,position);
        result = operate(firstNum,secondNum,"+");
        paranthesisValue = paranthesisValue.slice(0,position1 + 1) + result + paranthesisValue.slice(position2+position+1);
    }else{
        return paranthesisValue;
    }
    }
        return paranthesisValue;
}

    
function evaluate(){
    str = secondScreen.innerText ;
    
    while((str.includes("\("))||
        (str.includes("\)"))||
        (str.includes("\*"))||
        (str.includes("\/"))||
        (str.includes("\^"))||
        (str.includes("\+"))||
        (str.includes("\-"))||
        (str.includes("\%")))   
    {
    if((str.includes("\("))||(str.includes("\)"))){
        positionSecondParanthesis = str.indexOf(")");
        positionFirstParanthesis = str.indexOf("(") +1;
        if(positionFirstParanthesis == 0){
            principalScreen.innerText = "First you must open the paranthesis!"
        }else if(positionSecondParanthesis == -1){
            principalScreen.innerText = "First you must close the paranthesis!"
        }else{
        portion = str.slice(positionFirstParanthesis,positionSecondParanthesis);
        }
        if(portion !== ""){
            result = evaluateParanthesis(portion);
            str = str.slice(0,positionFirstParanthesis-1) + result + str.slice(positionSecondParanthesis+1);
            principalScreen.innerText= str;
        }
    }

    else if(str.includes("\^")){
        position = str.indexOf("^") ;
        [firstNum,secondNum,position1,position2] = getNumbers(str,position);
        result = operate(firstNum,secondNum,"^");
        principalScreen.innerText= str;
        str = str.slice(0,position1 + 1) + result + str.slice(position2+position+1);
        secondScreen.innerText = str;
    }

    else if(str.includes("\*")){
        position = str.indexOf("*") ;
        [firstNum,secondNum,position1,position2] = getNumbers(str,position);
        result = operate(firstNum,secondNum,"*");
        principalScreen.innerText= str;
        str = str.slice(0,position1 + 1) + result + str.slice(position2+position+1);

        secondScreen.innerText = str;
    }

    else if(str.includes("\/")){
        position = str.indexOf("/") ;
        [firstNum,secondNum,position1,position2] = getNumbers(str,position);
        if(b=0){
            return secondScreen.innerText = "Don't divide by 0!"
        }else{
            result = firstNum/secondNum ;
            parseFloat(result);
            principalScreen.innerText= str;
            str = str.slice(0,position1 + 1) + result + str.slice(position2+position+1);
            secondScreen.innerText = str;
        }
    }

    else if(str.includes("\%")){
        position = str.indexOf("%") ;
        [firstNum,secondNum,position1,position2] = getNumbers(str,position);
        result = operate(firstNum,secondNum,"%");
        principalScreen.innerText= str;
        str = str.slice(0,position1 + 1) + result + str.slice(position2+position+1);

        secondScreen.innerText = str;
    }

    else if(str.includes("\-")){
        position1 = str.indexOf("-") ;

        if(position1 !== 0){
            position = str.indexOf("-");
            [firstNum,secondNum,position1,position2] = getNumbers(str,position);
            result = firstNum + (-1)*secondNum;
            str = str.slice(0,position1 + 1) + result + str.slice(position2+position+1);
            principalScreen.innerText = str;
        }

        if(position1 == 0){
            if((str.includes("\-"))){
                str = str.slice(1);
                console.log('aici')
                if(str.includes("\-")){
                    position = str.indexOf("-");
                    console.log(`position ${position}`)
                    console.log(str);
                    [firstNum,secondNum,position1,position2] = getNumbers(str,position);
                    result = (-1)*firstNum + (-1)*secondNum;
                    str = result + str.slice(position2+position+1);
                    principalScreen.innerText = str;
                }else if(str.includes("\+")){
                    position = str.indexOf("+");
                    [firstNum,secondNum,position1,position2] = getNumbers(str,position);
                    result = (-1)*firstNum + secondNum;
                    str = result + str.slice(position2+position+1);
                    principalScreen.innerText = str;
                }else{
                    principalScreen.innerText = -str;
                    break
                }
            }
        }
    }

    else if(str.includes("\+")){
        position = str.indexOf("+") ;
        [firstNum,secondNum,position1,position2] = getNumbers(str,position);
        result = operate(firstNum,secondNum,"+");
        principalScreen.innerText= str;
        str = str.slice(0,position1 + 1) + result + str.slice(position2+position+1);
        secondScreen.innerText = str;
    }
    thesteps.push(str);
    console.log(thesteps);
    }

    
}


function getNumbers(str,index){
            //function(str,index) => firstNum,secondNum
            let first;
            portion = str.slice(0,index);
            portion2 = str.slice(index+1);
    
            //left part of an operator
            if((portion.lastIndexOf("\+")==-1) &&
              (portion.lastIndexOf("\-")==-1) &&
              (portion.lastIndexOf("\*")==-1) &&
              (portion.lastIndexOf("\/")==-1) &&
              (portion.lastIndexOf("\%")==-1) &&
              (portion.lastIndexOf("\^")==-1) ){
                maxIndex = -1;
              }else{
            maxIndex = Math.max(0,portion.lastIndexOf("%"),
            portion.lastIndexOf("\+"),
            portion.lastIndexOf("\-"),
            portion.lastIndexOf("\*"),
            portion.lastIndexOf("\/"));
            }
            first = parseFloat(portion.slice(maxIndex+1));

            // if(maxIndex == portion.lastIndexOf("-")){
            //     first=-first;
            // }
            
            //right part of an operator
            if((portion2.indexOf("+")==-1) &&
              (portion2.indexOf("-")==-1) &&
              (portion2.indexOf("*")==-1) &&
              (portion2.indexOf("/")==-1) &&
              (portion2.indexOf("%")==-1) &&
              (portion2.indexOf("^")==-1) ){
                maxIndex2 = portion2.length;
              }else{
            let arr=[];
            if(portion2.indexOf("+") !== -1) arr.push(portion2.indexOf("+"));
            if(portion2.indexOf("-") !== -1) arr.push(portion2.indexOf("-"));
            if(portion2.indexOf("*") !== -1) arr.push(portion2.indexOf("*"));
            if(portion2.indexOf("/") !== -1) arr.push(portion2.indexOf("/"));
            if(portion2.indexOf("%") !== -1) arr.push(portion2.indexOf("%"));

		    ord = arr.sort(function(a,b){
			    if(a > b){return 1;}
			    else{return -1}
		    });

            maxIndex2 = arr[0];
        }
            second = parseFloat(portion2.slice(0,maxIndex2));
            return [first,second,maxIndex,maxIndex2];
}


function operate(a,b,op){
    if(op == "^"){
        return a**b;
    }else if(op == "%"){
        return a/100*b;
    }else if(op == "*"){
        return a*b;
    }else if(op == "+"){
        return a+b;
    }
}

function showSteps(){
    if(stepsShow.hasChildNodes()){
                let child = stepsShow.lastElementChild; 
                while (child) {
                    stepsShow.removeChild(child);
                    child = stepsShow.lastElementChild;
                }
    }
    for (element in thesteps){
        let paragraph = document.createElement("p");
        paragraph.innerHTML = thesteps[element];
        stepsShow.appendChild(paragraph);
        paragraph.setAttribute("style","font-size: x-large;text-align: center;margin:0px;");
    }
    thesteps = [];
    
}

function popup(mylink, windowname) 
        {
         if (! window.focus)
         return true; 
         var href; 
         if (typeof(mylink) == 'string') 
         href=mylink; else href=mylink.href; 
         window.open(href, windowname, 'width=400,height=200,scrollbars=yes'); 
         return false; 
} 


equal.addEventListener('click',evaluate);
steps.addEventListener('click',showSteps);