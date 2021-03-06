import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  userName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: String, required: true },
  experience: { type: String, required: true },
  transportName: { type: String, required: true },
  truckNumber: { type: String, required: true },
  truckCapacity: { type: String, required: true },

  sourceStateOne: { type: String, required: true },
  sourceCityOne: { type: String, required: true },
  destinationStateOne: { type: String, required: true },
  destinationCityOne: { type: String, required: true },

  sourceStateTwo: { type: String, required: true },
  sourceCityTwo: { type: String, required: true },
  destinationStateTwo: { type: String, required: true },
  destinationCityTwo: { type: String, required: true },

  sourceStateThree: { type: String, required: true },
  sourceCityThree: { type: String, required: true },
  destinationStateThree: { type: String, required: true },
  destinationCityThree: { type: String, required: true },

  id: { type: String },
});
export default mongoose.model("drivers", userSchema);
