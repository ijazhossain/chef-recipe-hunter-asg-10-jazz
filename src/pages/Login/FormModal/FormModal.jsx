import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AuthContext } from '../../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { toast } from 'react-toastify';
import './FormModal.css'

const FormModal = ({ show, handleClose, centered }) => {

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
        // console.log(name, photoLink);
        if (!name || !photoLink) {
            return;
        }

        updateProfile(user, {
            displayName: name,
            photoURL: photoLink,
        }).then(() => {
            setReload(Date.now())
            toast('user updated')
            // form.reset()
        }).catch(error => {
            // console.log(error)
            setError(error)
        })



    }
    return (
        <Modal centered show={show} onHide={handleClose}>

            <Modal.Header className='px-3 px-lg-4' closeButton>
                <Modal.Title className='fw-bold  '>Update information </Modal.Title>
            </Modal.Header>
            <Modal.Body className='pb-5'>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit} className='social-container mx-md-auto  mt-3'>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label className='rounded-3 text-start ps-2 w-100 fw-semibold heading-color'>Name</Form.Label>
                        <Form.Control style={{ border: "1px solid #1A1919" }} className=' paragraph-color' name='name' type="text" placeholder="Enter new name" required />

                        <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                            Please enter your new name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-4" controlId="formBasicLink">
                        <Form.Label className='text-start ps-2 w-100 fw-semibold heading-color'>New photo url</Form.Label>
                        <Form.Control style={{ border: "1px solid #1A1919" }} name='link' type="text" placeholder="Enter new photo link" required />

                        <Form.Control.Feedback className='text-start ps-2 w-100' type="invalid">
                            Please enter your new photo link.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button className='mt-4 fw-bold submit-btn  w-100 mt-2 fw-semibold' type="submit">
                        Update
                    </Button>
                    <span className='text-danger fw-semibold'>{error}</span>

                </Form>
            </Modal.Body>

        </Modal>

    );
};

export default FormModal;