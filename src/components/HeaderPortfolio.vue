<template>
    <!--=============== HEADER PROFILE ===============-->
        <header class="profile container">
             <!-- Theme Button-->
        
            <i @click="showTheme = !showTheme" 
            v-if="!showTheme" class="ri-sun-line  change-theme"  id="theme-button"></i> 
            <i @click="showTheme = !showTheme"
             v-else class="ri-moon-line change-theme" id="theme-button"></i>

            <div class="profile__container grid">
                <div class="profile__data">
                    <div class="profile__border">
                        <div class="profile__perfil">

                            <img src="../assets/img/perfil.png" alt="Imagem de Perfil">
                        </div>
                    </div>

                    <h2 class="profile__name">Everson Boeira de Deus</h2>
                    <h3 class="profile__profession">Desenvolvedor Front-End</h3>

                    <ul class="profile__social">
                        <a href="" target="_blank" class="profile__social-link">
                            <i class="ri-instagram-line"></i>
                        </a>
                        <a href="" target="_blank" class="profile__social-link">
                            <i class="ri-linkedin-box-line"></i>
                        </a>
                        <a href="" target="_blank" class="profile__social-link">
                            <i class="ri-github-line"></i>
                        </a>
                    </ul>
                
                </div>

                <div class="profile__info grid">
                    <div class="profile__info-group">
                        <h3 class="profile__info-number">0</h3>
                        <p class="profile__info-description">
                            Anos de <br> trabalho
                        </p>
                    </div>
                    <div class="profile__info-group">
                        <h3 class="profile__info-number">0</h3>
                        <p class="profile__info-description">
                            Projetos <br>   Concluídos
                        </p>
                    </div>
                    <!---
                <div class="profile__info-group">
                    <h3 class="profile__info-number">96</h3>
                    <p class="profile__info-description">
                        Satisfied <br> customers
                    </p>
                </div>
                --->
                </div>

                <div class="profile__buttons">
                    <!---INSERT YOUR CV--->
                
                    <a download="" href="../assets/pdf/Gianell-Cv.pdf" class="button">
                        Download CV <i class="ri-download-line"></i>
                    </a>
                    <div class="profile__buttons-small">
                        <a href="https://api.whatsapp.com/send?phone=5567991014315&text=Olá, escreva para mim!" target="_blank" class="button button__small button__gray" >
                            <i class="ri-whatsapp-line"></i>
                        </a>

                        <a href="https://m.me/EversonXD" target="_blank" class="button button__small button__gray">
                            <i class="ri-messenger-line"></i>
                        </a>
                    </div>
                </div>
            </div>

            </header>
</template>
<script setup>
import ScrollReveal from 'scrollreveal';
import { onMounted, ref, watch } from 'vue';
const showTheme = ref(false)
watch(showTheme, (newValue) => {
    if (newValue) {
        document.body.classList.add('dark-theme') // Adiciona a classe ao <body>
    } else {
        document.body.classList.remove('dark-theme') // Remove a classe do <body>
    }
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
delay:400
})

onMounted(() => {

    sr.reveal('.profile__border',{delay:400});
    sr.reveal('.profile__name', { delay: 500 })
    sr.reveal('.profile__profession', { delay: 510 });
    sr.reveal('.profile__social', {delay: 600 });
    sr.reveal('.profile__info-group', {delay: 700});
    sr.reveal('.profile__buttons', {delay: 800});
    sr.reveal('.filters__content', {delay: 900});
    sr.reveal('.filters', {  delay: 1000 });

});

</script>
<style >
/*=============== PROFILE ===============*/
.profile{
  position: relative;
  padding-top: 3.5rem;


}
.profile__container{
  row-gap: 2rem;  
}
.profile__data{
    display: grid;
    text-align: center;
}
.profile__perfil{
    width: 100px;
    height: 100px;
    background: linear-gradient(180deg,
        hsla(var(--hue), var(--sat), var(--lig), 1) 0%,
        hsla(var(--hue), var(--sat), var(--lig), .2) 100%);
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: center;
}
.profile__perfil img{
    width:100%;
    object-fit: cover;


}
.profile__border{
    border: 3.5px solid var(--first-color); /*  Color for the border surrounding the profile */
    justify-self: center;
    width: 115px;
    height: 115px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin-bottom: .75rem;
}
.profile__name{
    font-size: var(--h2-font-size);
}
.profile__profession{
    font-size: var(--smaller-font-size);
    font-weight: 500;
    color: var(--text-color);
    margin-bottom: 1rem;
}
.profile__social{
    display: flex;
    justify-content: center;
    column-gap: .75rem;
}
.profile__social-link{
    font-size: 1.25rem;
    color: var(--title-color);
    transition: .3s;
}
.profile__social-link:hover{
    color: var(--first-color);
}
.profile__info{
    grid-template-columns: repeat(3, max-content);
    justify-content: center;
    column-gap: 2.5rem;
}
.profile__info-group{
    text-align: center;

}
.profile__info-number{
    font-size: var(--normal-font-size);
    margin-bottom: .25rem;
}
.profile__info-description{
    font-size: var(--smaller-font-size);
    font-weight: 500;

}
.profile__buttons,
.profile__buttons-small{
    display: flex;
    align-self: center;
    justify-content: center;
}
.profile__buttons{
    column-gap: 1rem;
}
.profile__buttons-small{
    column-gap: .25rem;
}


/*=============== BUTTONS ===============*/
.button{
    display: inline-flex;
    align-items: center;
    column-gap: .5rem;
    background-color: var(--first-color);
    color: #fff;
    border-radius: .5rem;
    transition: .3s;
    box-shadow: 0 8px 24px hsl(var(--hue), var(--sat), var(--lig), .25);
    padding: 1rem;
    margin-bottom: 2rem;
}
.button i{
    font-size: 1.25rem;

}
.button:hover{
    background-color: var(--first-color-alt);
}
.button__small{
    padding:.75rem;
    box-shadow: none;
}
.button__gray{
    background-color: var(--text-color-lighten);
    color: var(--title-color);
    background-color: var(--text-color-light);
}




  
</style>