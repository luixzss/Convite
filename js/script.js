/*===================================
    LOADER
===================================*/

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.transition = ".6s";

            setTimeout(() => {

                loader.remove();

            },600);

        },1000);

    }

});

/*===================================
    CONTAGEM REGRESSIVA
===================================*/

const casamento = new Date("2026-09-12T11:30:00").getTime();

function atualizarContador(){

    const agora = new Date().getTime();

    const distancia = casamento - agora;

    if(distancia <= 0){

        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";

        return;

    }

    const dias = Math.floor(distancia / (1000*60*60*24));

    const horas = Math.floor((distancia % (1000*60*60*24)) / (1000*60*60));

    const minutos = Math.floor((distancia % (1000*60*60)) / (1000*60));

    const segundos = Math.floor((distancia % (1000*60)) / 1000);

    document.getElementById("days").textContent = dias;
    document.getElementById("hours").textContent = horas;
    document.getElementById("minutes").textContent = minutos;
    document.getElementById("seconds").textContent = segundos;

}

setInterval(atualizarContador,1000);

atualizarContador();

/*===================================
    ABRIR CONVITE
===================================*/

const abrir = document.getElementById("openInvitation");

if(abrir){

    abrir.addEventListener("click", () => {

        const hero = document.querySelector(".hero");

        if(hero){

            hero.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

}

/*===================================
    BOTÃO VOLTAR AO TOPO
===================================*/

const topButton = document.getElementById("topButton");

if(topButton){

    topButton.style.display = "none";

    window.addEventListener("scroll", () => {

        if(window.scrollY > 300){

            topButton.style.display = "flex";

        }else{

            topButton.style.display = "none";

        }

    });

    topButton.addEventListener("click", () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}

/*===================================
    ANIMAÇÕES
===================================*/

const elementos = document.querySelectorAll(

".card,.gallery img,.event-box,.gift-box,form,.hero-image,.hero-text"

);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";

            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.15
});

elementos.forEach(el=>{

    el.style.opacity="0";

    el.style.transform="translateY(40px)";

    el.style.transition=".8s";

    observer.observe(el);

});

/*===================================
    FORMULÁRIO
===================================*/

const form = document.getElementById("form");

if(form){

    form.addEventListener("submit",(e)=>{

        e.preventDefault();

        alert("Obrigado por confirmar sua presença!");

        form.reset();

    });

}