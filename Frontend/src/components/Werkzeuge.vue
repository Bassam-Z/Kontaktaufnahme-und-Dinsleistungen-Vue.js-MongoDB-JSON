<template>
    <main>
        <section class="projects" id="projects">
            <h2 class="title">Meine Werkzeuge</h2>
            <div class="content">
                <div v-for="wz in Werkz" :key="wz.id">
                    <SingleWerkzeug :wz="wz"/>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import SingleWerkzeug from './SingleWerkzeug.vue';
export default{
    name: "Werkzeuge",
    props:['Werkz'],
    components: { SingleWerkzeug },
    setup(props){
        console.log(props.Werkz)
    }
    
}
</script>

<style scoped>

.projects {
    background-color: #0f0f50;
}
.project-card {
    background-color: aliceblue;
    border: 1px solid wheat;
    min-height: 14em;
    width: 20em;
    overflow: hidden;
    border-radius: 10px;
    margin: 20px;
    transition: 0.7s ease;
}

.project-card:hover{
    transform: scale(1.1);
}
.project-card:hover .project-image{
    opacity: 0.9;
}

.project-image img {
    width: 100%;
}

.project-info {
    padding: 1em;
    color: black;
}


.project-category{
    font-size: 0.8em;
    color: black;
}
.project-title {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    font-weight: 800;
    margin-top: 10px;
}
.more-details{
    text-decoration: none;
    color: rgb(17, 108, 255);
}

.more-details:hover{
    color:  rgb(109, 83, 255);
}


</style>