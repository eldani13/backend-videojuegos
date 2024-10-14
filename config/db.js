// const mongoose = require('mongoose');

// const connectDB = async () => {
//   try {
//     await mongoose.connect('mongodb://localhost:27017/tienda', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Conectado a MongoDB');
//   } catch (err) {
//     console.error('Error al conectarse a MongoDB:', err);
//   }
// };

// module.exports = connectDB;

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://llluis123:Mi3rULGzP5Zy1aaN@digitalgames.2pxff.mongodb.net/digitalgames?retryWrites=true&w=majority&appName=digitalgames", {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    console.log(`MongoDB conectado: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error al conectar a MongoDB: ${error.message}`);
    process.exit(1); 
  }
};

module.exports = connectDB;

