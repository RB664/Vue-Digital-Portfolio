<template>
  <section id="skills" class=" ">
    <h1 id="skill" class="text-center">Skills</h1>

    <div class="container">
      <div id="icons" class="row">
        <div class="card">
          <i id="html" class="fa-brands fa-html5"></i>
        </div>
        <div class="card">
          <i id="css" class="fa-brands fa-css3-alt"></i>
        </div>
        <div class="card">
          <i id="bootstrap" class="fa-brands fa-bootstrap"></i>
        </div>
        <div class="card">
          <i id="javascript" class="fa-brands fa-js"></i>
        </div>
      </div>
      <div id="images" class="row py-2">
        <div class="card">
          <i id="github" class="fa-brands fa-github"></i>
        </div>
        <div class="card">
          <img
            id="mysql"
            src="https://i.postimg.cc/W4M8pkwN/Database-mysql-svg.png"
          />
        </div>
        <div class="card">
          <img
            id="office"
            src="https://i.postimg.cc/QMc4B5mY/Microsoft-Office.png"
          />
        </div>
        <div class="card">
          <img
            id="vuejs"
            src="https://i.postimg.cc/BbqKQbcR/58482acecef1014c0b5e4a1e.png"
          />
        </div>
      </div>
    </div>
  </section>
  <section id="education">
    <h1 id="workeducation" class="text-center text-white">Education</h1>
    <div id="edu-container" class="container">
        <div class="row" id="experiences">
            <div>
                <h2>Lentegeur High School</h2>
                <ul>
                  <li>Matriculated at Lenteguer High in 2021.</li>
                  <li>Computer Applications Technology</li>
                  <li>Life Sciences</li>
                  <li>Mathematical Literacy</li>
                  <li>Business Studies</li>
                </ul>
            </div>
            <div>
                <h2>Life Choices</h2>
                <ul>
                  <li>Completed a Web Development Course at Life Choices Academy.</li>
                  <li>Currently upskilling myself at Life Choices Studio</li>
                </ul>
            </div>
  
        </div>
    </div>
  </section>
</template>

<style scoped>
section {
  overflow: hidden;
  width: 100vw;
  font-family: "Courier New", Courier, monospace;
}
h1 {
  font-family: "Peralta", cursive;
}
#skills {
  /* border: 1px white solid; */
  color: white;
  padding-top: 100px;
}
#html {
  color: orangered;
  font-size: 100px;
}
#css {
  color: rgb(0, 160, 246);
  font-size: 100px;
}
#bootstrap {
  color: rgb(206, 0, 206);
  font-size: 100px;
}
#javascript {
  color: yellow;
  font-size: 100px;
}
#github {
  color: black;
  font-size: 100px;
  margin-top: 15px;
}
#mysql {
  width: 100px;
  height: 140px;
  margin-left: 75px;
}
#office {
  width: 120px;
  height: 120px;
  margin-left: 70px;
}
#vuejs {
  width: 100px;
  object-fit: cover;
  margin-left: 70px;
  margin-top: 15px;
}
#icons {
  margin-top: 80px;
  justify-content: center;
  gap: 50px;
}
#images {
  margin-top: 30px;
  justify-content: center;
  gap: 50px;
}
#education {
  padding-top: 100px;
  color: white;
  text-align: start;
  padding-bottom: 150px;
}
#edu-container {
  justify-content: center;
  text-align: start;
  align-content: center;
}
.card {
  width: 280px;
  height: 150px;
  border: none;
  background: transparent;
}
.squares {
  height: 120vh;
}
#experiences{
    justify-content: center;
}
</style>
