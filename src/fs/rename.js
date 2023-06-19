const fs = require("fs");
const rename = async () => {
  try {
    const wrongFile = "./files/wrongFilename.txt";
    const newFile = "./files/wrongFilename.md";
    if (!fs.existsSync(wrongFile) || fs.existsSync(newFile)) {
      throw new Error("FS operation failed");
    }
    await fs.promises.rename(wrongFile, newFile);
    console.log("Файл переименован");
  } catch (err) {
    if (err) throw err; // не удалось переименовать файл
    console.log("Файл успешно переименован");
  }
};
rename();
