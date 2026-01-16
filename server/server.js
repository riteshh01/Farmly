import cookieParser from "cookie-parser";
import express from "express";
import cors from 'cors';
import connectDB from "./configs/db.js";
import 'dotenv/config'
import userRouter from "./routes/userRoutes.js";
import sellerRouter from "./routes/sellerRoute.js";
import connectCloudinary from "./configs/cloudinary.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import addressRoute from "./routes/addressRoute.js";
import orderRouter from "./routes/orderRoute.js";
import { stripeWebhooks } from "./controllers/orderController.js";

const app = express();
const port = process.env.PORT || 5000;

// Connect to MongoDB
await connectDB();
await connectCloudinary();

const allowedOrigins = [
  'https://farmlyy.vercel.app',
  'http://localhost:5173' 
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "token", "sellerToken"]
}));

app.post('/stripe', express.raw({type: 'application/json'}), stripeWebhooks)

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}));




app.get("/", (req,res) => {
    res.send("API is Working");
});

app.use('/api/user', userRouter);
app.use('/api/seller', sellerRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/address', addressRoute);
app.use('/api/order', orderRouter);


app.listen(port, ()=>{
    console.log(`app listening on port ${port}`);
})