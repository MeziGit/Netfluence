import 'react';

declare module 'react' {
  export interface MouseEvent<T = Element> extends React.SyntheticEvent<T, globalThis.MouseEvent> {}
  export interface ChangeEvent<T = Element> extends React.SyntheticEvent<T, globalThis.Event> {}
  export interface FormEvent<T = Element> extends React.SyntheticEvent<T, globalThis.Event> {}
} 