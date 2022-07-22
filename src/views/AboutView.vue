<template>
  <section id="about">
    <h1>About</h1>
    <div id="about-container" class="container">
      <div class="row">

        <div class="col-12 col-md-6 col-lg-6">
          <img src="https://i.postimg.cc/g2SY5hvT/Ridhaa-4.jpg" alt="Me" id="Me" class="img-fluid">
        </div>
        <div id="Aboutme" class="col-12 col-md-6 col-lg-6">
        <div class="row align-items-start text-align-start">
          <div class="col">
            <h3>Who am I</h3>
            <p>I would describe myself as someone who is introverted and antisocial. My passion for the tech industry
              started as I was growing up. I used computers at a very young age, playing games on them and watching my
              father fix computers. Everything about it piqued my interest, and I decided that when I'm older, I'll work
              with technology.</p>
          </div>
          <div class="col">
            <h3 class="pl-3">Hobbies</h3>
            <ul>
              <li>Playing Video Games</li>
              <li>Watching Anime</li>
              <li>Listening to music</li>
            </ul>
          </div>
          <div id="personal" class="container">
            <div class="row">
              <h3 class="mt-3">Personal Details</h3>
              <div class="col-6">
                <p>Full name :</p>
                <p>Date of Birth :</p>
                <p>Gender :</p>
                <p>Location :</p>
                <p>Phone number :</p>
                <p>Email :</p>
                <p>Willing to Recolate :</p>
                <p>GitHub :</p>
                <p>LinkedIn :</p>
              </div>

              <div id="pinfo" class="col-6">
                <p>Ridhaa Benjamin</p>
                <p>06/06/2004</p>
                <p>Male</p>
                <p>Mitchell's Plain</p>
                <p>+27 82 572 7156</p>
                <p>ridhaabenjamin06@gmail.com</p>
                <p>No</p>
                <a href="https://github.com/RB664" target="_blank">
                  <p>https://github.com/RB664</p>
                </a>
                <a href="https://www.linkedin.com/in/ridhaa-benjamin-23b876238/" target="_blank">
                  <p>https://www.linkedin.com/in/ridhaa-benjamin-23b876238/</p>
                </a>
              </div>
            </div>

          </div>
        </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style>
#about {
  padding-top: 80px;
  color: white;
  text-align: start;
}

.about-container {
  gap: 25px;
  margin: 25px 25px 25px 25px
}

#Me {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

h1 {
  text-align: center;
}
@media only screen and (max-width: 320px) {
  #Aboutme{
    font-size: xx-small;
  }
}
@media only screen and (max-width: 375px) {
  #Aboutme{
    font-size: xx-small;
  }
}
</style>