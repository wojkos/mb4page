var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Mobile panels')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Professional mobile panels.')
    .pauseFor(2500)
    .deleteChars(1)
    .typeString('<strong> solutions</strong>')
    .pauseFor(2500)
    .start();
