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

    var Days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        if (strDay == ""){
        alert("please enter day")
        return
    } 
    if (strMonth == ""){
        alert("please enter month")
        return
    }
    if (strYear == ""){
        alert("please enter year")
        return
    }

    var day = parseInt(strDay);
    if (day < 1 || day > 31){
        alert("invalid day of the month, please enter valid day")
        return
    }
    var month = parseInt(strMonth);
    if (month <  1 || month > 12){
        alert("invalid month, please enter valid month")
        return
    }

    if (male.checked == false && female.checked == false){
        alert("select gender")
        return
    } 