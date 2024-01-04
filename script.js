const sounds = document.querySelectorAll('.sound')
const pads = document.querySelectorAll('.pads div')

console.log(sounds);
console.log(pads);

for (let i = 0; i < pads.length; i += 1) {
    pads[i].addEventListener('click', playSound(i));
}

function playSound(item) {
    return function () {
        sounds[item].play()
    }
}