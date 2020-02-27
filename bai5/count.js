let arr=[];

function addTxt()
{
    let input=document.getElementById("inputNumber").value;
    if (input<=0 || isNaN(input))
    {
        alert("Vui long nhap lai");
        document.getElementById("result").innerHTML="";
        document.getElementById("display").innerHTML="";
        document.getElementById("inputNumber").value="";
    }
    else
    {
        for (let i=0; i<input; i++)
        {
            let number=Math.floor(Math.random()*201)-100;
            arr.push(number);
        }
        document.getElementById("display").innerHTML=input+" gia tri random tu -100-100: "+arr;
    }
}
function countNegative() 
{
    let count=0;
    for (let i=0; i<arr.length; i++)
        if (arr[i]<0)
        {
            count++;
        }
    document.getElementById("result").innerHTML="Tong so nguyen am trong chuoi: "+count;
}