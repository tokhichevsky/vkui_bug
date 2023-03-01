import bridge from "@vkontakte/vk-bridge";

export const VKApi = {
    init: () => {
        bridge.send('VKWebAppInit');
    }
}