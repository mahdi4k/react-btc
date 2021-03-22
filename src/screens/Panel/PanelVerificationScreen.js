import React, {useState} from 'react';
import StepWizard from 'react-step-wizard';
import StepOne from "../../components/VerificationStep/StepOne";
import StepTwo from "../../components/VerificationStep/StepTwo";
import {Container} from "react-bootstrap";
import StepThree from "../../components/VerificationStep/StepThree";
import StepFour from "../../components/VerificationStep/StepFour";
import StepFive from "../../components/VerificationStep/StepFive";
import {makeFullWith,removeSection,slideEffect} from '../../components/Helper'

const PanelVerificationScreen = () => {
    const [currentStep, setCurrentStep] = useState({activeStep: 1})

    return (
        <>
            <Container className='bg-secondary w3-animate-opacity verifyScreen  my-4 py-3 '>
                <div className='d-flex justify-content-between align-items-center text-white bg-header  mt-4 px-3 py-3'>

                    <div className='header-top-currency-list'>
                        <i onClick={removeSection} className='fal fa-times'></i>
                        <i onClick={makeFullWith} className='fal fa-expand'></i>
                        <i className='fal fa-redo'></i>
                        <i onClick={slideEffect} className='fal fa-angle-down'></i>
                    </div>

                    <p>احراز هویت گاربری</p>
                </div>
                <div className='justify-content-between px-1 px-lg-4 verifyStep'>
                    <span className='step active'>
                        <p className='circle-verify'>1</p>
                        <p className='text-verify'>تلفن همراه</p>
                    </span>
                    <span className={currentStep.activeStep >= 2 ? 'step active' : 'step'}>
                        <p className='circle-verify'>2</p>
                        <p className='text-verify'>کارت شناسایی</p>
                    </span>
                    <span className={currentStep.activeStep >= 3 ? 'step active' : 'step'}>
                        <p className='circle-verify'>3</p>
                        <p className='text-verify'>اطلاعات بانکی</p>
                    </span>
                    <span className={currentStep.activeStep >= 4 ? 'step active' : 'step'}>
                        <p className='circle-verify'>4</p>
                        <p className='text-verify'>آدرس و تلفن</p>
                    </span>
                    <span className={currentStep.activeStep >= 5 ? 'step active' : 'step'}>
                        <p className='circle-verify'>5</p>
                        <p className='text-verify'>تایید هویت</p>
                    </span>
                </div>
                <div className='steps pb-3 px-0 px-md-4'>
                    <StepWizard onStepChange={e => {
                        setCurrentStep(e)
                    }}>
                        <StepOne/>
                        <StepTwo/>
                        <StepThree/>
                        <StepFour/>
                        <StepFive/>
                    </StepWizard>
                </div>

            </Container>

        </>
    );
};

export default PanelVerificationScreen;