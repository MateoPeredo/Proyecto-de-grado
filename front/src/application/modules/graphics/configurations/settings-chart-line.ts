import { DataPoint, MaxData } from "../../../core/types/chart.settings.type";


export const defaultMax = (data: DataPoint[]): number => {
  return Math.max(...data.map((point) => point.y));
};

export const selectMaxData = ({ isSelect, dataMax, data }: MaxData): number => {
  if (isSelect) {
    if (dataMax !== undefined) {
      return dataMax;
    } else {
      throw new Error(
        "Debe proporcionar un valor para 'dataMax' cuando 'isSelect' es verdadero."
      );
    }
  }
  return defaultMax(data);
};
