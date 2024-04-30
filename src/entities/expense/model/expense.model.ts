import { Document, Schema, model, models } from "mongoose";

export interface IExpense extends Document {
    _id:string,
    user: {_id:string}
    createdAt: Date,
    title:string,
    description:string,
    amount:number,
    date:Date
    tags: { _id:string, name: string}
}

const ExpenseSchema = new Schema({
  createdAt: { type: Date, default: Date.now },
  title: { type: String, required: true },
  amount: {type: Number, required: true},
  description: { type: String },
  date: {type: Date, required: true, default: Date.now},
  tags: {type: Schema.Types.ObjectId, ref: "Tags"},
  organizer: { type: Schema.Types.ObjectId, ref: "User" },
});

const Expense = models.Expense || model("Expense", ExpenseSchema);

export default Expense;