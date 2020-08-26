export function splitMessage(message, size) {
  if (typeof message !== 'string') {
    throw 'message is not string';
  }

  if (typeof size !== 'number') {
    throw 'size is not number';
  }

  if (message.length <= size) {
    return message;
  }

  const words = message.split(/\s+/);

  if (words.some(word => word.length > size)) {
    throw 'message contains span of non-whitespace characters longer than ' + size;
  }

  const chunks = [];
  const possiblePages = Math.ceil(message.length / size).toString();

  words.reduce((chunkStr, word, i, a) => {
    let pageIndex = (chunks.length + 1) + '/';
    if ((chunkStr.length + word.length + pageIndex.length + possiblePages.length) + 1 > size) {
      chunks.push(chunkStr);
      chunkStr = word;
    } else if (i === a.length - 1) {
      chunks.push(chunkStr + " " + word);
    } else {
      chunkStr += " " + word;
    }
    return chunkStr;
  }, '');

  return chunks.map((chunk, index) => `${index + 1}/${chunks.length} ${chunk.trim()}`)
}
