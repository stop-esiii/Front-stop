import React, {useState} from 'react';
import './stylesComponents/HelpModal.css'

function Modal() {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }


    return (
        <div>
            <button onClick={toggleModal}>MODAL</button>

            <div className="modal-overlay">
                <div className="modal-content">
                    <button className="close-button" >X</button>
                    <h2>COMO JOGAR?</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at fermentum dui. Ut
                        pretium elit ac enim tempus dictum eu euismod metus.
                        <br/><br/>
                        Nunc non donec sapien in congue convallis nisl, non tempus felis bibendum. Sed feugiat odio a ex
                        vulputate pharetra...
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Modal;