export const isObjectEmpty = (objectData) => {
  if (
    (Object.keys(objectData).length === 0 &&
      objectData.constructor === Object) ||
    objectData.length === 0
  )
    return true;

  return false;
};