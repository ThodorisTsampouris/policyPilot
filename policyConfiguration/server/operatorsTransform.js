function operatorTransfrom(attr, value, operator) {
    switch (operator) {
        case ("equals"):
            return `subject[${attr}] === ${value}`
            break;
        case ("does not equal"):
            return `subject[${attr}] !== ${value}`
            break;
        case ("contains"):
            return `(subject[${attr}]).includes(${value})`
            break;
        case ("does not contain"):
            return `!((subject[${attr}]).includes(${value}))`
            break;
        case ("starts with"):
            return `(subject[${attr}]).startsWith(${value})`
            break;
        case ("does not start with"):
            return `(!(subject[${attr}]).startsWith(${value}))`
            break;
        case ("ends with"):
            return `(subject[${attr}]).endsWith(${value})`
            break;
        case ("does not end with"):
            return `!((subject[${attr}]).endsWith(${value}))`
            break;
        case ("greater than"):
            return `subject[${attr}] > ${value}`
            break;
        case ("greater or equal than"):
            return `subject[${attr}] >= ${value}`
            break;
        case ("less than"):
            return `subject[${attr}] < ${value}`
            break;
        case ("less or equal than"):
            return `subject[${attr}] <= ${value}`
            break;
    }
}

module.exports = { operatorTransfrom }