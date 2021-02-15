responseOK = (errno = 0, msg = '', data = undefined) => {
    return {
        errno,
        msg,
        data
    }
}


module.exports = {
    responseOK
}