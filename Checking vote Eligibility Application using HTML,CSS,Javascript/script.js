function submitForm(){
    let UserAge=Number(document.getElementById('convert').value);
    let UserName=(document.getElementById('name').value);
if(UserName=="" || UserAge=="")
{
    alert("PLAESE ENTER DETAILS");
}
else
{
    if(UserAge>=18){
        alert(UserName+" You Are Eligible For Voting")
    }
    else{
    alert(UserName+" You Are Not Eligible For Voting")
    }
}
}
