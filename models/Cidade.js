import mongoose from 'mongoose'

const CidadeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    uf: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
})
export default mongoose.models.Cidade || mongoose.model('Cidade', CidadeSchema)