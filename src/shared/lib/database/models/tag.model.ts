import { Document, Schema, model, models } from "mongoose";

export interface Tag extends Document {
    _id: string;
  name: string;
}

const TagSchema = new Schema({
  name: { type: String, required: true, unique: true },

});

const Tag = models.Tag || model("Tag", TagSchema);

export default Tag;