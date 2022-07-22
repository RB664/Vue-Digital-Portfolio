<template>
<section id="skills" class=" ">
        <h1 id="skill" class="text-center">Skills</h1>
        <!-- <div class="container">
          <div data-aos="fade-right" data-aos-duration="1000">
            <div class="row">
              <div class="col-6">
                <h3>Soft Skills</h3>
               <p>Working independtly</p> 
              </div>
              <div class="col-6">
                <h3>Technical Skills</h3>
               <p>I have basic skills working with MS Office 2019, HTML, CSS, Boostrap, Javascript, Mysql, Vue.js</p> 
              </div>
            </div>
          </div>
        </div> -->
        <!-- <div class="container bg-secondary pb-3">
        <h3 class="text-center"><i class="fa-brands fa-html5">HTML 5</i></h3>
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style="width: 5%">5%</div>
        </div>
        <h3 class="text-center"><i class="fa-brands fa-css3-alt">CSS3</i></h3>
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style="width: 5%">5%</div>
        </div>
        <h3 class="text-center"><i class="fa-brands fa-bootstrap">BootStrap 5.1</i></h3>
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style="width: 5%">5%</div>
        </div>
        <h3 class="text-center"><i class="fa-brands fa-js">JavaScript</i></h3>
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style="width: 5%">0%</div>
        </div>
        <h3 class="text-center"><i class="fa-brands fa-microsoft">Microsoft Office 2019</i></h3>
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style="width: 5%">5%</div>
        </div>
        <h3 class="text-center"><i class="fa-brands fa-android">Android</i></h3>
        <div class="progress">
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100" style="width: 5%">5%</div>
        </div>
        </div> -->
        <div class="container">
            <div id="icons" class="row">
                <div class="col-3">
                    <i id="html" class="fa-brands fa-html5"></i>
                </div>
                <div class="col-3">
                    <i id="css" class="fa-brands fa-css3-alt"></i>
                </div>
                <div class="col-3">
                    <i id="bootstrap" class="fa-brands fa-bootstrap"></i>
                </div>
                <div class="col-3">
                    <i id="javascript" class="fa-brands fa-js"></i>
                </div>
            </div>
            <div id="images" class="row py-2">
                <div class="col-3">
                    <i id="github" class="fa-brands fa-github"></i>
                </div>
                <div class="col-3">
                    <img id="mysql" src="https://i.postimg.cc/W4M8pkwN/Database-mysql-svg.png" >
                </div>
                <div class="col-3">
                    <img id="office" src="https://i.postimg.cc/QMc4B5mY/Microsoft-Office.png">
                </div>
                <div class="col-3">
                    <img id="vuejs" src="https://i.postimg.cc/BbqKQbcR/58482acecef1014c0b5e4a1e.png">
                </div>
            </div>
        </div>
        
    </section>
</template>

<style>
#skills{
    /* border: 1px white solid; */
    color: white;
    padding-top: 100px;
}
#html{
    color: orangered;
    font-size: 100px;
}
#css{
    color: rgb(0, 160, 246);
    font-size: 100px;
}
#bootstrap{
    color: rgb(206, 0, 206);
    font-size: 100px;
}
#javascript{
    color: yellow;
    font-size: 100px;
}
#github{
    color: black;
    font-size: 100px;
}
#mysql{
    width: 100px;
    height: 140px;
}
#office{
    width: 120px;
    height: 120px;
}
#vuejs{
    width: 100px;
    object-fit: cover;
}
#icons{
    margin-top: 80px;
}
#images{
    margin-top: 30px;
}
</style>