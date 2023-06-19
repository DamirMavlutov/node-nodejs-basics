const fs = require("fs");
const list = async () => {
  const folderPath = "./files";
  try {
    const fileNames = fs.readdirSync(folderPath);
    fileNames.forEach((fileName) => console.log(fileName));
  } catch (error) {
    console.error(" FS operation failed", error.message);
  }
};

list();
