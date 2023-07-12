(function init(){
    "use strict";

    //Um sicherzustellen das meine DOM-Elemente geladen sind, ansonsten ist animation nämlich null
    window.onload = function(){

    const animation = document.getElementById("animation");
    console.log(animation);

    function pieps(){
    
        if(animation.getElementsByTagName("p").length === 0){

            var p = document.createElement("p");
            var text = document.createTextNode("Pieps!");
            p.appendChild(text);
            animation.appendChild(p);

        }
        else{
            var p = animation.getElementsByTagName("p");
            for(let i = 0; i < p.length; i++){
                p[i].remove();
            }
        }

    };

    animation.addEventListener("click", pieps);
}
    

})();

