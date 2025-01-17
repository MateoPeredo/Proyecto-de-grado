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
  data: DataPoint[];
}

// props de context

export interface ProviderProp {
  children: ReactNode;
}
export interface settings {
  typeLine: keyof typeof TYPECHARTLINE;
  colorChart: string[];
  maxData: MaxData;
  chartId: Number | null;
}

export interface ContextProp {
  setting: settings;
  setColor: (color: string[]) => void;
  setTypeLine: (type: keyof typeof TYPECHARTLINE) => void;
  setIdChart: (id: Number) => void;
  toggleMaxData: (isSelect: boolean, dataMax?: number) => void;
}
