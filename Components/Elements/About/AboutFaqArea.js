import React from 'react'
import { useState } from 'react';

export default function AboutFaqArea() {
    const [activeDefault, setActiveDefault] = useState(0);
    const defaultAccordion = [
        {
            title: "What is the mission of the Cave Foundation?",
            desc:
                "The mission of the Cave Foundation is to promote understanding, unity, and compassion within the Muslim community and to educate the public about the peaceful teachings of Islam. We strive to create a welcoming and inclusive environment for all Muslims to connect, learn, and grow.",
            
        },
        {
            title: "How does the Cave Foundation work to promote understanding and unity in the Muslim community?",
            desc:
                "The Cave Foundation offers a variety of programs and initiatives that help to promote understanding and unity within the Muslim community. These may include educational resources, community service projects, events and workshops, and support for new Muslims or those interested in converting to Islam. We also work to address current issues and challenges facing the Muslim community and to promote the peaceful teachings of Islam.",

            
        },
        {
            title: "How can I get involved with the Cave Foundation?",
            desc:
                "You can get involved with the Cave Foundation by volunteering your time, donating funds, or participating in our programs and events. You can also stay updated on the latest news and events by following us on social media or signing up for our newsletter. We welcome your support and participation.",

            
        },
        {
            title: "Does the Cave Foundation accept donations? How can I contribute?",
            desc:
                "Yes, the Cave Foundation accepts donations to support our mission and programs. You can contribute online or by mail. Your support is greatly appreciated and helps us to make a positive impact in the Muslim community.",


        },
        {
            title: "How can I learn more about Islam through the Cave Foundation?",
            desc:
                "The Cave Foundation offers a variety of resources and support for those interested in learning more about Islam. This includes educational materials, events and workshops, and support for new Muslims or those interested in converting to Islam. We also encourage you to connect with other members of the Muslim community and to seek guidance from trusted sources.",

                
        },
        {
            title: "How can I stay updated on the latest news and events from the Cave Foundation?",
            desc:
                "You can stay updated on the latest news and events from the Cave Foundation by following us on social media or signing up for our newsletter. You can also visit our website regularly for updates and to learn more about our programs and initiatives.",

                
        },
        {
            title: "Can non-Muslims participate in Cave Foundation events and programs?",
            desc:
                "Non-Muslims are welcome to participate in Cave Foundation events and programs, as long as they are respectful of our values and principles. We believe that education and understanding are key to promoting harmony and mutual respect among people of different beliefs and backgrounds.",

                
        }

    ];
    const [isOpen, setOpen] = useState(false);
    const isOpenFalse = () => setOpen(!isOpen);
    const [isSelect, setSelect] = useState("Bangla");
    return (
        //about_faq area start 
        <div className="about_faq_area pt-110 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-5 col-xl-5">
                        <div className="accordion_wrapper mr-30">
                            <div className="section_title mb-50">
                                <span className="sub_title sub_title_2">FAQ</span>
                                <h3 className="title title_2">Get every answers
                                    from here.</h3>
                            </div>
                            <div className="accordion" id="accordionExample">
                            {defaultAccordion.map((d, i) => (
                                <div className="accordion-item" key={i}>                                    
                                    <h2 className="accordion-header" id="headingOne" onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}>
                                        <button onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}  className={`accordion-button faq_button ${activeDefault === i ? i : "collapsed"}`} >{" "}{d.title}</button>
                                    </h2>
                                    <div id="collapseOne" className={`accordion-collapse collapse  ${activeDefault === i ? "show" : ""}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">{d.desc}
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // about_faq_area end 
    )
}
