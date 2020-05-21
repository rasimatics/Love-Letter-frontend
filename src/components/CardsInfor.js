import React, { useState } from 'react'
import card1 from "../images/love_cards/cards_loveletter-01.svg";
import card2 from "../images/love_cards/cards_loveletter-02.svg";
import card3 from "../images/love_cards/cards_loveletter-03.svg";
import card4 from "../images/love_cards/cards_loveletter-04.svg";
import card5 from "../images/love_cards/cards_loveletter-05.svg";
import card6 from "../images/love_cards/cards_loveletter-06.svg";
import card7 from "../images/love_cards/cards_loveletter-07.svg";
import card8 from "../images/love_cards/cards_loveletter-08.svg";
import info from "../images/onboard_assets/info.svg";
import exitCard from "../images/vector_cancel.svg";
import deck from '../images/deck.svg'
import Modal from "react-modal";
import ModalImage from "react-modal";

const CardsInfor = () => {

    const [modalGuardIsOpen, setmodalGuardIsOpen] = useState(false);
    const [modalInfoIsOpen, setmodalInfoIsOpen] = useState(false);
    const [modalInfoStyle, setmodalInfoStyle] = useState();
    const [modalCardIsOpen, setmodalCardIsOpen] = useState(false);
    const [modalCardStyle, setmodalCardStyle] = useState();
    const [imageSrc, setImageSrc] = useState();

    return (
        <div className='modal-container'>
            <button
                className='modal-btn'
                onClick={() => {
                    setmodalInfoIsOpen(true);
                    setmodalInfoStyle("Modal");
                }}
            >
                <img src={info} alt='' />
            </button> */}

            <Modal
                isOpen={modalInfoIsOpen}
                onRequestClose={() => {
                    setmodalInfoStyle("Modal-close");
                    setTimeout(() => {
                        setmodalInfoIsOpen(false);
                    }, 601);
                }}
                className={modalInfoStyle}
                overlayClassName='Overlay'
            >
                <button className='btn-close-card'>
                    <img
                        src={exitCard}
                        alt=''
                        onClick={() => {
                            setmodalInfoStyle("Modal-close");
                            setTimeout(() => {
                                setmodalInfoIsOpen(false);
                            }, 601);
                        }}
                    />
                </button>

                <div className='modal-text-top'>
                    <h3>
                        Select a card <br /> for information
              </h3>
                </div>

                <div className='modal-cards'>
                    <img
                        src={card1}
                        alt=''
                        onClick={() => {
                            setmodalCardIsOpen(true);
                            setmodalCardStyle("ModalImage");
                            setImageSrc(card1);
                        }}
                    />
                    <img
                        src={card2}
                        alt=''
                        onClick={() => {
                            setmodalCardIsOpen(true);
                            setmodalCardStyle("ModalImage");
                            setImageSrc(card2);
                        }}
                    />
                    <img
                        src={card3}
                        alt=''
                        onClick={() => {
                            setmodalCardIsOpen(true);
                            setmodalCardStyle("ModalImage");
                            setImageSrc(card3);
                        }}
                    />
                    <img
                        src={card4}
                        alt=''
                        onClick={() => {
                            setmodalCardIsOpen(true);
                            setmodalCardStyle("ModalImage");
                            setImageSrc(card4);
                        }}
                    />
                    <img
                        src={card5}
                        alt=''
                        onClick={() => {
                            setmodalCardIsOpen(true);
                            setmodalCardStyle("ModalImage");
                            setImageSrc(card5);
                        }}
                    />
                    <img
                        src={card6}
                        alt=''
                        onClick={() => {
                            setmodalCardIsOpen(true);
                            setmodalCardStyle("ModalImage");
                            setImageSrc(card6);
                        }}
                    />
                    <img
                        src={card7}
                        alt=''
                        onClick={() => {
                            setmodalCardIsOpen(true);
                            setmodalCardStyle("ModalImage");
                            setImageSrc(card7);
                        }}
                    />
                    <img
                        src={card8}
                        alt=''
                        onClick={() => {
                            setmodalCardIsOpen(true);
                            setmodalCardStyle("ModalImage");
                            setImageSrc(card8);
                        }}
                    />
                </div>

                <div className='modal-text-bottom'>
                    <h2>
                        Choose any <br /> for more
              </h2>
                </div>
            </Modal>

            <div className='modal-single-card'>
                <ModalImage
                    isOpen={modalCardIsOpen}
                    onRequestClose={() => {
                        setmodalCardStyle("ModalImage-close");
                        setTimeout(() => {
                            setmodalCardIsOpen(false);
                        }, 601);
                    }}
                    className={modalCardStyle}
                    overlayClassName='Overlay'
                >
                    <button className='btn-close-card'>
                        <img
                            src={exitCard}
                            alt=''
                            onClick={() => {
                                setmodalCardStyle("ModalImage-close");
                                setTimeout(() => {
                                    setmodalCardIsOpen(false);
                                }, 601);
                            }}
                        />
                    </button>

                    <img src={imageSrc} alt='' />
                </ModalImage>
            </div>
            {/* GUARD FEATURE */}

            {/* <div className='modal-container'>
                <button className='modal-btn' onClick={() => setmodalGuardIsOpen(true)}>
                    <img src={deck} alt='' />
                </button>

                <Modal
                    isOpen={modalInfoIsOpen}
                    onRequestClose={() => setmodalGuardIsOpen(false)}
                    className='Modal'
                    overlayClassName='Overlay'
                >
                    <div className='modal-text-top'>
                        <h3>Select "Jake the Dog" <br /> Guard Target</h3>
                    </div>

                    <div className='modal-cards'>
                        <img src={card2} alt='' />
                        <img src={card3} alt='' />
                        <img src={card4} alt='' />
                        <img src={card5} alt='' />
                        <img src={card6} alt='' />
                        <img src={card7} alt='' />
                        <img src={card8} alt='' />
                    </div>

                    <div className='modal-text-bottom'>
                        <h2>Use the characters in <br /> the cartoon</h2>
                    </div>
                </Modal>
            </div> */}
        </div>
    )
}

export default CardsInfor