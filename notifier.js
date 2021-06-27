function generateNoti(msg="Notifier",status="success",dur=5000){
    let mainlen = document.getElementsByClassName("notifier").length
    const body = document.getElementById("body")
    const main = document.createElement("div")
    if(mainlen<1){
        main.classList.add("notifier")
        body.append(main)
    }

    let notification = document.createElement("div")
    notification.classList.add("notification")
    notification.classList.add(status)
    notification.textContent = msg
    if(mainlen>0){
        document.getElementsByClassName("notifier")[0].append(notification)
    }else{
        main.append(notification)
    }
    setTimeout(()=>{notification.style.flex="0";notification.remove();},dur)

}