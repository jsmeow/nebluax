const emojis = require('emoji.json');

function findEmoji(str) {
  console.log(
    emojis.reduce((hitList, obj, idx) => {
      Object.entries(obj).forEach(([str1, str2]) => {
        (str1.includes(str) || str2.includes(str)) &&
          hitList.push({ ...obj, index: idx });
      });
      return hitList;
    }, [])
  );
}

module.exports = findEmoji;
