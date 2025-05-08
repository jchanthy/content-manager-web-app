import Subject from '../models/Subject';

export const getSubjects = async (req, res) => {
  const subjects = await Subject.find().populate('teacher');
  res.json(subjects);
};

export const createSubject = async (req, res) => {
  const { name, code, description, teacher, syllabusFile } = req.body;
  const newSubject = new Subject({ name, code, description, teacher, syllabusFile });
  await newSubject.save();
  res.status(201).json(newSubject);
};
