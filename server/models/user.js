import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const userSchema = mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    email:{type:String,required:true},
    hash_password:{type:String,required:true},
    role:{
        type: String,
        enum:['user','admin'],
        default: 'user'
    }
},{timestamps:true}); 


userSchema.virtual('fullname')
.get(function(){
return `${this.firstName} ${this.lastName}`;
});

userSchema.methods={
    authenticate: function(password){
        return bcrypt.compare(password,this.hash_password);
    }
}

const User = mongoose.model("User", userSchema);
export default User;