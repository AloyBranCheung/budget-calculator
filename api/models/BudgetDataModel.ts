import mongoose from "mongoose";
import BudgetDataSchema from "../schemas/budgetDataSchema";
import { BudgetDataAPIResponse } from "../@types/budgetDataApiResponse";
// The first argument is the singular name of the collection your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model
// name. Thus, for the example above, the model Tank is for the tanks collection
// in the database.
const BudgetDataModel = mongoose.model<BudgetDataAPIResponse>(
  "BudgetData",
  BudgetDataSchema
);

export default BudgetDataModel;
