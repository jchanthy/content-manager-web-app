import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db';
import teacherRoutes from './routes/teacherRoutes';
import subjectRoutes from './routes/subjectRoutes';
import paymentRoutes from './routes/paymentRoutes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
connectDB();

app.use('/api/teachers', teacherRoutes);
app.use('/api/subjects', subjectRoutes);
app.use('/api/payments', paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
