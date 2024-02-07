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
  const shortRow = arr1?.filter(accessory => accessory.split(' '));
  if (shortRow?.length === 0) {
    const shortRowArr2 = arr2?.filter(accessory => accessory.split(' '));
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

export function numberWithComma(number) {
  if (number.toString().split('').length <= 3) {
    return number;
  } else {
    return (number / 1000).toString().replace('.', ',');
  }
}
