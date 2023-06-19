const fs = require("fs");
const read = async () => {
  try {
    const fileNames = await fs.promises.readdir(
      "./files/fileToRead.txt",
      (err, files) => {
        if (err) throw err; // не прочитать содержимое папки
        console.log(files);
      }
    );
  } catch (error) {
    console.error(" FS operation failed", error.message);
  }
};

read();
