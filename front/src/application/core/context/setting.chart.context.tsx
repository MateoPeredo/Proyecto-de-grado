import React, { createContext, useState } from "react";
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

export const SettingChartProvider: React.FC<ProviderProp> = ({ children }) => {
  const [settings, setSettings] = useState<Record<number, settings>>({});

  const toggleMaxData = (
    chartId: number,
    isSelect: boolean,
    dataMax?: number
  ) => {
    setSettings((prev) => {
      const chartSettings = prev[chartId] || {
        colorChart: CHARTCOLORS.default,
        maxData: { isSelect: false, dataMax: undefined, data: [] },
        typeLine: TYPECHARTLINE.line,
        chartId,
      };

      const maxValue =
        isSelect && dataMax !== undefined
          ? dataMax
          : Math.max(...chartSettings.maxData.data);

      return {
        ...prev,
        [chartId]: {
          ...chartSettings,
          maxData: { ...chartSettings.maxData, isSelect, dataMax: maxValue },
        },
      };
    });
  };

  const setColor = (chartId: number, color: string[]) => {
    setSettings((prev) => {
      const chartSettings = prev[chartId] || {
        colorChart: CHARTCOLORS.default,
        maxData: { isSelect: false, dataMax: undefined, data: [] },
        typeLine: TYPECHARTLINE.line,
        chartId,
      };

      return {
        ...prev,
        [chartId]: {
          ...chartSettings,
          colorChart: color,
        },
      };
    });
  };

  const setTypeLine = (chartId: number, type: keyof typeof TYPECHARTLINE) => {
    setSettings((prev) => ({
      ...prev,
      [chartId]: {
        ...prev[chartId],
        typeLine: type,
      },
    }));
  };

  const setDataLabel = (chartId: number, isLabel: boolean = false) => {
    setSettings((prev) => {
      const chartSettings = prev[chartId] || {
        colorChart: CHARTCOLORS.default,
        maxData: { isSelect: false, dataMax: undefined, data: [] },
        typeLine: TYPECHARTLINE.line,
        chartId,
      };

      return {
        ...prev,
        [chartId]: {
          ...chartSettings,
          dataLabel: !isLabel,
        },
      };
    });
  };

  return (
    <SettingChartContext.Provider
      value={{
        settings,
        setColor,
        setTypeLine,
        toggleMaxData,
        setDataLabel,
      }}
    >
      {children}
    </SettingChartContext.Provider>
  );
};
