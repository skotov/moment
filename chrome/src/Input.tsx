import React from 'react';

export enum InputSize { Small, Medium, Large }
export interface InputProps {
    size: InputSize;
}

class Input extends React.Component<InputProps> {
    public render(): JSX.Element {
        return(
            <input id="textInput"></input>
        );
    }
}

export default Input;