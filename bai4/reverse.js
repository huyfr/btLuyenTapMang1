let arr=[];

function addTxt()
{
    arr=[];
    let input=document.getElementById("input").value;
    if (input<=0 || isNaN(input))
    {
        alert("Vui long nhap lai");
        document.getElementById("result").innerHTML="";
        document.getElementById("display").innerHTML="";
        document.getElementById("input").value="";
    }
    else
    {
        for (let i=0; i<input; i++)
        {
            let number=Math.floor(Math.random()*100);
            arr.push(number);
        }
        document.getElementById("display").innerHTML=input+" gia tri random tu 0-100: "+arr;
    }
}
function reverseTxt()
{
    let first=0;
    let reverse=arr;
    let last=reverse.length-1;
    while(first<last)
    {
        let temp=reverse[first];
        reverse[first]=reverse[last];
        reverse[last]=temp;
        first++;
        last--;
    }
    document.getElementById("result").innerHTML="Vi tri cac gia tri sau khi dao nguoc: "+reverse;
}
