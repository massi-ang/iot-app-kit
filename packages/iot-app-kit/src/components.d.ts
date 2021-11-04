/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { DataStreamQuery } from "./data-module";
import { RequestInfo } from "./data-module/data-cache/requestTypes";
import { DataStream, MinimalViewPortConfig } from "@synchro-charts/core";
export namespace Components {
    interface IotConnector {
        "query": DataStreamQuery;
        "renderFunc": ({ dataStreams }: { dataStreams: DataStream[] }) => unknown;
        "requestInfo": RequestInfo;
    }
    interface IotKpi {
        "isEditing": boolean | undefined;
        "query": DataStreamQuery;
        "viewport": MinimalViewPortConfig;
        "widgetId": string;
    }
    interface IotLineChart {
        "isEditing": boolean | undefined;
        "query": DataStreamQuery;
        "viewport": MinimalViewPortConfig;
        "widgetId": string;
    }
    interface IotStatusGrid {
        "isEditing": boolean | undefined;
        "query": DataStreamQuery;
        "viewport": MinimalViewPortConfig;
        "widgetId": string;
    }
    interface IotTestRoutes {
    }
    interface TestingGround {
    }
}
declare global {
    interface HTMLIotConnectorElement extends Components.IotConnector, HTMLStencilElement {
    }
    var HTMLIotConnectorElement: {
        prototype: HTMLIotConnectorElement;
        new (): HTMLIotConnectorElement;
    };
    interface HTMLIotKpiElement extends Components.IotKpi, HTMLStencilElement {
    }
    var HTMLIotKpiElement: {
        prototype: HTMLIotKpiElement;
        new (): HTMLIotKpiElement;
    };
    interface HTMLIotLineChartElement extends Components.IotLineChart, HTMLStencilElement {
    }
    var HTMLIotLineChartElement: {
        prototype: HTMLIotLineChartElement;
        new (): HTMLIotLineChartElement;
    };
    interface HTMLIotStatusGridElement extends Components.IotStatusGrid, HTMLStencilElement {
    }
    var HTMLIotStatusGridElement: {
        prototype: HTMLIotStatusGridElement;
        new (): HTMLIotStatusGridElement;
    };
    interface HTMLIotTestRoutesElement extends Components.IotTestRoutes, HTMLStencilElement {
    }
    var HTMLIotTestRoutesElement: {
        prototype: HTMLIotTestRoutesElement;
        new (): HTMLIotTestRoutesElement;
    };
    interface HTMLTestingGroundElement extends Components.TestingGround, HTMLStencilElement {
    }
    var HTMLTestingGroundElement: {
        prototype: HTMLTestingGroundElement;
        new (): HTMLTestingGroundElement;
    };
    interface HTMLElementTagNameMap {
        "iot-connector": HTMLIotConnectorElement;
        "iot-kpi": HTMLIotKpiElement;
        "iot-line-chart": HTMLIotLineChartElement;
        "iot-status-grid": HTMLIotStatusGridElement;
        "iot-test-routes": HTMLIotTestRoutesElement;
        "testing-ground": HTMLTestingGroundElement;
    }
}
declare namespace LocalJSX {
    interface IotConnector {
        "query"?: DataStreamQuery;
        "renderFunc"?: ({ dataStreams }: { dataStreams: DataStream[] }) => unknown;
        "requestInfo"?: RequestInfo;
    }
    interface IotKpi {
        "isEditing"?: boolean | undefined;
        "query"?: DataStreamQuery;
        "viewport"?: MinimalViewPortConfig;
        "widgetId"?: string;
    }
    interface IotLineChart {
        "isEditing"?: boolean | undefined;
        "query"?: DataStreamQuery;
        "viewport"?: MinimalViewPortConfig;
        "widgetId"?: string;
    }
    interface IotStatusGrid {
        "isEditing"?: boolean | undefined;
        "query"?: DataStreamQuery;
        "viewport"?: MinimalViewPortConfig;
        "widgetId"?: string;
    }
    interface IotTestRoutes {
    }
    interface TestingGround {
    }
    interface IntrinsicElements {
        "iot-connector": IotConnector;
        "iot-kpi": IotKpi;
        "iot-line-chart": IotLineChart;
        "iot-status-grid": IotStatusGrid;
        "iot-test-routes": IotTestRoutes;
        "testing-ground": TestingGround;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "iot-connector": LocalJSX.IotConnector & JSXBase.HTMLAttributes<HTMLIotConnectorElement>;
            "iot-kpi": LocalJSX.IotKpi & JSXBase.HTMLAttributes<HTMLIotKpiElement>;
            "iot-line-chart": LocalJSX.IotLineChart & JSXBase.HTMLAttributes<HTMLIotLineChartElement>;
            "iot-status-grid": LocalJSX.IotStatusGrid & JSXBase.HTMLAttributes<HTMLIotStatusGridElement>;
            "iot-test-routes": LocalJSX.IotTestRoutes & JSXBase.HTMLAttributes<HTMLIotTestRoutesElement>;
            "testing-ground": LocalJSX.TestingGround & JSXBase.HTMLAttributes<HTMLTestingGroundElement>;
        }
    }
}
