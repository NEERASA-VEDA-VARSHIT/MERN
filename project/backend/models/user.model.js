import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true, 
      trim: true,
      minlength: 2,
      maxlength: 50
    },
    email: { 
      type: String, 
      required: true, 
      unique: true, 
      trim: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },
    password: { 
      type: String, 
      required: true,
      minlength: 6
    },
    avatar: { 
      type: String, 
      default: null 
    },
    isActive: { 
      type: Boolean, 
      default: true 
    }
  },
  { 
    timestamps: true,
    toJSON: {
      transform: function(doc, ret) {
        delete ret.password;
        return ret;
      }
    }
  }
);

const User = mongoose.model('User', userSchema);

export default User;