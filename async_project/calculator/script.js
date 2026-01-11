const calculation=document.getElementById('calculation-section');
const result=document.getElementById('result');

//btns
const btn1=document.getElementById('one');
const btn2=document.getElementById('2');
const btn3=document.getElementById('3');
const btn4=document.getElementById('4');
const btn5=document.getElementById('5');
const btn6=document.getElementById('6');
const btn7=document.getElementById('7');
const btn8=document.getElementById('8');
const btn9=document.getElementById('9');
const zero=document.getElementById('0');
const dblzero=document.getElementById('00')
const cancel=document.getElementById('cancel');
const equal=document.getElementById('equal');
const add=document.getElementById('add');
const sub=document.getElementById('sub');
const multi=document.getElementById('multi');
const div=document.getElementById('div');

function appendscren(value){
     calculation.innerText += value;
}

btn1.addEventListener('click',()=>{
    appendscren("1")
})
btn2.addEventListener('click',()=>{
    appendscren("2")
})
btn3.addEventListener('click',()=>{
    appendscren("3")
})
btn4.addEventListener('click',()=>{
    appendscren("4")
})
btn5.addEventListener('click',()=>{
    appendscren("5")
})
btn6.addEventListener('click',()=>{
    appendscren("6")
})
btn7.addEventListener('click',()=>{
    appendscren("7")
})
btn8.addEventListener('click',()=>{
    appendscren("8")
})
btn9.addEventListener('click',()=>{
   appendscren("9")
})
zero.addEventListener('click',()=>{
    appendscren("0")
})
dblzero.addEventListener('click',()=>{
    appendscren("00")
})

add.addEventListener('click',()=>{
    appendscren("+");
})
sub.addEventListener('click',()=>{
    appendscren("-")
})
multi.addEventListener('click',()=>{
    appendscren("*")
})
div.addEventListener('click',()=>{
    appendscren("/")
})

cancel.addEventListener('click', ()=>{
    calculation.innerText = "";
    result.innerText = "";
});


equal.addEventListener('click', ()=>{
    try {
        result.innerText = eval(calculation.innerText);
    } catch (err) {
        result.innerText = "Error";
    }
});