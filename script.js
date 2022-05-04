function carregar(){
    let msg=window.document.getElementById('test')
    let photo =window.document.getElementById('fotoedit')
    let hours=new Date()
    let horas=hours.getHours()
    let minutes=hours.getMinutes()
    msg.innerHTML=`Agora são ${horas} horas`

    if(horas >=0 && horas<12){
       msg.innerHTML=`Agora são ${horas}:${minutes} horas, tenha um Bom dia`
       photo.src='manha.jpg'
       

    }else if(horas >=12 && horas <18) {
        msg.innerHTML=`Agora são ${horas}:${minutes} horas, tenha uma Boa tarde`
        photo.src='tarde.jpg'
        
    

    }else{
        msg.innerHTML=`Agora são ${horas}:${minutes} horas, tenha uma Boa noite`
        photo.src='noite.jpg'

        
    }
    
}
