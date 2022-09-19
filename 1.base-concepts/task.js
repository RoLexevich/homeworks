"use strict"

function solveEquation(a, b, c) {
    let discriminant = Math.pow(b, 2) - 4 * a * c,
        arr = [];
    if (discriminant === 0) {
        arr.push(-b / (2 * a));
    } else if (discriminant > 0) {
        arr = [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)]
    }
    // код для задачи №1 писать здесь
    return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    let percentPerMonth,
        contributionNew,
        amountNew;

    if (parseFloat(percent)) {
        percentPerMonth = parseFloat(percent / 100 / 12);
    } else {
        return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
    }

    if (parseInt(contribution) || contribution == 0) {
        contributionNew = (parseInt(contribution)) ? parseInt(contribution) : 0;
    } else {
        return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    }

    if (parseInt(amount)) {
        amountNew = parseInt(amount);
    } else {
        return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
    }


    let today = new Date(),
        dateX = new Date(date),
        months = parseInt((dateX - today) / (1000 * 3600 * 24 * 30)),
        payToBank = amountNew - contributionNew,
        paymentPerMonth = payToBank * (percentPerMonth + percentPerMonth / (((1 + percentPerMonth) ** months) - 1)),
        totalAmount = paymentPerMonth * months;


    return parseFloat(totalAmount.toFixed(2));
}
