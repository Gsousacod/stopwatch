//========Modificar o ponteiro=======
function updateClock() {
    const secondDegree = seconds * 6;
    document.getElementById('second').style.transform = `rotate(${secondDegree}deg)`;
}
/// =========Mecânica do cronômetro========
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const parar = document.querySelector('.parar');
const zerar = document.querySelector('.zerar');
let [seconds,minutes,hours] = [0,0,0];
let intervalId;  // Armazenar o identificador do setInterval
let controller = false;

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`
}

iniciar.addEventListener('click', () => {
    if (!controller) { // Evitar múltiplos setInterval
        controller = true;
        intervalId = setInterval(function () {
            seconds++;
            if (seconds == 60) {
                seconds = 0;
                minutes++;

                if (minutes == 60) {
                    minutes = 0;
                    hours++;
                }
            }
            relogio.innerHTML = `${zeroAEsquerda(hours)} : ${zeroAEsquerda(minutes)} : ${zeroAEsquerda(seconds)}`;
            updateClock();
        }
        , 1000);
    }
});

parar.addEventListener('click', function (e) {
    controller = false;
    clearInterval(intervalId);  // Parar o setInterval
});

zerar.addEventListener('click', function (e) {
    controller = false;
    clearInterval(intervalId);  // Parar o setInterval
    relogio.innerHTML = `00 : 00 : 00`
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateClock();
});
//=============================================================================