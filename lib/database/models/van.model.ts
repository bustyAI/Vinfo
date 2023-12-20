import { Schema, model, models } from "mongoose";

const VanSchema = new Schema({
  vanId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  vanType: { type: String, required: true },
  fuelType: { type: String, required: true },
  fuelLevel: { type: Number },
  chargePercent: { type: Number },
  isCharging: { type: Boolean },
  maintenance: { type: String },
  isCharged: { type: Boolean },
});

const Van = models.Van || model("Van", VanSchema);

export default Van;
