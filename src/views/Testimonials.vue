<template>
    <section id="testimonials">
        <h1>Testimonials</h1>
        <div class="testimonials-conatiner">
            <div v-for="testimonial of testimonials" :key="testimonial.id" class="card">
                <img id="img1" :src="testimonial.image" alt="" >
                <h5>{{testimonial.name}}</h5>
                <p>{{testimonial.comment}}</p>
            </div>  
        </div>
        
    </section>
</template>

<style>
#testimonials{
    padding-top: 50px;
    color: white;
}
.testimonials-conatiner{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 25px;
    margin: 20px 20px 20px 20px;
}
#img1{
    object-fit: cover;
    width: 280px;
    height: 240px;
    margin: 5px 5px 5px 5px;
}
.card{
    width: 300px;
    background-color: #a1a1a1;
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