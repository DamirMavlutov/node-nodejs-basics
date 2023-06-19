const fs = require("fs");
const remove = async () => {
  try {
    const wrongFile = "./files/wrongFilename.txt";

    if (!fs.existsSync(wrongFile)) {
      throw new Error("FS operation failed");
    }
    await fs.promises.unlink(wrongFile);
    console.log("Файл удален");
  } catch (err) {
    if (err) throw err; // не удалось переименовать файл
    console.log("Файл успешно переименован");
  }
};

remove();
