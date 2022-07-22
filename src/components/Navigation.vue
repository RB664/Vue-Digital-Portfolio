<template>
<nav id="navbar" class="navbar fixed-top navbar-expand-sm navbar-light bg-light">
            <div class="container">
               <router-link to="/" class="nav-link text-black">RB</router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse float-right" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link text-black">Home</router-link> 
                  </li>
                  <li class="nav-item">
                    <router-link to="/about" class="nav-link text-black">About</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/resume" class="nav-link text-black">Resume</router-link>
                  </li>
                  <li class="nav-item">

                    <router-link to="projects" class="nav-link text-black">Projects</router-link>
                  </li>
                  <li class="nav-item">
                
                    <router-link to="testimonials" class="nav-link text-black">Testimonials</router-link>
                  </li>
                  <li class="nav-item">

                    <router-link to="contact" class="nav-link text-black">Contact</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
<!-- <section id="home">
  <div class="container-">
    <h1>Hello I'm Ridhaa Benjamin</h1>
    <h2>An Aspiring Web Developer</h2>
  </div>
</section> -->
</template>

<style>
</style>

<script>

</script>
