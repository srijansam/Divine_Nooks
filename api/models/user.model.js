import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    avatar: {
      type: String,
      default:
        "https://imgs.search.brave.com/XyotP1TE52pc_lTfTu-CrYq99EUk_mahChGdaNAD12w/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC83MC8wMS9k/ZWZhdWx0LW1hbGUt/YXZhdGFyLXByb2Zp/bGUtaWNvbi1ncmV5/LXBob3RvLXZlY3Rv/ci0zMTgyNzAwMS5q/cGc"
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
