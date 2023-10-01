function message()
{
    let velemeny = document.getElementById('velemeny').value;
    if(velemeny.toString().length > 50)
    {
        document.forms.backgroundColor = "green";
        document.body.style.backgroundColor = "green";
    }
    else
    {
        document.forms.backgroundColor = "red";
        document.body.style.backgroundColor = "red";
    }
    alert("Köszönjük az értékelést!");
}