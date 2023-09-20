<template>
    <main>
        <section class="cards" id="services">
            <h2 class="title">Dienstleistungen</h2>
            <div class="content">
                <div class="card">
                    <div class="icon">
                        <i class="fa-solid fa-pen-to-square"></i>
                    </div>
                    <div class="info">
                        <h3>Web Seiten erstellen</h3>
                        <p> Steigern Sie Ihren Online-Erfolg mit unseren Webseiten-Erstellungs-Dienstleistungen!
                            Sie uns gemeinsam Ihre Online-Präsenz auf das nächste Level heben. </p>
                    </div>
                </div>
                <div class="card">
                    <div class="icon">
                        <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <div class="info">
                        <h3>Web Applicationen erstellen</h3>
                        <p> ipsum, dolor sit amet consectetur adipisicing elit. 
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="icon">
                        <i class="fa-solid fa-link"></i>
                    </div>
                    <div class="info">
                        <h3>Handy App erstellen</h3>
                        <!-- <p class="text-content"> Dolorum consequuntur amet quos voluptas alias, quis magni quam tempore. 
                            Tenetur magni nostrum nemo dolorum, labore ut eum quos voluptates! Nobis, illo!
                        </p> -->
                        <a href="#" id="show-more">Mehr anzeigen</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { ref } from 'vue'
export default{
    name: "Dienstleistungen",
    components: "Dienstleistungen",
   
    // setup(){
    //     // Textinhalt und maximale Anzahl von Wörtern
    //     const textElement = document.getElementById('text-content');
    //     const maxWords = 20;

    //     // Ursprünglicher Text speichern und kürzen
    //     const originalText = textElement.textContent;

    //     const words = originalText.split(' ');
    //     if (words.length > maxWords) {
    //         const truncatedText = words.slice(0, maxWords).join(' ');
    //         textElement.textContent = truncatedText;
    //     }

    //     // "Mehr anzeigen"-Link verwalten
    //     const showMoreLink = document.getElementById('show-more');
    //     showMoreLink.addEventListener('click', function(event) {
    //         event.preventDefault(); // Verhindert, dass der Link die Seite neu lädt

    //         if (textElement.textContent !== originalText) {
    //             textElement.textContent = originalText;
    //             showMoreLink.textContent = 'Weniger anzeigen';
    //         } else {
    //             textElement.textContent = truncatedText;
    //             showMoreLink.textContent = 'Mehr anzeigen';
    //         }
    //     });
    //     return {showMoreLink, words}
    // }
    
}
</script>

<style scoped>

.info h3{
    color: rgb(17, 108, 255);
    font-size: 1.2em;
    font-weight: 700;
    margin: 10px;
}


</style>