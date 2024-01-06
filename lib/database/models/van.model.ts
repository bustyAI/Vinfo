import { Schema, model, models } from "mongoose";

export interface IVan extends Document {
  _id: string;
  name: string;
  vanType: string;
  fuelType: string;
  fuelLevel: number;
  chargePercent?: number;
  isCharging?: boolean;
  maintenance?: string;
  isCharged?: boolean;
  creator: { _id: string; firstName: string; lastName: string };
}

const VanSchema = new Schema({
  name: { type: String, required: true },
  vanType: { type: String, required: true },
  fuelType: { type: String, required: true },
  fuelLevel: { type: Number },
  chargePercent: { type: Number },
  isCharging: { type: Boolean },
  maintenance: { type: String },
  isCharged: { type: Boolean },
  creator: { type: Schema.Types.ObjectId, ref: "User" },
});

const Van = models.Van || model("Van", VanSchema);

export default Van;
