<template>
    <div class="project-card">
        <!-- <img :src="(`../images/${wz.iconName}`)" alt=""> -->
        <!-- :style="{ backgroundImage: `url(${require(`@/assets/images/${wz.iconNam}`)})` }"> -->
        <!-- <img v-bind:src="'../images/' + wz.iconName " alt=""> -->
        <!-- <img v-bind:src="'../images/'+wz.iconName" v-bind:alt="wz.iconName"> -->
        <div class="project-image">
            <img :src="getImageUrl()" alt="">
        </div>
        <div class="project-info">
            <p class="project-category">{{ wz.title }}</p>
            <strong class="project-title">
                <span>{{ wz.body }}</span>
                <!-- <span>{{ DevInfo }}</span> -->
                <a href="#" class="more-details">More details</a>
            </strong>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'

export default {
    name: "SingleWerkzeug",
    props: ['wz'],
    
   setup(props){
    const DevInfo = computed(() =>{
        return props.wt.body.substring(0,100) + '...'
    })
    return {DevInfo}
   },

    methods:{
    getImageUrl() {
        return new URL(`../images/${this.wz.iconName}`, import.meta.url)
    }

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