function checkWeightHeight(){
    var weight = document.getElementById("ves").value;
    var height = document.getElementById("rost").value;

    var ras = weight / (height*height);
    var result ="";

    if (ras < 55) {
        result = "Дрищ";
    }else if (ras >= 55 && ras < 85) {
        result= "Норм вес";
    }else if (ras >= 88 && ras < 130) {
        result = "Вы Жирненький";
    }else {
        result = "Ну это слишком"
    }
    
    document.getElementById("result").innerHTML = result;
    


}
