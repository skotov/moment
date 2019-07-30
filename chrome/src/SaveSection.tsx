import React from 'react';


export interface SaveSectionProps {
    
}

class SaveSection extends React.Component<SaveSectionProps> {
    public render(): JSX.Element {
        return(
            <div id="saveSection">
                <button id="submitButton">Save</button>
                <div id="saveConfirm"></div>
            </div>
        );
    }
}

export default SaveSection;