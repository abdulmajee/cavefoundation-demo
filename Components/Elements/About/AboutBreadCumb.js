import React from 'react'
import Link from 'next/link'

export default function AboutBreadCumb() {
    return (
        // breadcrumb area start

        <section className="breadcrumb_area breadcrumb_overlay" style={{"backgroundImage":"url(/img/bg/breadcrum_bg_2.jpg)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="breadcrumb_section">
                            <ul className="breadcrumb-list volunteer_breadcrumb">
                                <li className="bhas_border"><Link href="/"><a>Home</a></Link></li>
                                <li><span className="active">About Us</span></li>
                            </ul>
                            <div className="breadcrumb_title">
                                <h2>About Us</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // breadcrumb area end
    )
}
