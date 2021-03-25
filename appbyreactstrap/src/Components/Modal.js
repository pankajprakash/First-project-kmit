/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const ModalExample = (props) => {
  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

//   const toggle = () => setModal(!modal);

  const toggle=(e)=>{
      e.target.click ? setModal( !(modal) )  : setModal(false)

  }

  return (<>
    <div className="modal-parent">
       {/* <input type="text" onChange={e => toggle(e)}/>  */}
     
      <Button color="primary" onClick={toggle}  >  Click here    <i class="fas fa-mouse"></i></Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}> <i className="far fa-check-circle  check-icon" ></i>  <b>Collaboration Request sent!</b> 
        </ModalHeader>
        <ModalBody className="modal-text">
           Our Genius ca begin working in their sparks.<br></br>Once your Collaboration request is matched, you<br></br> will be notified via your preferred method of communication.
        </ModalBody>
            <Button  onClick={toggle} className="okbutton">Ok</Button>{' '}
         
        </Modal>
     
      </div>
      </>
    
  );
}

export default ModalExample;