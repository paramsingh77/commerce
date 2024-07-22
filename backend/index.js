const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express();
const productRoutes = require('./Routes/productRoutes');
const productSingle = require('./Routes/productSingle');
const userRoute = require('./Routes/User.js')
const bodyParser = require("body-parser")
const cors = require('cors');
const {restrictToLoggedinUserOnly} = require('../backend/middleware/auth.js')
const staticRoute = require('./Routes/staticRouter.js')
const cookieParser = require("cookie-parser")
const createProductRoute  = require('./Routes/createProductRoute.js');
require('dotenv').config()

const router = express.Router();



const PORT = process.env.PORT || 3000
const MONGODB_URI = process.env.MONGODB_URI

app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(MONGODB_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB connection error:", err));

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({
  origin:['http://localhost:3001' , 'http://localhost:3000' ],
  credentials:true,
}));
  
app.use('/api/product',productRoutes);
// app.use('/api/product',productRoutes);
// app.use('/api/product',productRoutes);
// app.use('/api/product',p roductRoutes);
// app.use('/api/product',productRoutes);
app.use('/api/findproduct',productSingle);
app.use('/api/user',userRoute);
app.use('/',staticRoute);

app.use('/api/createProduct',restrictToLoggedinUserOnly,createProductRoute);
app.listen(PORT , () =>{
    console.log(`Server Running at ${PORT}`);
})



// 19bcs2420
// nkSz5rV3CPyZl2 Z4   