let arr=[];

function randomNumber()
{
    arr=[];
    let number;
    let input=document.getElementById("randomNumber").value;
    if (input<=0 || isNaN(input))
    {
        alert("Vui long nhap lai");
        document.getElementById("result").innerHTML="";
        document.getElementById("randomNumber").value="";
    }
    else
    {
        for (let i=0; i<input; i++)
        {
            number=Math.floor(Math.random()*11);
            arr.push(number);
        }
    console.log(arr);
    }
}
function checkInput()
{
    let number=parseInt(document.getElementById("inputNumber").value);
    let check;
    for (let i=0; i<number; i++)
    {
        if (number===arr[i])
        {
            check=1;
        }
    }
    if (check===1)
    {
        document.getElementById("result").innerHTML="V is in array";
    }
    else
    {
        document.getElementById("result").innerHTML="V is not in array";
    }
}

