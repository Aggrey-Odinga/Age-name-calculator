function age(){
    console.log("test")
    var form = document.getElementById('form_age');
    console.log(form.elements["date"].value)


    var strDay = document.getElementById('date').value;
    var strMonth = document.getElementById('month').value;
    var strYear = document.getElementById('year').value;
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    console.log(typeof male.checked)
    console.log(typeof false)

    var MaleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    var FemaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    