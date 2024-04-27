function sub(){
    let b=Number(document.getElementById('convert').value);
    let name=(document.getElementById('name').value);
if(name=="" || b=="")
{
    alert("PLAESE ENTER DETAILS");
}
else
{
    if(b>=18){
        alert(name+" You Are Eligible For Voting")
    }
    else{
    alert(name+" You Are Not Eligible For Voting")
    }
}
}
