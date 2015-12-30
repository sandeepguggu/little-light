import React from 'react';
import { render } from 'react-dom';

import { TextInput, AppBarIconLeft } from 'fybrweb';

class Test extends React.Component {

    constructor() {
        super();

        this.state = {
            t1: null
        };
    }

    render() {
        return (
            <div>
                <AppBarIconLeft title="Test 123" />
                <TextInput
                    name="t1"
                    placeholder="T1"
                    onChange={this.onChange.bind(this)}
                    value={this.state.t1} />
            </div>
        );
    }

    onChange(name, value) {
        this.setState({
            [`${name}`]: value
        });
    }
}
render(
    <Test />,
    document.getElementById('root')
);
