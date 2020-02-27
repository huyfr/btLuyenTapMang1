function maxArr()
{
    document.getElementById("result").innerHTML="";
    let arr=[];
    let input=document.getElementById("inputNumber").value;
    if (input<=0)
    {
        alert("Vui long nhap lai");
        document.getElementById("result").innerHTML="";
        document.getElementById("inputNumber").value="";
    }
    else
    {
        for (let i=0; i<input; i++)
        {
            let number=Math.floor(Math.random()*100);
            arr.push(number);
        }
        let max=arr[0];
        for (let i=0; i<input; i++)
        {
            if (max<arr[i])
            {
                max=arr[i];
            }
        }
        let avg=0;
        for (let i=0; i<input; i++)
        {
            avg=(avg+arr[i])/input;
        }
        document.getElementById("result").innerHTML="Mang gom "+input+" so nguyen ngau nhien: "+arr+"<br>"+"Max: "+max+"<br>"+"Gia tri trung binh: "+avg;
    }
}