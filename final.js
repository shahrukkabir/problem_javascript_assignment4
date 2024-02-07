//Problem-1
function calculateMoney(ticketSale) {

    if (ticketSale < 0) {
        return "Invalid Number"
    }

    const daroanKoros = 500;
    const stafKoros = 400;
    const fixedKoros = daroanKoros + stafKoros ;
    const perTicketPrice = 120;
    const totalEarn = ticketSale * perTicketPrice;
    const finalAmount = totalEarn - fixedKoros;
    return finalAmount;
}
//Problem-2
function checkName(name) {
    if (typeof name !== 'string') {
        return "invalid";
    }
    const len = name.length;
    const allowedCharacters = "AaYyEeOoUuWw";
    const lastChar = name.charAt(len - 1); 
    if (allowedCharacters.includes(lastChar)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}
//Problem-3
function deleteInvalids(arr) {

    if (!Array.isArray(arr)) {
        return "Invalid Array";
    }

    const filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;
}

//Problem-4
function password(obj) {

    if (!obj.siteName || typeof obj.siteName !== 'string') {
        return "invalid";
    }
    if (!obj.name || typeof obj.name !== 'string') {
        return "invalid";
    }
    if (!obj.birthYear || typeof obj.birthYear !== 'number' || String(obj.birthYear).length !== 4) {
        return "invalid";
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const siteName = capitalizeFirstLetter(obj.siteName);
    const year = obj.birthYear;
    const name = obj.name;
    const final = siteName + "#" + name + "@" + year;
    return final;
}

//Problem-5
function monthlySavings(payments, livingCost) {

    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input";
    }

    let totalIncome = 0;
    for (let i = 0; i < payments.length; i++) {
        totalIncome += payments[i];
    }

    let remainingIncome = totalIncome;
    for (let payment of payments) {
        if (payment >= 3000) {
            remainingIncome -= payment * 0.2;
        }
    }
    remainingIncome -= livingCost;

    if (remainingIncome < 0) {
        return "earn more";
    }
    return remainingIncome;
}
 