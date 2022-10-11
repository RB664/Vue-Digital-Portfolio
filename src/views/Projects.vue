<template>
<section id="projects">
    <h1>Projects</h1>
    <div v-if="projects">
        <div class="container">
            <div class="row" id="proj">
                <div v-for="project of projects" :key="project.id" class="card">    
                   <img :src="project.image" alt="">
                   <div>
                    <a class="btn" :href="project.live" target="_blank">Live</a>
                    <a class="btn" :href="project.github" target="_blank">Github</a>
                   </div>
                </div>
            </div>
    </div>   
    </div>
    <div v-else>
        No projects
    </div>
        
    </section>
</template>

<style scoped>
#projects{
    padding-top: 100px;
    padding-bottom:70px;
    margin-bottom: 60px;
    width: 100vw;
}
h1{
    font-family: 'Peralta', cursive;
    color: white;
}
#proj{
    justify-content: center;
    gap: 67px;
    margin-top:50px;
}
.card{
    height: 178px;
    width: 280px;
    background: transparent;
    border: none;
}
.card img{
    width: 100%;
    height: auto;
}
.btn{
    margin: 5px;
    color:white;
    border-color:white ;
    transition: .2s ease-in-out;
}
.btn:hover{
    border-color:black ;
    transform: scale(1.2);
}
</style>

<script>
    export default{
        computed: {
    projects() {
      return this.$store.state.projects
      } 
     }
    }
</script>