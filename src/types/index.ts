type JSONValue =
    | string
    | number
    | boolean
    | { [x: string]: JSONValue }
    | Array<JSONValue>;

type IterableObject = {
  [s: number]: number | string | boolean | IterableObject;
};

export {
  JSONValue,
  IterableObject,
};
