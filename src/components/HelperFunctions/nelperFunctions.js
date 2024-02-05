export function conditions(row) {
  const condition = row.split('\n');
  return condition;
}

export function minAge(row) {
  const condition = row.split('\n');
  const minAge = condition[0].split(': ')[1];
  return minAge;
}

export function getAccessory(arr1, arr2) {
  const shortRow = arr1?.filter(accessory => accessory.split(' ').length <= 2);
  if (shortRow?.length === 0) {
    const shortRowArr2 = arr2?.filter(
      accessory => accessory.split(' ').length <= 2
    );
    if (shortRowArr2.length > 0) {
      const randomIndex = Math.floor(Math.random() * shortRowArr2.length);
      return shortRowArr2[randomIndex];
    }
  } else {
    const randomIndex = Math.floor(Math.random() * shortRow?.length);
    return shortRow[randomIndex];
  }
  return null;
}

export function premium(year, type) {
  if (year > 2007) {
    return 'Premium';
  } else {
    return '';
  }
}

export function lastWord(obj) {
  const value = Object.values(obj)[0];
  if (value) {
    let words = value.split(' ');
    let lastWord = words[words.length - 1];
    return lastWord;
  }
}

export function preLastWord(obj) {
  const value = Object.values(obj)[0];
  if (value) {
    let words = value.split(' ');
    let lastWord = words[words.length - 2];
    return lastWord;
  }
}

export function replaseDot(value) {
  let number = (value / 1000).toString();
  let numberWithComma = number.replace('.', ',');
  return numberWithComma;
}
