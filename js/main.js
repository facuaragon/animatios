let tl = gsap.timeline();
let textWrapper = document.querySelector(".titleh2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

let textWrapper2 = document.querySelector(".line2");
textWrapper2.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

let textWrapper3 = document.querySelector(".line3");
textWrapper3.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

let textWrapper4 = document.querySelector(".line4");
textWrapper4.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
// let titleContent = document.getElementById("title");
// titleContent.innerHTML =
//   "<div>" + titleContent.innerHTML.split("").join("</div><div>") + "</div>";

var textWrapper5 = document.querySelector(".line5");
var words = textWrapper5.textContent.split(/\s+/);
var wrappedContent = words
  .map(function (word) {
    return "<span class='word'>" + word + "</span>";
  })
  .join(" ");
textWrapper5.innerHTML = wrappedContent;

tl.from(".title", {
  duration: 1.5,
  opacity: 0,
  color: "black",
  borderColor: "white",
  ease: "linear",
  letterSpacing: "115px",
});
tl.from(".titleh2 .letter", {
  scaleY: 0,
  duration: 0.7,
  stagger: 0.02,
});
tl.from(".line2 .letter", {
  rotateY: "-90deg",
  duration: 1.5,
  stagger: 0.045,
});
tl.from(".line3 .letter", {
  translateY: "-50px",

  duration: 0.7,
  stagger: 0.05,
});
tl.from(".line4 .letter", {
  translateY: "50px",
  duration: 0.7,
  stagger: 0.05,
});
tl.from(".line5 .word", {
  translateY: "50px",
  duration: 0.7,
  stagger: 0.2,
});
tl.from(
  ".subtitle",
  {
    duration: 1,
    opacity: 0,
    x: 100,
    y: 50,
    scale: 0.1,
    color: "black",
    borderColor: "white",
    ease: "linear",
  },
  "-=1"
);
tl.from(".circle-1, .circle-2, .circle-3", {
  duration: 1,
  opacity: 0,
  y: 150,
  stagger: 0.25,
  ease: "back",
});
