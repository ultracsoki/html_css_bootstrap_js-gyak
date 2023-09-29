function message()
{
    let velemeny = document.getElementById('velemeny').value;
    if(toString(velemeny).length > 50)
    {
        document.forms.style.backgroundColor = "green";
    }
    else
    {
        document.forms.style.backgroundColor = "red";
    }
    window.alert('Köszönjük az értékelést!');
}