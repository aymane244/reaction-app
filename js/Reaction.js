var début = new Date().getTime()
document.getElementById("btn").addEventListener("click", divReaction);
    function divReaction(){
        function randomColor(){
            var letters = "0123456789ABCDEF";
            var color ="#";
            for(var i = 0; i < 6; i++){
                color +=letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        function Appear(){
            var top = Math.random() * 400;
            var left = Math.random() * 400;
            var width = (Math.random() * 200) + 100;
            if(Math.random() > 0.50){
                document.getElementById("reaction-div").style="border-radius:50%";
            }else{
                document.getElementById("reaction-div").style="border-radius:0";
            }
            document.getElementById("reaction-div").style.backgroundColor = randomColor();
            document.getElementById("reaction-div").style.width = width + "px"; 
            document.getElementById("reaction-div").style.height = width + "px";
            document.getElementById("reaction-div").style.top = top + "px";
            document.getElementById("reaction-div").style.left = left + "px";
            document.getElementById("reaction-div").style.display="block";
            début = new Date().getTime();
        }
        function reAppear(){
            setTimeout(Appear, Math.random()*2000);
        }
        reAppear();
        document.getElementById("reaction-div").onclick = function(){
            document.getElementById("reaction-div").style.display="none";
            var fin = new Date().getTime();
            var durée = (fin - début)/1000;
            document.getElementById("span").innerHTML= "Votre temps est : " + durée + " s";
            document.getElementById("span").style.fontWeight="bold";
            reAppear();
    }
    document.getElementById("btn").style.display="none";
}