const multer = require("multer");
const path = require("path");

// define path untuk simpan file imagenya ke public
// const publicDir = path.join(__dirname, "./../../public");
// const uploadDir =  path.join(publicDir, "uploads");

const storage = multer.memoryStorage()



// // fungsi dari multer utk menyimpan storage yg di upload
// const storage = multer.diskStorage({
//  destination: (req, file, cb) => {
//     cb(null, uploadDir)
//  },

//  filename: (req, file, cb) => {
//     const uniqSuffix = Date.now() + `-` + Math.round(Math.random() * 1E9);
//     cb(null, file.fieldname + '-' + uniqSuffix + path.extname(file.originalname))
//  }
// })

module.exports = multer({storage})