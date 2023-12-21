function update(){
document.getElementById("demo").style.borderRadius = "20%";
};

function year1(){
   document.getElementById("gy1").style.backgroundColor = "gray";
   document.getElementById("gy2").style.backgroundColor = "white";
};

function year2(){
    document.getElementById("gy2").style.backgroundColor = "gray";
    document.getElementById("gy1").style.backgroundColor = "white";
 };

 function year(){
    if(onclick=("gy1")){
        document.getElementById("1%").innerHTML = "30%";
        document.getElementById("2%").innerHTML = "39%";
        document.getElementById("3%").innerHTML = "27%";
    }
 }




