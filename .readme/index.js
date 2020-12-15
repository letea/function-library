const glob = require("glob");
const path = require("path");

// node modules
const fs = require("fs");
const prettier = require("prettier");
const { formatFromString } = require("@quilicicf/markdown-formatter");

// Documents
const documents = glob.sync("**/*.doc.js").map(file => {
  return require(path.resolve(file));
});

const groupedDocuments = {};
documents.forEach(document => {
  const { kind } = document;
  const hasGroup = !!groupedDocuments[kind];
  if (hasGroup) {
    groupedDocuments[kind].push(document);
  } else {
    groupedDocuments[kind] = [document];
  }
});

console.log(groupedDocuments);

const jsFormat = (content = "") => {
  return prettier.format(content, {
    semi: true,
    parser: "babel"
  });
};

const main = async () => {
  // Library Title
  let readMe = `# Functions\n`;

  // NPM
  readMe +=
    "[![npm version](https://badge.fury.io/js/%40letea%2Ffunctions.svg)](https://badge.fury.io/js/%40letea%2Ffunctions)\n\n";

  // Library Description
  readMe += "A function library.\n";

  // Install
  readMe += "## Install\n";
  readMe += `\`\`\`bash\nnpm install @letea/functions\n\`\`\`\n`;

  // Functions
  Object.keys(groupedDocuments).forEach(key => {
    // Kind
    readMe += `# ${key}\n`;

    groupedDocuments[key].forEach(item => {
      // title
      readMe += `## ${item.title}\n`;

      // description
      readMe += `${item.description}\n`;

      // arguments
      readMe += "### arguments\n";
      readMe += `\`\`\`js\n${jsFormat(item.arguments)}\n\`\`\`\n`;

      // usage
      readMe += "### usage\n";
      readMe += `\`\`\`js\n${jsFormat(
        `import ${item.title} from "@letea/function/${item.title}";\n${item.usage}`
      )}\n\`\`\`\n`;

      // references
      if (item.references) {
        readMe += "### references\n";
        item.references.forEach(reference => {
          readMe += `- [${reference.title}](${reference.url})\n`;
        });
      }
    });
  });

  const { contents, messages } = await formatFromString(readMe);
  fs.writeFile("README.md", contents, function (err) {
    if (err) return console.log(err);
    console.log("Hello World > helloworld.txt");
  });
};

main();
