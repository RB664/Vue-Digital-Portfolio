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
                    <router-link to="/education" class="nav-link text-black">Education</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/skills" class="nav-link text-black">Skills</router-link>
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

<div class="area">
        <ul class="squares">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>

          
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
  <footer class="fixed-bottom">
     Designed by Ridhaa Benjamin Copyright&copy;2022
  </footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  object-fit: cover;
  background-image: linear-gradient(to right top, black, #171717, #272727, #444444, #a1a1a1);
    background-repeat: no-repeat;
    width: 100vw;
    height: 320vh;
    font-family: system-ui, sans-serif;
    overflow: hidden;
}
nav {
  padding: 30px;
  width: 100vw;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
footer{
  background-color:black;
  height: 50px;
  padding-top: 10px;
  color: white;
  width: 100vw; 
}
.squares {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 120vh;
    overflow: hidden;
}

.squares li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 8s linear infinite;
    bottom: -150px;
}

.squares li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}

.squares li:nth-child(2) {
    left: 10%;
    width: 70px;
    height: 70px;
    animation-delay: 0s;
    animation-duration: 12s;
}

.squares li:nth-child(3) {
    left: 70%;
    width: 30px;
    height: 30px;
    animation-delay: 2s;
}

.squares li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.squares li:nth-child(5) {
    left: 65%;
    width: 50px;
    height: 50px;
    animation-delay: 0s;
}

.squares li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 0s;
}

.squares li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 4s;
}

.squares li:nth-child(8) {
    left: 50%;
    width: 40px;
    height: 40px;
    animation-delay: 2s;
    animation-duration: 30s;
}

.squares li:nth-child(9) {
    left: 20%;
    width: 30px;
    height: 30px;
    animation-delay: 2s;
    animation-duration: 25s;
}

.squares li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}

.squares li:nth-child(11) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
}

.squares li:nth-child(12) {
    left: 50%;
    width: 70px;
    height: 70px;
    animation-delay: 2s;
    animation-duration: 7s;
}

.squares li:nth-child(13) {
    left: 20%;
    width: 70px;
    height: 70px;
    animation-delay: 0s;
    animation-duration: 15s;
}

.squares li:nth-child(14) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}

@keyframes animate {
    0% {
        transform: translateY(0px) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100% {
        transform: translateY(-1000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
}
</style>
