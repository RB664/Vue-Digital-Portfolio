<template>
    <section id="testimonials">
        <h1>Testimonials</h1>
        <div v-if="testimonials">
            <div class="container">
                <div class="row" id="testi">
                    <div v-for="testimonial of testimonials" :key="testimonial.id" class="card">
                        <img id="img1" :src="testimonial.image" alt="" >
                        <h5>{{testimonial.name}}</h5>
                        <p>{{testimonial.comment}}</p>
                    </div>  
                </div>
            </div>
        </div>
        <div v-else>
            No Testimonials
        </div>
        
    </section>
</template>

<style scoped>
    #testi{
        justify-content: center;
        gap: 50px;
    }
    p{
        font-family:'Courier New', Courier, monospace ;
    }
#testimonials{
    padding-top: 50px;
    color: white;
    padding-bottom: 50px;
    width: 100%;
}
#img1{
    object-fit: cover;
    width: 275px;
    height: 240px;
    margin-top: 5px;
}
.card{
    width: 300px;
    height: auto;
    background:transparent;
    border: white 1px solid;
}
h5{
    font-family: 'Gloria Hallelujah', cursive;
}
h1{
    font-family: 'Peralta', cursive;
    margin-top: 20px;
}
</style>

<script>
    export default{
        computed: {
    testimonials() {
      return this.$store.state.testimonials
      } 
     }
    }
</script>