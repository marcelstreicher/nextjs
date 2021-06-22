
const mask = {
    tel: function (val) {
        if (val.length < 15) {
            var x = val.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})(\d{0,4})/);
        }
        else {
            var x = val.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
        }
        return !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
    }
}

export default mask;