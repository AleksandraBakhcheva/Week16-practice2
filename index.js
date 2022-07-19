button = document.querySelector('.button');
button.onclick = getResult;

function getResult() {
    const carBrand = document.querySelector('.brand');
    let carPrice;
    
    // получение базовой цены
    if (carBrand.value == "Mercedes") {
        carPrice = 2000000;
    }
    if (carBrand.value == "Ferrari") {
        carPrice = 3000000;
    }
    if (carBrand.value == "Reno") {
        carPrice = 1300000;
    }
    if (carBrand.value == "BMW") {
        carPrice = 1700000;
    }
    if (carBrand.value == "Land Rover") {
        carPrice = 2500000;
    }

    // расчет новый/подержаный
    function newUsed() {
    let carCondition = document.querySelectorAll('.car-condition');
        if (carCondition[0].checked) {
            return 0;
        }
        if (carCondition[1].checked) {
            carPrice -= 200000;
        }
    }
    newUsed();

    // расчет пробега
    function mileAge() {
    let n = 0.5;
    a = document.querySelector('.mileage').value;
    let result = +a / +n;
    carPrice -= result;
    }
    mileAge();

    // выбор типа автомобиля
    function carType() {
    let carType = document.querySelectorAll('.car-type');
    if (carType[0].checked) {
        carPrice += 50000; 
    }
    if (carType[1].checked) {
        carPrice += 150000; 
    }
    if (carType[2].checked) {
        carPrice += 100000; 
    }
    if (carType[3].checked) {
        carPrice += 200000; 
    }
    }
    carType();

    // дополнительные опции
    function additionalOptions() {
    let addOptions = document.querySelectorAll('.additional-options');
    if (addOptions[0].checked) {
        carPrice += 300000;
    }
    if (addOptions[1].checked) {
        carPrice += 50000;
    }
    if (addOptions[2].checked) {
        carPrice += 40000;
    }
    }
    additionalOptions();

    let finalResult = carPrice.toLocaleString();
    document.querySelector('.result').innerHTML = (`Рыночная цена данного автомобиля составляет: ${finalResult} руб.`)
}