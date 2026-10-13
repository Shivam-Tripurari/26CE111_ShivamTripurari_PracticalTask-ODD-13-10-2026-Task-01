function calculateBill() {
    const units = Number(document.getElementById("units").value);
    const consumerType = document.getElementById("consumerType").value;
    const rate = chooseRate(units);
    const baseAmount = calculateBase(units, rate);
    const surchargePercent = consumerType === "Commercial" ? 10 : 0;
    const surcharge = calculateSurcharge(baseAmount, surchargePercent);
    const fixedCharge = 50;
    const total = baseAmount + surcharge + fixedCharge;
    document.getElementById("result").textContent = "Rate: ₹" + rate + "/unit | Base: ₹" + baseAmount + " | Surcharge: ₹" + surcharge + " | Fixed: ₹" + fixedCharge + " | Total: ₹" + total;
    document.getElementById("breakdown").textContent = buildExamples();
}

function calculateSurcharge(amount, percentage) {
    return amount * (percentage / 100);
}

function chooseRate(units) {
    if (units >= 1 && units <= 100) {
        return 5;
    } else if (units >= 101 && units <= 300) {
        return 7;
    } else if (units > 300) {
        return 9;
    } else {
        return 0;
    }
}

function calculateBase(units, rate) {
    return units * rate;
}

function buildExamples() {
    let result = "";

    for (let units = 100; units <= 500; units += 100) {
        const rate = chooseRate(units);
        const baseBill = calculateBase(units, rate);

        result += `${units} units: Base bill = ${baseBill}\n`;
    }

    return result;

}
