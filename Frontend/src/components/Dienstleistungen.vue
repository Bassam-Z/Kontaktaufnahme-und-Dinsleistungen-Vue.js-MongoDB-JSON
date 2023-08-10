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
                        <h3>Script schreiben</h3>
                        <p> ipsum, dolor sit amet consectetur adipisicing elit. Dolorum consequuntur amet quos voluptas alias, quis magni quam tempore. 
                            Tenetur magni nostrum nemo dolorum, labore ut eum quos voluptates! Nobis, illo!
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="icon">
                        <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <div class="info">
                        <h3>Projekte</h3>
                        <p> ipsum, dolor sit amet consectetur adipisicing elit. 
                        </p>
                    </div>
                </div>
                <div class="card">
                    <div class="icon">
                        <i class="fa-solid fa-link"></i>
                    </div>
                    <div class="info">
                        <h3>Kontakt</h3>
                        <p> Dolorum consequuntur amet quos voluptas alias, quis magni quam tempore. 
                            Tenetur magni nostrum nemo dolorum, labore ut eum quos voluptates! Nobis, illo!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default{
    name: "Dienstleistungen",
    components: "Dienstleistungen",
    date(){
        return{
            user : null
        }
    }
    
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