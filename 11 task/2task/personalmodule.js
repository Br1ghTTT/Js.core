let Hours = new Date().getHours();

let f;
    exports.f = function (){ 
    if(Hours >= 23 && Hours <= 5){
        return "good night!"
    }else if(Hours > 5 && Hours < 11 )
    {
        return "good morning!"
    }else if(Hours >= 11 && Hours <= 17){
        return "good day!"
    }else if(Hours > 17 && Hours < 23){
        return "good evening!"
    } 
    return Hours;
}
/* module.exports.f = f; */



