import mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, required: true, unique: true },
  description: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' },
  syllabusFile: { type: String }, // URL or filename of uploaded syllabus
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Subject', subjectSchema);
