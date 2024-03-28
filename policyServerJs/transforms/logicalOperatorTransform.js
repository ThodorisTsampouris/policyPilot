function logicalOperatorTransfrom(str1, str2, operator) {
    switch (operator) {
        case ("OR"):
            return `${str1} || ${str2}`
        case ("AND"):
            return `${str1} && ${str2}`
        case ("XOR"):
            return `(${str1} || ${str2}) && !(${str1} && ${str2})`

    }
}

module.exports = { logicalOperatorTransfrom }