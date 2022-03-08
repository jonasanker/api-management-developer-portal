import { Bag } from "@paperbits/common";
import { IWidgetOrder, IWidgetHandler } from "@paperbits/common/editing";
import { StyleDefinition } from "@paperbits/common/styles";
import { OperationDetailsModel } from "./operationDetailsModel";

export class OperationDetailsHandlers implements IWidgetHandler {
    public async getWidgetOrder(): Promise<IWidgetOrder> {
        const widgetOrder: IWidgetOrder = {
            name: "operationDetails",
            category: "Operations",
            displayName: "Operation: Details",
            iconClass: "widget-icon widget-icon-api-management",
            requires: ["html"],
            createModel: async () => new OperationDetailsModel()
        };

        return widgetOrder;
    }

    public getStyleDefinitions(): Bag<StyleDefinition> {
        return {
            operationDetails: {
                displayName: "operationDetails",
                plugins: ["margin", "padding", "typography"],
                components: {
                    tryItButton: {
                        displayName: "Try it button",
                        plugins: ["typography"],
                        defaults: {
                            allowedStates: [
                                "hover",
                                "focus",
                                "active",
                                "disabled"
                            ],
                            background: {
                                colorKey: "colors/tryItBg"
                            },
                            typography: {
                                colorKey: "colors/defaultBg",
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: ".8em",
                            },
                            size: {
                                maxHeight: "30px",
                                minHeight: "30px",
                                maxWidth: "60px"
                            },
                            border: {
                                left: { width: "0" },
                                right: { width: "0" },
                                top: { width: "0" },
                                bottom: { width: "0" }
                            },
                            padding: {
                                left: "6",
                                right: "6",
                                top: "1",
                                bottom: "1"
                            },

                            states: {
                                hover: {
                                    background: {
                                        colorKey: "colors/defaultBg"
                                    },
                                    typography: {
                                        colorKey: "colors/tryItBg",
                                    }
                                }
                            }
                        }
                    }
                }
            }
        };
    }
}