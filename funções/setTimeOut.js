setTimeout(function(){
    console.log("Tempo esgotado")
}, 1000)

//setInterval (função, tempo ms)
 let Fps = Math.round(Math.random() * 30)
 const intervalo1 =  setInterval (function() {
    console.clear()
     console.log("Fps: ", + Fps)
     Fps = Fps +1
 }, 1000)

 setTimeout(function(){
    clearInterval(intervalo1)
    console.log("Conexão encerrada!")
 }, 5000)


