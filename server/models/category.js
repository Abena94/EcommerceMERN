import mongoose from 'mongoose';
const {Schema}=mongoose;

const categorySchema =mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim:true,
    
},
slug: { 
    type: String,
    required: true,
    unique:true 
}
},{ timestamps: true });
const Category=mongoose.model('Category',categorySchema);
export default Category;