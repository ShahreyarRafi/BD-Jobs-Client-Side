import React, { useEffect } from 'react';
import Blogs from '../../Components/Blogs/Blogs';

const BlogsPage = () => {

    useEffect(() => {
        document.title = "BD JOBS | BLOGS";
    }, []);


    return (
        <div>
            <Blogs></Blogs>
        </div>
    );
};

export default BlogsPage;