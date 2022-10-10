<template>
  <section id="contact">
    <h1>Contact</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <div id="form" class="container my-5 py-5">
            <form
              action="https://formspree.io/f/xeqnyzjk"
              method="post"
              target="_blank"
            >
              <label for="">Name: </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                class="form-control form-floating"
              />
              <label for="">Surame: </label>
              <input
                id="surname"
                name="surname"
                type="text"
                placeholder="Enter your surname"
                class="form-control form-floating"
              />
              <label for="">Email Address: </label>
              <input
                type="email"
                class="form-control form-floating"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
              <label for="">Phone Number: </label>
              <input
                type="number"
                class="form-control form-floating"
                id="phone number"
                name="phone number"
                placeholder="Enter your phone number"
              />
              <label for="">Message: </label>
              <textarea
                name="message"
                id="message"
                class="h-100 w-100 form-floating"
              >
              </textarea>
              <button class="btn btn-primary my-3 form-floating">Submit</button>
            </form>
            <div id="buttons" class="container text-center form-floating">
              <button class="btn-lg">
                <a href="https://github.com/RB664" target="_blank"
                  ><i id="github2" class="fa-brands fa-github"></i
                ></a>
              </button>
              <button class="btn-lg">
                <a
                  href="https://www.linkedin.com/in/ridhaa-benjamin-23b876238/"
                  target="_blank"
                  ><i id="linkedin" class="fa-brands fa-linkedin"></i
                ></a>
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-6"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#contact {
  color: white;
  padding-top: 100px;
}


#github2 {
  font-size: 30px;
}

#linkedin {
  font-size: 30px;
}
.btn-lg{
    margin-right: 5px;
    margin-left:5px;
}
</style>
