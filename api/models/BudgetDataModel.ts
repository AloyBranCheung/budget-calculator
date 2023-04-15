import mongoose from "mongoose";
import BudgetDataSchema from "../schemas/budgetDataSchema";
// The first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model
// name. Thus, for the example above, the model Tank is for the tanks collection
// in the database.
const BudgetDataModel = mongoose.model("BudgetData", BudgetDataSchema);

export default BudgetDataModel;
export type BudgetDataDocumentType = typeof BudgetDataModel;
