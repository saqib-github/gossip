import React from 'react';
import './post.css';
import CommentsIcon from '../../icons/CommentsIcon';
import SendIcon from '../../icons/SendIcon';
import Spinner from '../Spinner';

const Post = () => {
    return (
        <>
            <div className="card m-2">
                <h5 className="card-header">Qasim Ali</h5>
                <div className="card-body">
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <div className="">
                        <CommentsIcon /> 23, Date: 25 Feb, 2015
                    </div>
                    <div className="view-comments">View Comments</div>
                </div>
                {/* <div className="p-2 text-center">
                    <Spinner />
                </div> */}
                {/* <div className="mb-3 d-flex">
                    <input type="text" className="form-control" placeholder="Comment...." />
                    <button type="button" class="btn btn-success">
                        <SendIcon />
                    </button>
                </div> */}
                {/* <div className="p-3">
                    <h4>Comments</h4>
                    <div className="bg-secondary-subtle p-2 rounded d-flex">
                        <strong>Haider Ali: </strong>
                        <p> I don't Know </p> {' '}<div className="view-comments"> Reply </div>
                        <hr />
                    </div>
                </div> */}
            </div>

            <hr />
        </>
    );
};

export default Post;
