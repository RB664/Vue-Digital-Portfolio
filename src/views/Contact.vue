<template>
<section id="contact">
    <h1>Contact</h1>
<div id="form" class="container w-75 mx-auto my-5 py-5" >
          <form action="https://formspree.io/f/xeqnyzjk" method="post">
              <div class="row my-2">
                  <label for="" class="col-md-2 col-form-label-lg">Name: </label>
                  <div id="forminput1" class="col-8">
                      <input id="name" name="name" type="text" placeholder="Enter your name" class="form-control form-floating">
                  </div>
              </div>
              <div class="row my-2">
                  <label for="" class="col-md-2 col-form-label-lg">Surame: </label>
                  <div id="forminput1" class="col-8">
                      <input id="surname" name="surname" type="text" placeholder="Enter your surname" class="form-control form-floating">
                  </div>
              </div>

           <div class="row my-2">
            <label for="" class="col-md-2 col-form-label-lg">Email Address: </label>
            <div class="col-8">
              <input type="email" class="form-control form-floating" id="email" name="email" placeholder="Enter your email">
            </div>
           </div>
           <div class="row my-2">
            <label for="" class="col-md-2 col-form-label-lg">Phone Number: </label>
            <div class="col-8">
              <input type="number" class="form-control form-floating" id="phone number" name="phone number" placeholder="Enter your phone number">
            </div>
            </div>
  
          <div class="row my-2">
              <label for="message" class="col-md-2 col-form-label-lg">Message: </label>
              <div id="forminput4" class="col-8 form-floating">
                  <textarea name="message" id="message" class="h-100 w-100">
                  </textarea>
              </div>
          </div>
          
          <div class="row my-2">
              <label class="col-md-2 col-form-label-lg"></label>
              <div id="forminput5" class="col-8 form-floating">
                  <button class="btn btn-primary w-100">
                      Submit
                  </button>
              </div> 
              
          </div>
        </form>
        <div id="buttons" class="container text-center form-floating">
      <button class="btn-lg"><a href="https://github.com/RB664" target="_blank"><i  id="github2" class="fa-brands fa-github"></i></a></button>
      <button class="btn-lg"><a href="https://www.linkedin.com/in/ridhaa-benjamin-23b876238/" target="_blank"><i id="linkedin" class="fa-brands fa-linkedin"></i></a></button>
  </div>
      </div>
</section>

</template>

<style>
#contact{
    color: white;
    padding-top: 100px ;
}
#github2{
    font-size: 30px;
}
#linkedin{
    font-size: 30px;
}
</style>