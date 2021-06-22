import mongoose from 'mongoose'

const RegistrationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O inscrito precisa de ter um nome'],
    },
    email: {
        type: String,
        required: [true, 'O inscrito precisa de ter um email'],
    },
    modules: {
        type: Array,
        required: [true, 'O escrito precisa selecionar ao menos um módulo']
    },
    payment: {
        type: String
    },
    tel: {
     type: String
    },
    instagram: {
        type: String
    },
    valor: {
        type: Number,
    },
    valorprazo: {
        type: Number
    },
    city: {
        type: String
    }
})

export default mongoose.models.Registration || mongoose.model('Registration', RegistrationSchema)