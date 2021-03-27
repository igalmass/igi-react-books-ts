import React, {Component} from 'react';

const initialState = {
    name: 'Manny',
    message: 'Kipodi is cool 1122 !'
};

type State = Readonly<typeof initialState>

const messageHoc = (WrappedComponent: any): any => {
    class HOC extends Component<{}, State> {
        readonly state: State = initialState;

        public render(): any {
            return (
                <WrappedComponent name={this.state.name} message={this.state.message}></WrappedComponent>
            );
        }

    }

    return HOC;
};

export default messageHoc;