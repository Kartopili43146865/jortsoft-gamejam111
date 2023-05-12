let coin = 0
if(localStorage.getItem("myData") !== null) {
    coin = parseInt(localStorage.getItem("myData"));
}

document.querySelector('.coin div').textContent = coin

const buy1 = document.querySelector('.lk-1 button')
const buy2 = document.querySelector('.lk-2 button')
const buy3 = document.querySelector('.lk-3 button')

let n1 = 250
let n2 = 250
let n3 = 250

if(localStorage.getItem("lvl1") == undefined){
    localStorage.setItem("lvl1", 1)
}
if(localStorage.getItem("lvl2") == undefined){
localStorage.setItem("lvl2", 1)
}
if(localStorage.getItem("lvl3") == undefined){
    localStorage.setItem("lvl3", 1)
}

document.querySelector('.lk-1 .lvl span').textContent = localStorage.getItem('lvl1')
document.querySelector('.lk-2 .lvl span').textContent = localStorage.getItem('lvl2')
document.querySelector('.lk-3 .lvl span').textContent = localStorage.getItem('lvl3')

document.querySelector('.cost-1 span').textContent = n1
document.querySelector('.cost-2 span').textContent = n2
document.querySelector('.cost-3 span').textContent = n3

if(localStorage.getItem("speedCost") == undefined){
    localStorage.setItem("speedCost", n1)
}
if(localStorage.getItem("sizeCost") == undefined){
localStorage.setItem("sizeCost", n2)
}
if(localStorage.getItem("timeCost") == undefined){
    localStorage.setItem("timeCost", n3)
}

document.querySelector('.cost-1 span').textContent = localStorage.getItem("speedCost")
document.querySelector('.cost-2 span').textContent = localStorage.getItem("sizeCost")
document.querySelector('.cost-3 span').textContent = localStorage.getItem("timeCost")


if(localStorage.getItem("mySpeed") == undefined){
    localStorage.setItem("mySpeed", 15)
}
if(localStorage.getItem("mySize") == undefined){
localStorage.setItem("mySize", 70)
}
if(localStorage.getItem("myTime") == undefined){
    localStorage.setItem("myTime", 60)
}

if(coin >= localStorage.getItem("speedCost") && parseInt(localStorage.getItem('lvl1')) != 10) {
    buy1.classList.add('green')
} else {
    buy1.classList.remove('green')
}

if(coin >= localStorage.getItem("sizeCost") && parseInt(localStorage.getItem('lvl2')) != 10) {
    buy2.classList.add('green')
} else {
    buy2.classList.remove('green')
}
if(coin >= localStorage.getItem("timeCost") && parseInt(localStorage.getItem('lvl3')) != 10) {
    buy3.classList.add('green')
} else {
    buy3.classList.remove('green')
}

buy1.addEventListener('click', function(){
    
        if(parseInt(localStorage.getItem('lvl1')) < 10){
            if(coin >= localStorage.getItem("speedCost")){
        localStorage.setItem("mySpeed", parseInt(localStorage.getItem("mySpeed")) - 0.5)
        coin = parseInt(coin) - n1
        localStorage.setItem("myData", coin)
        document.querySelector('.coin div').textContent = coin
        localStorage.setItem("speedCost", parseInt(localStorage.getItem("speedCost")) + n1)
        document.querySelector('.cost-1 span').textContent = localStorage.getItem("speedCost")
        localStorage.setItem("lvl1", parseInt(localStorage.getItem('lvl1')) + 1)
        document.querySelector('.lk-1 .lvl span').textContent = localStorage.getItem('lvl1')
        if(parseInt(localStorage.getItem('lvl1')) === 10) {
            buy1.classList.remove('green')
             document.querySelector('.cost-1').textContent = "max"
        }
        }else{
            alert('A coin is not enought')
        }

    } else{
        alert('speed is maxed')
    }
    if(coin >= localStorage.getItem("speedCost") && parseInt(localStorage.getItem('lvl1')) !== 10) {
        buy1.classList.add('green')
    } else {
        buy1.classList.remove('green')
    }
    
    if(coin >= localStorage.getItem("sizeCost") && parseInt(localStorage.getItem('lvl2')) !== 10) {
        buy2.classList.add('green')
    } else {
        buy2.classList.remove('green')
    }
    if(coin >= localStorage.getItem("timeCost") && parseInt(localStorage.getItem('lvl3')) !== 10) {
    buy3.classList.add('green')
} else {
    buy3.classList.remove('green')
}
})
if(parseInt(localStorage.getItem('lvl1')) == 10) {
    buy1.classList.remove('green')
    document.querySelector('.cost-1').textContent = "max"
}
if(parseInt(localStorage.getItem('lvl2')) == 10) {
    buy2.classList.remove('green')
    document.querySelector('.cost-2').textContent = "max"
}
if(parseInt(localStorage.getItem('lvl3')) == 10) {
    buy2.classList.remove('green')
    document.querySelector('.cost-3').textContent = "max"
}

buy2.addEventListener('click', function(){
        if(parseInt(localStorage.getItem('lvl2')) < 10){
            if(coin >= localStorage.getItem("sizeCost")){
            localStorage.setItem("mySize", parseInt(localStorage.getItem("mySize")) + 1)
        coin = parseInt(coin) - n2
        localStorage.setItem("myData", coin)
        document.querySelector('.coin div').textContent = coin
        localStorage.setItem("sizeCost", parseInt(localStorage.getItem("sizeCost")) + n2)
        document.querySelector('.cost-2 span').textContent = localStorage.getItem("sizeCost")
        localStorage.setItem("lvl2", parseInt(localStorage.getItem('lvl2')) + 1)
        document.querySelector('.lk-2 .lvl span').textContent = localStorage.getItem('lvl2')
        if(parseInt(localStorage.getItem('lvl2')) == 10) {
            buy2.classList.remove('green')
            document.querySelector('.cost-2').textContent = "max"
        }
        } else {
            alert('A coin is not enought')
        }
        
    } else{
        alert('size is maxed')
    }
    if(coin >= localStorage.getItem("speedCost") && parseInt(localStorage.getItem('lvl1')) !== 10) {
        buy1.classList.add('green')
    } else {
        buy1.classList.remove('green')
    }
    
    if(coin >= localStorage.getItem("sizeCost") && parseInt(localStorage.getItem('lvl2')) !== 10) {
        buy2.classList.add('green')
    } else {
        buy2.classList.remove('green')
    }
    if(coin >= localStorage.getItem("timeCost") && parseInt(localStorage.getItem('lvl3')) !== 10) {
    buy3.classList.add('green')
} else {
    buy3.classList.remove('green')
}
})

buy3.addEventListener('click', function(){
    if(parseInt(localStorage.getItem('lvl3')) < 10){
        if(coin >= localStorage.getItem("timeCost")){
        localStorage.setItem("myTime", parseInt(localStorage.getItem("myTime")) + 5)
    coin = parseInt(coin) - n3
    localStorage.setItem("myData", coin)
    document.querySelector('.coin div').textContent = coin
    localStorage.setItem("timeCost", parseInt(localStorage.getItem("timeCost")) + n3)
    document.querySelector('.cost-3 span').textContent = localStorage.getItem("timeCost")
    localStorage.setItem("lvl3", parseInt(localStorage.getItem('lvl3')) + 1)
    document.querySelector('.lk-3 .lvl span').textContent = localStorage.getItem('lvl3')
    if(parseInt(localStorage.getItem('lvl3')) == 10) {
        buy2.classList.remove('green')
        document.querySelector('.cost-3').textContent = "max"
    }
    } else {
        alert('A coin is not enought')
    }
    
} else{
    alert('size is maxed')
}
if(coin >= localStorage.getItem("speedCost") && parseInt(localStorage.getItem('lvl1')) !== 10) {
    buy1.classList.add('green')
} else {
    buy1.classList.remove('green')
}

if(coin >= localStorage.getItem("sizeCost") && parseInt(localStorage.getItem('lvl2')) !== 10) {
    buy2.classList.add('green')
} else {
    buy2.classList.remove('green')
}
if(coin >= localStorage.getItem("timeCost") && parseInt(localStorage.getItem('lvl3')) !== 10) {
    buy3.classList.add('green')
} else {
    buy3.classList.remove('green')
}
})