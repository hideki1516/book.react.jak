import React, { useState, useEffect } from 'react';
import { ColoredMessage } from './components/ColoredMessage';

export const App = () => {
    const [num, setNum] = useState(0);
    const [text, setText] = useState();

    const onClickButton = () => {
        setNum((num) => num + 1);
    };

    const inputText = () => {
        setText((text) => {
            console.log(text);
        });
    };

    return (
        <>
            <h1 style={{color:'red', marginTop:'50px'}}>こんにちは</h1>
            <ColoredMessage color='blue'>お元気ですか？</ColoredMessage>
            <ColoredMessage color='pink'>お元気です！</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <input value={textAdd} />
            <button onClick={onClickAdd}>追加</button>
        </>
    );
};