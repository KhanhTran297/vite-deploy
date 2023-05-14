import useFormField from '@/hook/useFormField';
import { Form } from 'antd';
import React from 'react';

import ReactQuill from 'react-quill'; // ES6
import 'react-quill/dist/quill.snow.css'; // ES6


const AlignStyle = ReactQuill.Quill.import('attributors/style/align');
ReactQuill.Quill.register(AlignStyle, true);

function getLoader() {
    const div = document.createElement('div');
    div.className = 'loader-container';
    div.innerHTML = "<div class='loader'>Loading...</div>";
    return div;
}

const formats = [
    'header',
    'font',
    'size',
    'color',
    'background',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'align',
    'list',
    'bullet',
    'indent',
    'image',
];

const RichTextField = (props) => {
    const { label, disabled, name, required, style, labelAlign, formItemProps , value , onChange} = props;

    const modules = {
        toolbar: {
            container: [
                [ { header: [ 1, 2, 3, false ] } ],
                [ { color: [] }, { background: [] } ],
                [ 'bold', 'italic', 'underline', 'strike', 'blockquote' ],
                [ { align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' } ],
                [ { list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' } ],
                [ 'image' ],
                [ 'clean' ],
            ],
            
        },
        clipboard: {
            // toggle to add extra line breaks when pasting HTML:
            matchVisual: false,
            
        },
    };
    const customStyle = {
        ...style,
        height: '300px',
        // marginBottom: '10px',
    };
    const { rules } = useFormField(props);
    return (
        
        <ReactQuill
            value={value}
            name={name}
            onChange={onChange}
            style={customStyle}
            formats={formats}
            modules={modules}
            readOnly={disabled}
            
        />
        
    );
};

export default RichTextField;
