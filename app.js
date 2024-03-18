


// alert("welcom to the  Mobile Phone Recommender")
// alert("pleas answer he following question to help us suggenst the best mobile phone for you")

// var budget = prompt("what is your budget low/medium/high")
// if(budget === "high"){

//     var opSystem = prompt("which operating system do you prefer? Android/ios")
//     if(opSystem === "ios"){

//         var camera = prompt("Camera Quality (basic, moderate, high)")
//         if( camera === "high"){

//             var btry = prompt("Battery Life (short, average, long)")
//             if( btry === "long"){

//                 var screenSize = prompt("Screen Size (small, medium, large)")
//                 if(screenSize === "large"){

//                     document.write("Based on your preferences, we recommendthe following mobile phone:" + "<br>" )
//                     document.write("-iphone 13 pro max" + "<br>")
//                     document.write("-price: $1099" + "<br>")
//                     document.write("-operating system: ios" + "<br>")
//                     document.write("-camera triple 12mp" + "<br>")
//                     document.write("-Betary life: up to 28 hour talk time" + "<br>")
//                     document.write("-screen size 6.7 inch")



//                 }
//             }


//         }
//     }
// }




alert("welcom to the  Mobile Phone Recommender")
alert("pleas answer he following question to help us suggenst the best mobile phone for you")

var budget = prompt("what is your budget low/medium/high")
var opSystem = prompt("which operating system do you prefer? Android/ios")
var camera = prompt("Camera Quality (basic, moderate, high)")

if(budget === "high" && opSystem === "ios" && camera === "high"){
    document.write("Based on your preferences, we recommendthe following mobile phone:" + "<br>" )
    document.write("-iphone 13 pro max" + "<br>")
    document.write("-price: $1099" + "<br>")
    document.write("-operating system: ios" + "<br>")
    document.write("-camera triple 12mp" + "<br>")
    document.write("-Betary life: up to 28 hour talk time" + "<br>")
    document.write("-screen size 6.7 inch")


}else if(budget === "low" && opSystem === "android" && camera === "basic"){
    document.write("Based on your preferences, we recommendthe following mobile phone:" + "<br>" )
    document.write("-Q Mobile" + "<br>")
    document.write("-price: 15,000pkr" + "<br>")
    document.write("-operating system: Android" + "<br>")
    document.write("-camera single 12mp" + "<br>")
    document.write("-Betary life: up to 10 hour talk time" + "<br>")
    document.write("-screen size 6.7 inch")

}else if(budget === "medium" && opSystem === "android" && camera === "moderatr"){
    document.write("Based on your preferences, we recommendthe following mobile phone:" + "<br>" )
    document.write("-oppo" + "<br>")
    document.write("-price: 30,000pkr" + "<br>")
    document.write("-operating system: Android" + "<br>")
    document.write("-camera triple 12mp" + "<br>")
    document.write("-Betary life: up to 12 hour talk time" + "<br>")
    document.write("-screen size 6.7 inch")
}else{
    document.write("Sorry! i have note any idea for you" + "<br>" + "please give us right suggestion")

}



































