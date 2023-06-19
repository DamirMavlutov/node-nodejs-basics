const fs = require("fs");
const path = require("path");

async function copyFiles() {
  const sourceDir = "files";
  const targetDir = "files_copy";

  if (!fs.existsSync(sourceDir) || fs.existsSync(targetDir)) {
    throw new Error("FS operation failed");
  }

  try {
    fs.mkdirSync(targetDir);

    const files = fs.readdirSync(sourceDir);
    for (let index = 0; index < files.length; index++) {
      const file = files[index];

      const sourcePath = path.join(sourceDir, file);
      const targetPath = path.join(targetDir, file);

      await fs.promises.copyFile(sourcePath, targetPath);
    }

    console.log("Files copied successfully.");
  } catch (error) {
    console.error("FS operation failed:", error);
  }
}

copyFiles();
