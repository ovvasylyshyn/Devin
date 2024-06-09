import mongoose from "mongoose";
// import Category from "./categoryModel.js";

const productSchema = new mongoose.Schema({
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    priority: {
        type: Number,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    },
    assignedEmployee: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type:String,
        required: true,

    },
    cloudinaryPublicId: {
        type:String,
        required: true
    } 
}, {
    timestamps: true //important
})

const Product = mongoose.model('Product', productSchema)

export default Product;