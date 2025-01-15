import { ReactNode } from "react";

export interface ButtonProps {
  label: string;
  onClick: () => void;
}
export interface DrawerState {
  isVisible: boolean;
  content: ReactNode;
  title: string;
  buttons: ButtonProps[];
}
export interface DrawerProps {
  state: DrawerState;
  toggle: () => void;
  setContent: (content: ReactNode) => void;
  setTitle: (title: string) => void;
  setButtons: (buttons: ButtonProps[]) => void;
}

export interface DrawerProviderProps {
  children: ReactNode;
}
