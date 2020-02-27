let arr=[];

function randomNumber()
{
    arr=[];
    let input=document.getElementById("inputNumber").value;
    for (let i=0; i<input; i++)
{
        let number=Math.floor(Math.random()*100);
        arr.push(number);
    }
}

function arrangeMaxToMin()
{
    arr.sort(function (a,b) {return b-a});
}
