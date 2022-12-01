import { createStore } from "vuex";

export default createStore({
  state: {
    projects: [
      {
        id: 1,
        image: "https://i.postimg.cc/TPy3Bj4Q/Age-to-Days.png",
        description: "Age to Days",
        live: "https://agetodaysrb.netlify.app/",
        github: "https://github.com/RB664/AgetoDays",
      },
      {
        id: 2,
        image: "https://i.postimg.cc/XJHxXb8n/Minutes-to-Seconds.png",
        description: "Minutes to Seconds",
        live: "https://minutestosecondsrb.netlify.app/",
        github: "https://github.com/RB664/MinutestoSeconds",
      },
      {
        id: 3,
        image: "https://i.postimg.cc/ZYjzFBfq/Area-of-Triangle.png",
        description: "Area of Triangle",
        live: "https://areaoftrianglerb.netlify.app/",
        github: "https://github.com/RB664/AreaofTriangle",
      },
      {
        id: 4,
        image: "https://i.postimg.cc/sDQyjfcD/Property-listing.png",
        description: "Property listing",
        live: "https://property-listingrb.netlify.app/",
        github: "https://github.com/RB664/Vue.js-Property-List",
      },
      {
        id: 5,
        image:
          "https://i.postimg.cc/d3YFyxHT/Rainbow-Designed-by-Ridhaa-Benjamin.png",
        description: "Rainbow",
        live: "https://rainbowrb.netlify.app/",
        github: "https://github.com/RB664/Rainbow",
      },
      {
        id: 6,
        image:
          "https://i.postimg.cc/WpBF9NKM/Calculator-Designed-by-Ridhaa-Benjamin.png",
        description: "Calculator",
        live: "https://calculatorrb.netlify.app/",
        github: "https://github.com/RB664/Calculator",
      },
    ],
    testimonials: [
      {
        id: 1,
        name: "Joel Mukanya - Coding Lecturer",
        image: "https://i.postimg.cc/2y59qddf/joel2.jpg",
        comment:
          "I am delighted to be called upon as a reference for Ridhaa. He has a gentle personality which makes him a pleasure to work with. In addition Ridhaa, he is a smart and dedicated person.",
      },
      {
        id: 2,
        name: "Ra'ees",
        image: "https://i.postimg.cc/5tTZnhbN/Raees-3-2.jpg",
        comment:
          "Ridhaa Benjamin is a great person with a passion for web development. He likes to make websites simple and fast. He is a quiet person but once you talk to him he is a great person to have around. Any team would be lucky to have him.",
      },
      {
        id: 3,
        name: "Saleem",
        image: "https://i.postimg.cc/G3QXpWV8/Saleem-1-2.jpg",
        comment:
          "Ridhaa is the type of person who always perseveres, he strives to do his best in any task he is given and is always willing to lend a hand to those in need. He would be a great addition to your company",
      },
      {
        id: 4,
        name: "Taucia",
        image: "https://i.postimg.cc/RhDfHLw8/taucia2.png",
        comment:
          "Ridhaa Benjamin is a quiet person that is very focused and hardworking he does his best at everything he does, he is a good web-developer.",
      },
      {
        id: 5,
        name: "Micheala",
        image: "https://i.postimg.cc/bYsT9mvd/Micheala-3-2.jpg",
        comment:
          "Ridhaa is very well-behaved, kind, smart dedicated person. Who always does his best and has the skills of a excellent worker.",
      },
      {
        id: 6,
        name: "Joshua",
        image: "https://i.postimg.cc/2SpLN6G4/Joshua-edit2.jpg",
        comment:
          "Ridhaa is a hard working guy that always does his work to the best of he's abilities and the work produced is no less then amazing and well worked on, he is a very soft spoken person but no doubt you would be very lucky to work with such an awesome guy.",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
