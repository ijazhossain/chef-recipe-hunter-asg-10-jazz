import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
const FormModal = ({ show, handleClose }) => {
    const [validated, setValidated] = useState(false)
    const { user, setReload } = useContext(AuthContext)
    const [error, setError] = useState('')
    const handleFormSubmit = event => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
            // console.log('not validate')
        }
        setValidated(true);
        setError('')

        const name = form.name?.value;
        const photoLink = form.link?.value;
        console.log(name, photoLink);

        /* updateProfile(user, {
            displayName: name,
            photoURL: photoLink
        }).then(() => {
            setReload(Date.now())
            toast('user updated')
        }).catch(error => {
            console.log(error)
            setError(error)
        }) */

    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Update information form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit} className='social-container mx-md-auto  mt-3'>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className='text-start ps-2 w-100'>Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter new name" required />

                        <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                            Please enter your new name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicLink">
                        <Form.Label className='text-start ps-2 w-100'>New photo url</Form.Label>
                        <Form.Control name='link' type="text" placeholder="Enter new photo link" required />

                        <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                            Please enter your new photo link.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button className='submit-btn  w-100 mt-2 fw-semibold' variant="primary" type="submit">
                        Update
                    </Button>




                    <span className='text-danger fw-semibold'>{error}</span>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

            </Modal.Footer>
        </Modal>
    );
};

export default FormModal;