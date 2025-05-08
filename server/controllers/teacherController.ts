import Teacher from '../models/Teacher';

export const getTeachers = async (req, res) => {
  const teachers = await Teacher.find();
  res.json(teachers);
};

export const createTeacher = async (req, res) => {
  const newTeacher = new Teacher(req.body);
  await newTeacher.save();
  res.status(201).json(newTeacher);
};
