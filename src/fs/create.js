import { promises } from "fs";
const create = async () => {
  try {
    await promises.writeFile("./files/fresh.txt", "Я свежий и молодой!", {
      flag: "wx",
    });
    console.log("Файл fresh.txt создан!");
  } catch (error) {
    console.error("Ошибка при создании файла fresh.txt:", error);
  }
};

await create();
