/// <reference types="react-scripts" />

declare namespace React {
  interface MouseEvent<T = Element> extends React.SyntheticEvent<T, globalThis.MouseEvent> {}
  interface ChangeEvent<T = Element> extends React.SyntheticEvent<T, globalThis.Event> {}
  interface FormEvent<T = Element> extends React.SyntheticEvent<T, globalThis.Event> {}
} 