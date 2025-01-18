export const CHARTCOLORS: Record<string, string[]> = {
  default: ["#FF4560", "#00E396", "#008FFB"],
  pastel: ["#A6CEE3", "#B2DF8A", "#FB9A99"],
  vibrant: ["#F15BB5", "#FEE440", "#00BBF9"],
};
export const TYPECHARTLINE = {
  line: "line",
  area: "area",
} as const;

export const DEFAULT_SETTINGS = {
  colorChart: CHARTCOLORS.default,
  maxData: { isSelect: false, dataMax: undefined, data: [] },
  typeLine: TYPECHARTLINE.line,
  dataLabel: false,
};

