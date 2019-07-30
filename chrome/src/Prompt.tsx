import React from 'react';

interface PromptState {
    prompt: string;
}

class Prompt extends React.Component<{}, PromptState> {
    constructor(props: {}){
        super(props);
        this.state = {
            prompt: this.getPrompt()
        };
    }
    public render(): JSX.Element {
        return(
            <div id="prompt">
                <div id="promptText" className="prompt">{this.state.prompt}</div>
                <div id="newPrompt" className="activeLink" onClick={this.setPrompt.bind(this)}>New Propt</div>
            </div> 
        );
    }

    private setPrompt(): void {
        this.setState({prompt: this.getPrompt()});
    }

    private getPrompt(): string {
        // update to hash today's date
        const idx = Math.floor((Math.random() * 10 ) % 8);
        switch(idx) {
            case 0:
                return "Who is someone that makes you smile?";
            case 1:
                return "What was the highlight of today?";
            case 2:
                return "What's something that made you smile today?";
            case 3:
                return "Anything on your mind?";
            case 4:
                return "How are you doing?";
            case 5:
                return "Did anything stress you out today?";
            case 6:
                return "What are you looking forward to?";
            case 7:
                return "What is a simple pleasure that brings you joy?";
        }
        return "Hello";
      }
}

export default Prompt;