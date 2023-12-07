let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #5a5492;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #5a5492;"> Soy licenciada en biología molecular.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
