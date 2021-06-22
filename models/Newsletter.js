import mongoose from 'mongoose'

const NewsletterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'O cadastro precisa de ter um nome'],
    },
    email: {
        type: String,
        lowercase: true,
        required: [true, 'O cadastro precisa de ter um email'],
    },
    active: {
        type: Boolean,
        default:true,
    },
    
})

export default mongoose.models.Newsletter || mongoose.model('Newsletter', NewsletterSchema)