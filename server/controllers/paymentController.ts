import Payment from '../models/Payment';

export const getPayments = async (req, res) => {
  const payments = await Payment.find().populate('teacher');
  res.json(payments);
};

export const createPayment = async (req, res) => {
  const newPayment = new Payment(req.body);
  await newPayment.save();
  res.status(201).json(newPayment);
};
