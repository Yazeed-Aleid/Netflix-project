const mongoose = require("mongoose");

const ListSchema = new mongoose.Schema(
  {
    title: { type: String, require: true, unique: true },
    desc: { type: String},
    img: { type: String },
    imgTitle: { type: String },
    imgsm: { type: String },
    trailer: { type: String },
    video: { type: String },
    year: { type: String },
    limit: { type: Number },
    genre: { type: String },
    isSeries: { type: Boolean,default:false },
  },
  { timestamps: true }
);

module.export = mongoose.model("List", ListSchema);
