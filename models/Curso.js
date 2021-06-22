import mongoose, { SchemaTypes } from 'mongoose'

const CursoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    content: [String],
    payment: {
        type: Array
    },
    date: {
     type: String
    },
    datedetails: [
        {
            start: {
                type: Date
            },
            end: {
                type: Date
            },
        }
    ],
    cidade: {
        type: SchemaTypes.ObjectId, 
        ref: 'cidades'
    }
})
export default mongoose.models.Curso || mongoose.model('Curso', CursoSchema)