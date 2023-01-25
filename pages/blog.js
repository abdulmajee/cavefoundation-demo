import React from 'react'
import BlogBreadCrumb from '../Components/Elements/Blog/BlogBreadCrumb'
import BlogCauseDetails from '../Components/Elements/Blog/BlogCauseDetails'
import Layout1 from '../Components/Layout/Layout1'

export default function Blog() {
    return (
        <Layout1>
            <BlogBreadCrumb/>
            <BlogCauseDetails/>
        </Layout1>
    )
}

