function operatorTransfrom(attr, value, operator, comparisonType) {
    switch (comparisonType) {
        case ('"text"'):
        case ('"number"'):
            switch (operator) {
                case ("equals"):
                    return `subject[${attr}] === ${value}`

                case ("does not equal"):
                    return `subject[${attr}] !== ${value}`

                case ("contains"):
                    return `(subject[${attr}]).includes(${value})`

                case ("does not contain"):
                    return `!((subject[${attr}]).includes(${value}))`

                case ("starts with"):
                    return `(subject[${attr}]).startsWith(${value})`

                case ("does not start with"):
                    return `(!(subject[${attr}]).startsWith(${value}))`

                case ("ends with"):
                    return `(subject[${attr}]).endsWith(${value})`

                case ("does not end with"):
                    return `!((subject[${attr}]).endsWith(${value}))`

                case ("greater than"):
                    return `subject[${attr}] > ${value}`

                case ("greater or equal than"):
                    return `subject[${attr}] >= ${value}`

                case ("less than"):
                    return `subject[${attr}] < ${value}`

                case ("less or equal than"):
                    return `subject[${attr}] <= ${value}`

            }
        default:
            switch (operator) {
                case ("equals"):
                    return `subject[${attr}] === resource[${value}]`

                case ("does not equal"):
                    return `subject[${attr}] !== resource[${value}]`

                case ("contains"):
                    return `(subject[${attr}]).includes(resource[${value}])`

                case ("does not contain"):
                    return `!((subject[${attr}]).includes(resource[${value}]))`

                case ("starts with"):
                    return `(subject[${attr}]).startsWith(resource[${value}])`

                case ("does not start with"):
                    return `(!(subject[${attr}]).startsWith(resource[${value}]))`

                case ("ends with"):
                    return `(subject[${attr}]).endsWith(resource[${value}])`

                case ("does not end with"):
                    return `!((subject[${attr}]).endsWith(resource[${value}]))`

                case ("greater than"):
                    return `subject[${attr}] > resource[${value}]`

                case ("greater or equal than"):
                    return `subject[${attr}] >= resource[${value}]`

                case ("less than"):
                    return `subject[${attr}] < resource[${value}]`

                case ("less or equal than"):
                    return `subject[${attr}] <= resource[${value}]`

            }
    }
}

module.exports = { operatorTransfrom }