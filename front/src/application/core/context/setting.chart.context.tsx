import { createContext, useState } from "react";
import {
  ContextProp,
  ProviderProp,
  settings,
} from "../types/chart.settings.type";
import {
  CHARTCOLORS,
  TYPECHARTLINE,
} from "../../modules/graphics/configurations/default";

export const SettingChartContext = createContext<ContextProp | undefined>(
  undefined
);

export const SettingChartPrivider: React.FC<ProviderProp> = ({ children }) => {
  const [setting, setSetting] = useState<settings>({
    colorChart: CHARTCOLORS.default,
    maxData: {
      isSelect: false,
      dataMax: undefined,
      data: [],
    },
    typeLine: TYPECHARTLINE.line,
    chartId: null,
  });
  const toggleMaxData = (isSelect: boolean, dataMax?: number) => {
    setSetting((prev) => {
      const maxValue =
        isSelect && dataMax !== undefined
          ? dataMax
          : Math.max(...prev.maxData.data.map((point) => point.y));

      return {
        ...prev,
        maxData: {
          ...prev.maxData,
          isSelect: isSelect,
          dataMax: maxValue,
        },
      };
    });
  };

  const setColor = (color: string[]) => {
    setSetting((prev) => ({
      ...prev,
      colorChart: color,
    }));
  };
  const setTypeLine = (type: keyof typeof TYPECHARTLINE) => {
    setSetting((prev) => ({
      ...prev,
      typeLine: type,
    }));
  };
  const setIdChart = (id: Number) => {
    setSetting((prev) => ({
      ...prev,
      chartId: id,
    }));
  };

  return (
    <SettingChartContext.Provider
      value={{ setting, setColor, setTypeLine, setIdChart, toggleMaxData }}
    >
      {children}
    </SettingChartContext.Provider>
  );
};
