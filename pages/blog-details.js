import React from 'react'
import BlogDetailsBreadCrumb from '../Components/Elements/BlogDetails/BlogDetailsBreadCrumb'
import BlogDetailsCause from '../Components/Elements/BlogDetails/BlogDetailsCause'
import Layout1 from '../Components/Layout/Layout1'

export default function blogDetails() {
    return (
        <Layout1>
            <BlogDetailsBreadCrumb/>
            <BlogDetailsCause/>

        </Layout1>
    )
}
