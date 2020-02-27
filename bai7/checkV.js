let arr=[];
let input;
function randomNumber()
{
    arr=[];
    input=document.getElementById("randomNumber").value;
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
            let number=Math.floor(Math.random()*21);
            arr.push(number);
        }
    }
    document.getElementById("original").innerHTML=arr;
}
function checkInput()
{
    let number=parseInt(document.getElementById("inputNumber").value);
    let check;
    for (let i=0; i<input; i++)
    {
        if (number===arr[i])
        {
            check=1;
            for (let j=i; j<input; j++)
            {
                arr[j]=arr[j+1];
            }
            arr.pop();
            arr.push(0);
        }
    }
    if (check===1)
    {
        document.getElementById("result").innerHTML="V is in array " + arr;
    }
    else
    {
        document.getElementById("result").innerHTML="V is not in array " + arr;
    }
}
