
const helpers = {
    unformat: function(value){
        return (value.replace(/\D/g, '')/100).toFixed(2)
    },
    numeric: function(value){
        return value.replace(/\D/g, '')
    }
}

export default helpers;