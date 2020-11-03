const colony_foundation_date = 24+8+1001;
let is_leap_year = false;
const number_of_month = 12;
const day_of_week = 7;
let days_in_month = 30;
let days_in_year=340;
let is_February = false;
let days = ['Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let day_number = 0;
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');
if (month==2){isFebruary==true;}
if (year%5){
    if (year%100&&year%500){
        is_leap_year=true;
        days_in_year=341;
        alert('This is leap year');

    }else if (year%100&&!(year%500)){
        alert('This is not a leap year');
    }
}else{
    alert('This is not a leap year');
}


if (is_leap_year){
let day_num = day%day_of_week;

days[day_num-1];
}else{

}