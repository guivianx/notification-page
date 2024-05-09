const counterNotification = document.getElementsByClassName('notiNumber')[0] // contador de quantas notificações ainda não foram lidass
const buttonMarkAll = document.getElementsByClassName('markAllReadButton')[0] // botao que vai marcar todas notificações como lidas
const iconNoti = document.querySelectorAll('.fa-solid') // bolinha laranja das notificações não lidas
const notification = document.querySelectorAll('.notification') // cada notificação não lida

function counter() {
    let notificationUnRead = document.querySelectorAll('.unRead')
    counterNotification.innerHTML = notificationUnRead.length
}
counter()

buttonMarkAll.addEventListener('click', () => {

    notification.forEach(noti => {
        noti.classList.remove('unRead')
        counter()
    })

    iconNoti.forEach(ico => {
        ico.classList.add('read')
    })
})

notification.forEach((noti, index) => {noti.addEventListener('click', () => {
    noti.classList.remove('unRead')
    iconNoti[index].classList.add('read')
    counter()
})})


// countent notification animation

const notiContent = document.getElementsByClassName('viewMessage')[0]
const content = document.getElementsByClassName('contentNoti')[0]

notiContent.addEventListener('click', () => {
    content.classList.contains('active') ? content.classList.remove('active') : content.classList.add('active')
})
