import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function RichTextEditor() {
    const [editorValue, setEditorValue] = useState('');

    return (
        <>
            <div className='mt-2'>
                <ReactQuill className="mb-2" value={editorValue} onChange={setEditorValue} style={{ height: '100px' }} />
                <div className=" d-flex justify-content-end">
                    <button type="button" className="btn btn-primary mt-5 mb-3" style={{ borderRadius: '15px' }}>
                        Post
                    </button>
                </div>
            </div>
        </>
    );
}
