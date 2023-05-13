import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import SpinnerLoader from '../../Shared/SpinnerLoader/SpinnerLoader';
import { Button, Col, Container, Row } from 'react-bootstrap';
import FormModal from '../FormModal/FormModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './UserInfo.css'
import ReactImageMagnify from 'react-image-magnify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const UserInfo = () => {

    const [show, setShow] = useState(false);
    const navigate = useNavigate()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { user, loading } = useContext(AuthContext)
    // console.log(setReload);

    if (loading) {
        return <SpinnerLoader></SpinnerLoader>
    }
    if (!user) {
        navigate('/')
    }
    const { displayName, email, uid, emailVerified, photoURL } = user || {};
    // console.log(displayName, email, uid, emailVerified);
    // console.log(emailVerified + '');
    // console.log(typeof (emailVerified + ''));


    return (
        <div style={{ backgroundColor: '#f7f5f1' }} className=''>
            <div className='user-banner-container d-flex align-items-center justify-content-center'>
                <h1 className='display-1 fw-semibold'>User's Details</h1>

            </div>
            <Container className='py-lg-5'>
                <Row className='pt-4 pt-lg-5'>
                    <Col lg={4}>

                        <div className='d-flex align-items-center justify-content-center position-relative'>
                            <ReactImageMagnify {...{
                                smallImage: {
                                    alt: 'Wristwatch by Ted Baker London',
                                    isFluidWidth: true,
                                    src: `${photoURL ? photoURL : ''}`,

                                },
                                largeImage: {
                                    src: `${photoURL ? photoURL : ''}`,
                                    width: 640,
                                    height: 900
                                },

                            }} />
                            <p className='position-absolute top-50 end-50 bg-secondary text-white d-flex align-items-center justify-content-center px-2 rounded-3'>
                                <FontAwesomeIcon className='me-1 ' icon={faPlusCircle}></FontAwesomeIcon>
                                Hover To Zoom
                            </p>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className='ym-user-detail-container pb-4 pb-lg-5 ym-user-info mx-auto'>
                            <h2 className='ym-primary user-title-ym  mb-0 fw-semibold'><span className='fw-bold '>ID:</span> {uid ? uid.slice(0, 15) : 'Not found'}</h2>
                            <p className='mt-4 mb-3 fw-semibold paragraph-color fs-5'><span className='fw-bold heading-color  me-2'>Name:</span> {displayName ? displayName : 'Not Found'}</p>
                            <p className='mb-3 paragraph-color fs-5 mb-0 fw-semibold'><span className='fw-bold heading-color  me-2'>Email: </span>{email ? email : 'Not Found'}</p>

                            <p className='paragraph-color fs-5 mb-0 fw-semibold'> <span className='fw-bold heading-color me-2'>Email verified:</span>  {emailVerified + ''}</p>

                            <Button onClick={handleShow} className='btn btn-link mt-2 px-0 edit-profile pb-0 login-link fw-bold fs-5'>Edit profile</Button>
                        </div>
                    </Col>
                </Row>
                <FormModal
                    show={show}
                    setShow={setShow}
                    handleClose={handleClose}></FormModal>
            </Container>

        </div>
    );
};

export default UserInfo;