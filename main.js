const dailyButt = document.getElementById('daily');
const daily = document.getElementsByClassName('daily');

const weeklyButt = document.getElementById('weekly');
const weekly = document.getElementsByClassName('weekly');

const monthlyButt = document.getElementById('monthly');
const monthly = document.getElementsByClassName('monthly');

console.log(daily[0].classList.contains('show'));

dailyButt.addEventListener('click', () => {
    if(!daily[0].classList.contains('show')){
        for(let i = 0; i < daily.length; i++){
            daily[i].classList.add('show');
            weekly[i].classList.remove('show');
            monthly[i].classList.remove('show');
        }
        dailyButt.classList.add('active');
        weeklyButt.classList.remove('active');
        monthlyButt.classList.remove('active');
    }
})

weeklyButt.addEventListener('click', () => {
    if(!weekly[0].classList.contains('show')){
        for(let i = 0; i < weekly.length; i++){
            daily[i].classList.remove('show');
            weekly[i].classList.add('show');
            monthly[i].classList.remove('show');
        }
        dailyButt.classList.remove('active');
        weeklyButt.classList.add('active');
        monthlyButt.classList.remove('active');
    }
})

monthlyButt.addEventListener('click', () => {
    if(!monthly[0].classList.contains('show')){
        for(let i = 0; i < monthly.length; i++){
            daily[i].classList.remove('show');
            weekly[i].classList.remove('show');
            monthly[i].classList.add('show');
        }
        dailyButt.classList.remove('active');
        weeklyButt.classList.remove('active');
        monthlyButt.classList.add('active');
    }
})