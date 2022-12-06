const isTheWordSplit = (wordSplit) => {
  const newWord = wordSplit[0];
  const item = wordSplit[1]
          .split(",");
            for (let i = 0; i < item.length; i++) {
              for (let j = 0; j < item.length; j++) {
                if (item[i] + item[j] == newWord) {
                  return item[i] + "," + item[j];
      };
    };
  };
  return "not possible";
};



export { isTheWordSplit };
