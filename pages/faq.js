import React from 'react'
import FAQAccordion from '../Components/Elements/FAQ/FAQAccordion'
import FAQBreadCrumb from '../Components/Elements/FAQ/FAQBreadCrumb'
import FAQGetInTouch from '../Components/Elements/FAQ/FAQGetInTouch'
import FAQNewsFeed from '../Components/Elements/FAQ/FAQNewsFeed'
import Layout1 from '../Components/Layout/Layout1'

export default function faq() {
    return (
        <Layout1>
            <FAQBreadCrumb />
            <FAQAccordion />
            <FAQGetInTouch />
            <FAQNewsFeed />
        </Layout1>
    )
}
