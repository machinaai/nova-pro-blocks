
import genBlockTags from "./genBlockTags.helper.js";

import { readdirSync, statSync, existsSync, readFileSync } from "fs";
import { join } from "path";

const gitUrl = "https://github.com/machinaai/nova-pro-blocks";

/**
 * Recorrer la dirección del archivo
 * @param path
 */
const getFolderTreeData = (filePath) => {

  
  const files = readdirSync(filePath);

  const blockList = files
    .map((fileName) => {
      let nameBlock;

      const status = statSync(join(filePath, fileName));
      if (
        status.isDirectory() &&
        fileName.indexOf(".") !== 0 &&
        fileName !== "EmptyPage"
      ) {
        const absPkgPath = join(filePath, fileName, "package.json");
        if (existsSync(absPkgPath)) {

        const data = readFileSync(absPkgPath, 'utf8');
        const nameBlock = JSON.parse(data);
          return {
            key: fileName,
            name: fileName,
            description: nameBlock.description,
            url: `${gitUrl}/tree/master/${fileName}`,
            path: fileName,
            features: [
              "antd",
              "i18n"
            ],
            img: `https://raw.githubusercontent.com/machinaai/nova-pro-blocks/master/${fileName}/snapshot.png`,
            tags: [
              `${genBlockTags(nameBlock.name)}`
            ],
            previewUrl: "https://preview.pro.ant.design/"
            }
        }
      }
      return undefined;
    })
    .filter((obj) => obj);


  return blockList;
};
export default getFolderTreeData;
