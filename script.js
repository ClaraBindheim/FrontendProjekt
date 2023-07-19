(function init(){
    "use strict";

    //Animation Vogel sagt Pieps wenn auf ihn geklickt wird
    const animation = document.getElementById("animation");

    function pieps(){
    
        if(animation.getElementsByTagName("p").length === 0){

            const p = document.createElement("p");
            const text = document.createTextNode("Pieps!");
            p.appendChild(text);
            animation.appendChild(p);

        }
        else{

            const p = animation.getElementsByTagName("p");
            for(let i = 0; i < p.length; i++){
                p[i].remove();
            }
        }

    };

    animation.addEventListener("click", pieps);


    //Scroll-animation Bilder kommen ins Sichtfeld
    const figures = document.querySelectorAll("figure");
    console.log(figures);


    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {
            entry.target.classList.toggle("scroll", entry.isIntersecting);
        })

    },
    {
        rootMargin: "-20px",
        threshold: 0,
    }
    )    

    figures.forEach(figure => {
        observer.observe(figure);
    })
    

    //Submit Form Nachricht anzeigen
    const form = document.getElementsByClassName("m-form");
    const submitNachricht = document.getElementById("submit");
    
    form[0].addEventListener('submit', (e) => {
         e.preventDefault();
        submitNachricht.classList.add('show');
    });

    form[0].addEventListener('reset', (e) => {
       submitNachricht.classList.remove('show');
   });

})()

