import React, {CSSProperties, useEffect, useState} from 'react';
import './App.css';
import { Panel, View } from "@vkontakte/vkui";
import { Adaptivity } from "./Adaptivity";
import {VKApi} from "./VKApi";

const getBlockStyle = (color: string): CSSProperties => ({
    backgroundColor: color,
    width: '100%',
    height: 300,
    padding: 10,
});


function App() {
    const [activePanel, setActivePanel] = useState('main');
    useEffect(() => {
        VKApi.init();
    }, [])
    return (
        <Adaptivity>
            <View
                activePanel={activePanel}
                // onSwipeBack={() => VKApi.close?.()}
            >
                <Panel key="main" nav="main">

                    <div>
                        <div style={getBlockStyle('red')} />
                        <div style={getBlockStyle('green')} />
                        <div style={getBlockStyle('blue')} />
                        <div style={getBlockStyle('black')} />
                    </div>
                </Panel>
            </View>
        </Adaptivity>
    );
}

export default App;
