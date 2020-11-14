var canvas = document.getElementById("canvas");
var pensamentos = document.getElementById("pensamentos");
var meditacao = document.getElementById('meditacao')
var presente = document.getElementById('presente')
var fantasia = ['E se eu...', ' Podia ter sido...', 'Se eu fosse...'];
var passado = ['Ela disse...', 'Aquela viagem que fiz', '...e passei vergonha'];
var futuro = ['Viagem semana que vem', 'Vou falar...', 'Preciso fazer...', 'Segunda eu vou...'];


// Dimensões do canvas
canvas.width = 200;
canvas.height = 200;

// Contexto de desenho
var c = canvas.getContext('2d');
var c2 = canvas.getContext('2d');

// Radius
var radius = 30;

// Posição inicial
var x = radius + Math.random() * (200 - radius * 2);
var y = radius + Math.random() * (200 - radius * 2);

// Velocidade nas direções x e y
var dx = 0.7;
var dy = 0.7;


function animate() {

    requestAnimationFrame(animate);

    c.clearRect(0, 0, 200, 200);
    c2.clearRect(0, 0, 200, 200);

    if (x + radius > 200 || x - radius < 0) {

        dx = -dx;
    }

    if (y + radius > 200 || y - radius < 0) {

        dy = -dy;
    }

    x += dx;
    y += dy;

    if (x < 31) {
        Math.floor(Math.random() * (2 - 0 + 1)) + 0;
        pensamentos.style.opacity = 1;
        pensamentos.style.marginLeft = "-165px";
        pensamentos.style.marginTop = "40";
        pensamentos.innerHTML = passado[p];
    } else if (x > 168) {
        p = Math.floor(Math.random() * (3 - 0)) + 0;
        pensamentos.style.opacity = 1;
        pensamentos.style.marginLeft = "175px";
        pensamentos.style.marginTop = "40";
        pensamentos.innerHTML = futuro[p];
    } else if (y < 31) {
        p = Math.floor(Math.random() * (3 - 0)) + 0;
        pensamentos.style.opacity = 1;
        pensamentos.style.marginLeft = "20px";
        pensamentos.style.marginTop = "-10";
        pensamentos.innerHTML = fantasia[p];
    } else if (y > 168) {
        meditacao.style.opacity = 1;
        presente.style.color = 'white'
    } else if (x > 70 && x < 148 && y > 70 && y < 128) {
        pensamentos.style.opacity = 0;
        meditacao.style.opacity = 0;
        pensamentos.style.marginTop = "0";
        presente.style.color = 'black'
    }

    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.stroke();

    c2.beginPath();
    c2.arc(x, y, 10, 0, Math.PI * 2, false);
    c2.stroke();
}

animate();