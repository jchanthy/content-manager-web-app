import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true },
  amount: { type: Number, required: true },
  reason: { type: String }, // e.g., "Created course outline", "Taught class"
  date: { type: Date, default: Date.now }
});

export default mongoose.model('Payment', paymentSchema);
