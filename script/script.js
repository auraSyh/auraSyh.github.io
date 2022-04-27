function getPilihanComputer(){
    const comp = Math.random();
    if(comp*3 <= 1) return 'gajah';
    else if (comp*3 <= 2) return 'orang';
    return  'semut';
}

function getHasil(comp, player){
    if (comp == player) return 'SERI!';
    else if (comp == 'gajah') return (player == 'semut') ? 'MENANG!' : 'KALAH!';
    else if (comp == 'semut') return (player == 'orang') ? 'MENANG!' : 'KALAH!';
    else return (player == 'gajah') ? 'MENANG!' : 'KALAH!';
}

function putar(){
    const imgComputer = document.querySelector('.computer');
    const gambar =  ["gajah", "semut", "orang"];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime()-waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if(i == gambar.length) i = 0;
    }, 100)
}

const pilihan = document.querySelectorAll('.user img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanPlayer = pil.className.split(" ", 1);
        const pilihanComp = getPilihanComputer();
        const hasil = getHasil(pilihanComp, pilihanPlayer[0]);
        
        const imgComputer = document.querySelector('.computer');
        const info = document.querySelector('.info');

        putar();

        setTimeout(function(){
            imgComputer.setAttribute('src', 'img/'+pilihanComp+'.png');
            info.innerHTML = hasil;
        }, 1000)
        
    })
})
