import { AdaptivityProvider, AppRoot, ConfigProvider, SplitCol, SplitLayout, WebviewType } from "@vkontakte/vkui";
import React, { PropsWithChildren } from "react";

export const Adaptivity = (props: PropsWithChildren) => {
    return (
        <ConfigProvider
            webviewType={WebviewType.INTERNAL}
            isWebView={false}
        >
            <AdaptivityProvider>
                <AppRoot noLegacyClasses>
                    <SplitLayout>
                        <SplitCol animate={true} width="100%" maxWidth="100%">
                            {props.children}
                        </SplitCol>
                    </SplitLayout>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    )
}