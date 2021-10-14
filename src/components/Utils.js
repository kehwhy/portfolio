
const getTheme = (themeNumber) => {
    switch(themeNumber) {
        case 0: 
        return 'theme--fall'
        case 1:
        return 'theme--winter'
        case 2:
        return 'theme--spring'
        default:
        return 'theme--summer'
    }
    }