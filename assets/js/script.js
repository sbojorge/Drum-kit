let key_1 = document.getElementById("key_A");
key_1.addEventListener("click", playSound);

function playSound() {
    let sound = document.getElementById("clap");
    
    sound.autoplay = true;
    sound.load();
    
}