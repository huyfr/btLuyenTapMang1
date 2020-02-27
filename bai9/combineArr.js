let arrA=[];
let arrB=[];
function randomNumber(type)
{
    let number;
    if (type===1)
    {
        arrA=[];
        let input=document.getElementById("arrA").value;
        for (let i=0; i<input; i++)
        {
            number=Math.floor(Math.random()*100);
            arrA.push(number);
        }
    document.getElementById("resultA").innerHTML=input+" phan tu ngau nhien trong mang A: "+arrA;
    }
    if (type===2)
    {
        arrB=[];
        let input=document.getElementById("arrB").value;
        for (let i=0; i<input; i++)
        {
            number=Math.floor(Math.random()*100);
            arrB.push(number);
        }
    document.getElementById("resultB").innerHTML=input+" phan tu ngau nhien trong mang B: "+arrB;
    }
}
function combineArr()
{
    for (let i=0; i<arrA.length; i++)
    {
        arrB.push(arrA[i]);
    }
    document.getElementById("result").innerHTML="Mang C: "+arrB;
}