import { useState } from 'react';
import styled from 'styled-components';
import WD from './Clusters/WD.png';
import AD from './Clusters/AD.png';
import AIML from './Clusters/AIML.png';
import Cyber from './Clusters/cyber.png';
import CP from './Clusters/CP.png';
import GD from './Clusters/GD.png';
import CW from './Clusters/CW.png';
import VE from './Clusters/video.png';
import OP from './Clusters/Opcon.png';

function Clusters() {
    const [isPopVisible, setIsPopVisible] = useState(false);
    const [popupContent, setPopupContent] = useState('');
    const [popupImage, setPopupImage] = useState(null);

    const handleSubClusterClick = (content, image) => {
        setPopupContent(content);
        setPopupImage(image);
        setIsPopVisible(true);
    };

    const closePopup = () => {
        setIsPopVisible(false);
        setPopupContent('');
        setPopupImage(null);
    };

    const SubClusterInfo = [
        "Dive into the world of web development by building dynamic and responsive websites. Enhance your skills in both front-end and back-end technologies while working on impactful projects that elevate ACE’s online presence",
        "AD description",
        "Members will delve into the world of AI and ML, working on projects that involve data analysis, machine learning models, and AI applications. They will stay updated with the latest trends and advancements in the field.",
        "This sub-cluster is dedicated to understanding and implementing security measures to protect information systems. Members will learn about various cybersecurity practices, ethical hacking, and how to safeguard against cyber threats.",
        "Members will engage in competitive programming, solving complex problems and participating in coding competitions. This sub-cluster aims to enhance problem-solving skills and algorithmic thinking.",
        "This sub-cluster focuses on creating visually appealing graphics for posters and social media posts. Members will use their design skills to create engaging and informative visual content.",
        "Members will be responsible for editing videos for various ACE events and promotional materials. They will use their editing skills to create professional and engaging video content.",
        "This sub-cluster focuses on writing content for various media, including blogs, social media posts, and promotional materials. Members will use their writing skills to convey ACE's message clearly and professionally.",
        "Members of this sub-cluster will ensure that all events and activities run smoothly. They will be responsible for the logistical aspects of events, ensuring that everything is well-organized and executed efficiently."
    ];

    const SubClusterImages = [
        WD,
        AD,
        AIML,
        Cyber,
        CP,
        GD,
        CW,
        VE,
        OP
    ];

    return (
        <>
            <section id="clusters">
                <center><h1 className="light-mode">Available Sub Clusters</h1></center>
                <GridContainer>
                    {SubClusterImages.map((image, index) => (
                        <GridItem key={index} className={`item${index + 1}`} onClick={() => handleSubClusterClick(SubClusterInfo[index], image)}>
                            <img src={image} alt={`Sub Cluster ${index + 1}`} />
                            <HoverInfo>
                                <p>{SubClusterInfo[index]}</p>
                            </HoverInfo>
                        </GridItem>
                    ))}
                </GridContainer>
            </section>

            {isPopVisible && (
                <div className="popup-background" onClick={closePopup}>
                    <div className="popup-content large-popup" onClick={(e) => e.stopPropagation()}>
                        <span className='close-btn' onClick={closePopup}>&times;</span>
                        <div className="pop-image">
                            <img src={popupImage} alt="Sub Cluster" />
                        </div>
                        <div className="popup-text">
                            <p>{popupContent}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 200px);
    gap: 10px;
    width: 80%;
    margin: auto;
`;

const GridItem = styled.div`
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;

    img {
        max-width: 80%;
        max-height: 80%;
        transition: transform 0.3s ease;
    }

    &:hover {
        z-index: 10;
        background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0.2));
    }

    &.item1:hover {
        grid-row: 1 / span 2;
        grid-column: 1 / span 2;
    }

    &.item2:hover, &.item3:hover {
        grid-row: 1 / span 2;
        grid-column: 2 / span 2;
    }

    &.item4:hover, &.item7:hover {
        grid-row: span 2;
        grid-column: 1 / span 2;
    }

    &.item5:hover, &.item6:hover, &.item8:hover, &.item9:hover {
        grid-row: span 2;
        grid-column: 2 / span 2;
    }

    &:hover img {
        transform: scale(1.1);
    }
`;

const HoverInfo = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    color: white;
    text-align: center;
    transition: opacity 0.3s ease;
    padding: 10px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 5px;

    ${GridItem}:hover & {
        opacity: 1;
    }
`;
export default Clusters;