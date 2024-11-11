import { LegacyRef } from 'react';

type Ref =
  | React.MutableRefObject<unknown>
  | React.RefCallback<unknown | null>
  | null;

export default function mergeRef(ref1: Ref, ref2: Ref) {
  return (el: LegacyRef<HTMLElement> | HTMLElement | undefined) => {
    if (typeof ref1 === 'function') {
      ref1(el);
    } else if (ref1 !== null) {
      ref1.current = el;
    }

    if (typeof ref2 === 'function') {
      ref2(el);
    } else if (ref2 !== null) {
      ref2.current = el;
    }
  };
}
