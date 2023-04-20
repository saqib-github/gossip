import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { post } from '../../API';
import { API_URL_LIST } from '../../API/API-List';
import Cookies from 'js-cookie';
import Spinner from '../../components/Spinner';

export default function RichTextEditor() {
    const [loader, setLoader] = useState(false);
    const [editorValue, setEditorValue] = useState('');

    return (
        <>
            <div className="mt-2">
                <ReactQuill className="mb-2" value={editorValue} onChange={setEditorValue} style={{ height: '100px' }} />
                <div className=" d-flex justify-content-end">
                    <button
                        onClick={async () => {
                            setLoader(true);
                            try {
                                if (editorValue) {
                                    const response = await post(API_URL_LIST.create_post, { content: editorValue }, {});
    
                                }
                            } catch (error) {
                                
                            }
                            setLoader(false);
                        }}
                        type="button"
                        disabled={loader}
                        className="btn btn-primary mt-5 mb-3"
                        style={{ borderRadius: '15px' }}
                    >
                        {loader ? <Spinner /> : 'Post'}
                    </button>
                </div>
            </div>
        </>
    );
}
