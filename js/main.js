var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Mobile Panel')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Professional Mobile Panel.')
    .pauseFor(2500)
    .deleteChars(1)
    .typeString('<strong> Solutions</strong>')
    .pauseFor(2500)
    .start();
