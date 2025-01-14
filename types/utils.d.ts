/**
 * Merge Objects Array
 *
 * @example
 * // if array
 * [{ a: {}, b: {} }, { c: {} }] => { a: {}, b: {}, c: {} }
 *
 * // if object
 * {} => {}
 */
export type MergeObjectsArray<T> = T extends Array<infer U>
  ? {
      [K in keyof U]: U[K];
    }
  : T;

/**
 * If the first type is of type `unknown`, change it to the second type.
 */
export type IfUnknown<T, X> = unknown extends T ? X : T;


