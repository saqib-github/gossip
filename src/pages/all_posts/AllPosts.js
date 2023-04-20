import React, { useEffect, useState } from 'react';
import Post from '../../components/post/Post';
import RichTextEditor from '../create_post/RichTextEditor';
import Cookies from 'js-cookie';
import { Navigate, useNavigate } from 'react-router-dom';
import { get } from '../../API';
import { API_URL_LIST } from '../../API/API-List';

const AllPosts = () => {
    // -----------------------
    const [posts, setPosts] = useState([]);

    const getAllposts = async () => {
        try {
            const response = await get(API_URL_LIST.all_posts, '', {});
        } catch (error) {}
    };

    useEffect(() => {
        getAllposts();
    }, []);

    if (!Cookies.get('token')) {
        return <Navigate to="/login" />;
    }

    // -----------------------
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
