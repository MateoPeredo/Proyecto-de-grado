import { ReactNode } from "react";
import { TYPECHARTLINE } from "../../modules/graphics/configurations/default";

export type StrokeOption = {
  curve: ApexStroke;
  colors: string[];
};

export type DataPoint = { x: number; y: number };

export interface MaxData {
  isSelect: boolean;
  dataMax?: number;
  data: number[];
}

// props de context

export interface ProviderProp {
  children: ReactNode;
}
export interface settings {
  typeLine: keyof typeof TYPECHARTLINE;
  colorChart: string[];
  maxData: MaxData;
  chartId: number | null;
  dataLabel: boolean;
}

export interface ContextProp {
  settings: Record<number, settings>;
  setColor: (chartId: number, color: string[]) => void;
  setTypeLine: (chartId: number, type: keyof typeof TYPECHARTLINE) => void;
  toggleMaxData: (chartId: number, isSelect: boolean, dataMax?: number) => void;
  setDataLabel: (chartId: number, isLabel: boolean) => void;
}
