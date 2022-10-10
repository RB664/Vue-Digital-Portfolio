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
}
.btn:hover{
    color:black;
    border-color:black ;
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