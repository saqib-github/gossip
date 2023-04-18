import React from 'react';
import Post from '../../components/post/Post';
import RichTextEditor from '../create_post/RichTextEditor';

const AllPosts = () => {
    // -----------------------
    // -----------------------
    return (
        <>
            <div className="bg-danger-subtle">
                <div className="container w-100">
                    <div className="row justify-content-md-center">
                        <div className="col col-md-7 mb-4 bg-white rounded">
                            <RichTextEditor />
                        </div>
                        <div className="col col-md-7 p-md-2 bg-white rounded">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((post) => (
                                <Post post={post} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AllPosts;
