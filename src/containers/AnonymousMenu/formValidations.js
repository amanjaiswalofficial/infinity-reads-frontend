export const formValidator = (key, inputValue) => {
    let validationResponse = {}
    switch(key){
        case "password":
            validationResponse = validatePassword(inputValue)
            break
        case "firstName":
            validationResponse = validateName(inputValue)
            break
        case "lastName":
            validationResponse = validateName(inputValue)
            break
        case "emailId":
            validationResponse = validateEmail(inputValue)
            break
        default:
            break
    }
    return validationResponse
}

const validateName = (inputValue) => {
    let error = true
    let text = `Invalid ${inputValue}, can't be empty`
    if(inputValue.length > 0){
        error = false
        text = ""
    }
    return {
        error,
        text
    }
}
const validateEmail = (inputValue) => {
    let error = true
    let text = "Invalid email, ensure correct format for an email address."

    var regexPattern = new RegExp("^[A-Za-z]+@[A-Za-z0-9]+\.[A-Za-z]{2,3}$", "g")
    var res = regexPattern.test(inputValue)
    if(res){
        error = false
        text = ""
    }
    return {
        error,
        text
    }
}
const validatePassword = (inputValue) => {
    let error = true
    let text = "Password must contain 8 letters"

    if(inputValue.length > 7){
        error = false
        text = ""
    }
    return {
        error,
        text
    }
}
