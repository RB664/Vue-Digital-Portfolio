<template>
<section id="projects">
    <h1>Projects</h1>
    <div class="projects-container">
     <div v-for="project of projects" :key="project.id" class="card">    
        <img :src="project.image" alt="">
     </div>
</div>   
        
    </section>
</template>

<style>
#projects{
    padding-top: 60px;
}
.projects-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 25px;
    margin: 25px 25px 25px 25px
}
.card p{
    margin-bottom: 0;
}
.card{
    margin-top: 50px;
    height: 175px;
    width: 280px;
}
.card img{
    width:  280px;
    height: 175px;
    object-fit: cover;
}
.card a{
    text-decoration: none;
}
h1{
    color: white;
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