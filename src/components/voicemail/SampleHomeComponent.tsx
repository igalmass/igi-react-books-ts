import React, {ReactElement} from 'react';

interface ISampleHomeComponentProps {
    // prop1: string
}

const SampleHomeComponent: React.FC<ISampleHomeComponentProps> = (props: ISampleHomeComponentProps): ReactElement => {
    const style = {backgroundColor: 'lightcyan', border: '1px solid gray'};

    return <div style={style}>
        <p>This is a SampleHomeComponent Component!</p>
        {/*<p>props.prop1 = {props.prop1}</p>*/}
    </div>;
};

export default SampleHomeComponent;