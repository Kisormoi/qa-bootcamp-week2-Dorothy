function calculateTax(income: number, taxYear = 2022):number {
    if (taxYear < 2022)
        return income * 1.5
    return income * 1.8
}

calculateTax(20000);