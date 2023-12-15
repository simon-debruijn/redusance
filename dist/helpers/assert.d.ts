declare class AssertionError extends Error {
    name: string;
}
declare function assert(condition: boolean, msg?: string): asserts condition;

export { AssertionError, assert };
