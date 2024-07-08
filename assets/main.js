
//*****************Mobile menu***************
function showAndHideMobileMenu() {
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const mobileMenu = document.querySelector(".mobile-menu ul");
    const line1 = document.querySelector(".line1");
    const line2 = document.querySelector(".line2");
    const line3 = document.querySelector(".line3");

    mobileMenuIcon.addEventListener("click", function () { //Altera a classe das divs que formam o ícone para viraram o "X"
        mobileMenu.classList.toggle("show");

        line1.classList.toggle("line1-changed");
        line2.classList.toggle("line2-changed");
        line3.classList.toggle("line3-changed")
    })

}
showAndHideMobileMenu();


//****************Envio do Formulário**********
const formulario = document.querySelector(".formulario-de-inscricao");

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    
    const nome = document.querySelector(".nome").value;
    const sobrenome = document.querySelector(".sobrenome").value;
    const aula = document.querySelector(".aula").value;
    const documento = document.querySelector(".documento").value;
    const idade = document.querySelector(".idade").value;


    const whatsappMessage = `Nome: ${nome} ${sobrenome}\nAula de Interesse: ${aula}\nDocumento: ${documento}\nIdade: ${idade}`;
    const whatsappNumber = '5522997166888';
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, '_blank');
});


//****** Slider "Aulas Oferecidas" *******/
let slideIndex = 0;

function changeSlide(n) {
    slideIndex += n;
    const cards = document.querySelectorAll(".card");
    if (slideIndex >= cards.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = cards.length - 1;
    }
    showSlide(slideIndex);
}

function showSlide(n){
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        if (index === n){
            card.style.display = 'flex';
        } else{
            card.style.display = 'none';
        } 
    });
}

//Mostra e tira seção "Ver todas"

const verTodasBtn = document.querySelector(".ver-todas-btn");
const SectionVerTodas = document.querySelector(".ver-todas");

function changeVisibility() {
    SectionVerTodas.classList.toggle("appear");
    verTodasBtn.textContent = verTodasBtn.textContent === "Ver todas >" ? "< Fechar" : "Ver todas >";

    if (SectionVerTodas.classList.contains("appear")) {
        SectionVerTodas.scrollIntoView({ behavior: "smooth" });
    }
}

verTodasBtn.addEventListener("click",changeVisibility);