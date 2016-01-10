'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {
    Button,
    Textbox,
    Textarea,
    Checkbox,
    RadioGroup,
    Radio,
    Select,
    Avatar
} from 'lagouui-react/dist/lagouui.react.js';

ReactDOM.render(
    <div className="demo-container">
        <Button>Default</Button>
        <Button lgStyle="primary">Primary</Button>
        <Button lgStyle="link">Link</Button>
    </div>,
    document.getElementById('buttonStyleDemo')
);

ReactDOM.render(
    <div className="demo-container">
        <Button lgSize="sm">Small</Button>
        <Button>Normal</Button>
        <Button lgSize="lg">Large</Button>
    </div>,
    document.getElementById('buttonSizeDemo')
);

ReactDOM.render(
    <div className="demo-container">
        <Button disabled>Default</Button>
        <Button lgStyle="primary" disabled>Primary</Button>
        <Button lgStyle="link" disabled>Link</Button>
    </div>,
    document.getElementById('buttonDisabledDemo')
);

ReactDOM.render(
    <div className="demo-container">
        <Button lgStyle="primary" block>Block</Button>
    </div>,
    document.getElementById('buttonBlockDemo')
);

ReactDOM.render(
    <div className="demo-container">
        <Textbox placeholder="Default"></Textbox>
        <Textbox placeholder="Primry" lgStyle="primary"></Textbox>
    </div>,
    document.getElementById('textboxStyleDemo')
);

ReactDOM.render(
    <div className="demo-container">
        <Textbox placeholder="Disabeld" disabled></Textbox>
    </div>,
    document.getElementById('textboxDisabledDemo')
);

ReactDOM.render(
    <div className="demo-container">
        <Textarea placeholder="Default"></Textarea>
        <Textarea placeholder="Primry" lgStyle="primary"></Textarea>
    </div>,
    document.getElementById('textareaStyleDemo')
);

ReactDOM.render(
    <div className="demo-container">
        <Textarea placeholder="Auto Size" autoSize></Textarea>
        <Textarea placeholder="Setting rows and maxRows" autoSize rows="5" maxRows="10"></Textarea>
    </div>,
    document.getElementById('textareaAutoSizeDemo')
);

ReactDOM.render(
    <div className="demo-container">
        <Textarea placeholder="Disabled" disabled></Textarea>
    </div>,
    document.getElementById('textareaDisabledDemo')
);

ReactDOM.render(
    <div className="demo-container">
        <Checkbox label="Unchecked"></Checkbox>
        <Checkbox label="Checked" defautlChecked></Checkbox>
    </div>,
    document.getElementById('checkboxStyleDemo')
);

ReactDOM.render(
    <div className="demo-container">
        <Checkbox label="Unchecked" disabled></Checkbox>
        <Checkbox label="Checked" defautlChecked disabled></Checkbox>
    </div>,
    document.getElementById('checkboxDisabledDemo')
);


ReactDOM.render(
    <div className="demo-container">
        <RadioGroup name="sex" defaultValue="male">
            <Radio value="male" label="Male"></Radio>
            <Radio value="female" label="Female"></Radio>
        </RadioGroup>
    </div>,
    document.getElementById('radioStyleDemo')
);

ReactDOM.render(
    <div className="demo-container">
        <RadioGroup name="sex" defaultValue="male">
            <Radio value="male" label="Male" disabled></Radio>
            <Radio value="female" label="Female" disabled></Radio>
        </RadioGroup>
    </div>,
    document.getElementById('radioDisabledDemo')
);

ReactDOM.render(
    <div className="demo-container">
        <Select placeholder="Select..." options={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}></Select>
        <Select placeholder="Select..." options={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']} defaultValue="Monday"></Select>
    </div>,
    document.getElementById('singleSelectDemo')
);

ReactDOM.render(
    <div className="demo-container">
        <Select multiple placeholder="Select..." options={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']}></Select>
        <Select multiple placeholder="Select..." options={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']} defaultValue={['Monday', 'Tuesday']}></Select>
    </div>,
    document.getElementById('multipleSelectDemo')
);

ReactDOM.render(
    <div className="demo-container">
        <Select placeholder="Select..." options={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']} disabled></Select>
        <Select multiple placeholder="Select..." options={['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']} defaultValue={['Monday', 'Tuesday']} disabled></Select>
    </div>,
    document.getElementById('selectDisabledDemo')
);

ReactDOM.render(
    <div className="demo-container">
        <Avatar src="http://www.lagou.com/images/jd_portrait.png"></Avatar>
        <Avatar text="H" color="#ff8590"></Avatar>
    </div>,
    document.getElementById('avatarStyleDemo')
);
