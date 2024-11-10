// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction = (...args: any) => any;

export type LoaderReturnType<T extends AnyFunction> = Awaited<
  ReturnType<ReturnType<T>>
>;
