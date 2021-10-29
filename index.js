let current=document.querySelector('.btn-1')
const btn1=document.querySelector('.btn-1')
const btn2=document.querySelector('.btn-2')
const btn3=document.querySelector('.btn-3')
const data=[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]
const work1=document.querySelector('.main-2 h1 span')
const work2=document.querySelector('.main-2 h5 span')
const play1=document.querySelector('.main-3 h1 span')
const play2=document.querySelector('.main-3 h5 span')
const study1=document.querySelector('.main-4 h1 span')
const study2=document.querySelector('.main-4 h5 span')
const exercise1=document.querySelector('.main-5 h1 span')
const exercise2=document.querySelector('.main-5 h5 span')
const social1=document.querySelector('.main-6 h1 span')
const social2=document.querySelector('.main-6 h5 span')
const selfcare1=document.querySelector('.main-7 h1 span')
const selfcare2=document.querySelector('.main-7 h5 span')

current.classList.add("active")

function f1(){
   work1.innerHTML=data[0].timeframes.daily.current
   work2.innerHTML=data[0].timeframes.daily.previous
   play1.innerHTML=data[1].timeframes.daily.current
   play2.innerHTML=data[1].timeframes.daily.previous
   study1.innerHTML=data[2].timeframes.daily.current
   study2.innerHTML=data[2].timeframes.daily.previous
   exercise1.innerHTML=data[3].timeframes.daily.current
   exercise2.innerHTML=data[3].timeframes.daily.previous
   social1.innerHTML=data[4].timeframes.daily.current
   social2.innerHTML=data[4].timeframes.daily.previous
   selfcare1.innerHTML=data[5].timeframes.daily.current
   selfcare2.innerHTML=data[5].timeframes.daily.previous
}
function f2(){
    work1.innerHTML=data[0].timeframes.weekly.current
    work2.innerHTML=data[0].timeframes.weekly.previous
    play1.innerHTML=data[1].timeframes.weekly.current
    play2.innerHTML=data[1].timeframes.weekly.previous
    study1.innerHTML=data[2].timeframes.weekly.current
    study2.innerHTML=data[2].timeframes.weekly.previous
    exercise1.innerHTML=data[3].timeframes.weekly.current
    exercise2.innerHTML=data[3].timeframes.weekly.previous
    social1.innerHTML=data[4].timeframes.weekly.current
    social2.innerHTML=data[4].timeframes.weekly.previous
    selfcare1.innerHTML=data[5].timeframes.weekly.current
    selfcare2.innerHTML=data[5].timeframes.weekly.previous
 }
 function f3(){
    work1.innerHTML=data[0].timeframes.monthly.current
    work2.innerHTML=data[0].timeframes.monthly.previous
    play1.innerHTML=data[1].timeframes.monthly.current
    play2.innerHTML=data[1].timeframes.monthly.previous
    study1.innerHTML=data[2].timeframes.monthly.current
    study2.innerHTML=data[2].timeframes.monthly.previous
    exercise1.innerHTML=data[3].timeframes.monthly.current
    exercise2.innerHTML=data[3].timeframes.monthly.previous
    social1.innerHTML=data[4].timeframes.monthly.current
    social2.innerHTML=data[4].timeframes.monthly.previous
    selfcare1.innerHTML=data[5].timeframes.monthly.current
    selfcare2.innerHTML=data[5].timeframes.monthly.previous
 }

f1()

btn1.addEventListener('click',()=>{
    current.classList.remove("active")
    btn1.classList.add("active")
    current=btn1;
    f1()
})

btn2.addEventListener('click',()=>{
    current.classList.remove("active")
    btn2.classList.add("active")
    current=btn2;
   f2()
})

btn3.addEventListener('click',()=>{
    current.classList.remove("active")
    btn3.classList.add("active")
    current=btn3;
    f3()
})

