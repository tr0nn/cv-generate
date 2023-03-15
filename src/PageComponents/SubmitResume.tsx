import styled from 'styled-components';
import '../styles/submitCv.css';
import axios from 'axios';
import React, { useState } from 'react';

function SubmitResume(props: any) {
  const [modalState, setModalState] = useState(true);
  const useDate = {
    name: props.nameInput,
    surname: props.surnameInput,
    email: props.emailInput,
    phone_number: props.phoneInput,
    experiences: [
      {
        position: props.positionInput,
        employer: props.employerInput,
        start_date: props.startDateInput,
        due_date: props.endDateInput,
        description: props.descriptionInput
      }
    ],
    educations: [
      {
        institute: props.educationInput,
        degree: props.qualityInput,
        due_date: props.educationEndDateInput,
        description: props.description2Input
      }
    ],
    image: props.imageInput,
    about_me: props.aboutMeInput
  };

  React.useEffect(() => {
    axios
      .post('https://resume.redberryinternship.ge/api/cvs', useDate)
      .then(response => {
        console.log('status :', response.status);
        console.log('data', response.data);
      })
      .catch(error => {
        console.log('something went wrong', error);
      });
  });

  function ModalAlert() {
    return (
      <ModalDiv>
        <DivFlex>
          <TextImg src={require('../images/resumeSent.png')} />
          <XButton
            onClick={() => {
              setModalState(false);
            }}
          >
            <img src={require('../images/Vector3.png')} />
          </XButton>
        </DivFlex>
      </ModalDiv>
    );
  }

  return (
    <div className="subtmi-cv-main">
      <div>
        <button
          className="submit-back-btn"
          onClick={() => {
            props.stateEducationShow(true);
            props.stateSubmitResume(false);
          }}
        >
          {'<'}
        </button>
      </div>

      <div className="submit-cv-wrapper">
        <div className="submit-persInfo-photo">
          <div className="submit-persInfo">
            <div className="sub-name-surname-wrapper">
              <SubName>{props.nameInput}</SubName>
              <SubSurname>{props.surnameInput}</SubSurname>
            </div>

            <SubEmail>
              {props.emailInput ? (
                <img
                  className="spaceIcon"
                  src={require('../images/Vector1.png')}
                  alt="vector1"
                />
              ) : null}
              {props.emailInput}
            </SubEmail>

            <SubPhone>
              {props.phoneInput ? (
                <img
                  className="spaceIcon"
                  src={require('../images/Vector2.png')}
                  alt="vector2"
                />
              ) : null}
              {props.phoneInput}
            </SubPhone>
            <SubRedTitle>ჩემ შესახებ</SubRedTitle>
            <SubPersAbout>{props.aboutMeInput}</SubPersAbout>
          </div>
          <div>
            <img className="submit-image" src={props.imageInput} />
          </div>
        </div>

        <HrPers />

        <SubRedTitle>გამოცდილება</SubRedTitle>
        <DivFlex>
          <ExpPos>{props.positionInput}</ExpPos>
          <ExpEmp>{props.employerInput}</ExpEmp>
        </DivFlex>
        <DivFlex>
          <ExpStart>{props.startDateInput}</ExpStart>
          <ExpEnd>{props.endDateInput}</ExpEnd>
        </DivFlex>
        <ExpAbout>{props.descriptionInput}</ExpAbout>

        <Hr />

        <SubRedTitle>განათლება</SubRedTitle>
        <DivFlex>
          <ExpEdu>{props.educationInput}</ExpEdu>
          <ExpQua>{props.qualityInput}</ExpQua>
        </DivFlex>
        <EduEnd>{props.educationEndDateInput}</EduEnd>
        <EduDesc>{props.description2Input}</EduDesc>
      </div>

      <div>{modalState ? <ModalAlert /> : null}</div>
    </div>
  );
}

export default SubmitResume;

const SubName = styled.h3`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
  color: #f93b1d;
`;

const SubSurname = styled.h3`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 42px;
  color: #f93b1d;
  margin-left: 20px;
`;

const SubEmail = styled.h3`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  margin-top: -15px;
`;

const SubPhone = styled.h3`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;

const SubRedTitle = styled.h2`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #f93b1d;
  margin-top: 34px;
`;

const SubPersAbout = styled.h2`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-transform: lowercase;
  color: #000000;
`;

const HrPers = styled.hr`
  border: 1px solid #c8c8c8;
  margin-top: 19px;
`;

const DivFlex = styled.div`
  display: flex;
`;

const ExpPos = styled.h3`
  margin-top: -0px;
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #1a1a1a;
`;

const ExpEmp = styled.h3`
  margin-top: -0px;
  margin-left: 7px;
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #1a1a1a;
`;

const ExpStart = styled.h3`
  margin-top: -10px;
  font-family: 'Helvetica Neue';
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #919191;
`;
const ExpEnd = styled.h3`
  margin-top: -10px;
  margin-left: 10px;
  font-family: 'Helvetica Neue';
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #919191;
`;

const ExpAbout = styled.h3`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-transform: capitalize;
  margin-top: 10px;
`;
const Hr = styled.hr`
  border: 1px solid #c8c8c8;
  margin-top: 32px;
`;

const ExpEdu = styled.h3`
  margin-top: 0px;
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
`;
const ExpQua = styled.h3`
  margin-top: 0px;
  margin-left: 10px;
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
`;

const EduEnd = styled.h3`
  margin-top: -5px;
  font-family: 'Helvetica Neue';
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #919191;
`;

const EduDesc = styled.h3`
  font-family: 'Helvetica Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  text-transform: lowercase;
`;

const ModalDiv = styled.div`
  margin-top: 53px;
  margin-left: 52px;
  border: 1px solid #e4e4e4;
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  width: 427px;
  height: 167px;
  padding-left: 30px;
  padding-top: 17px;
`;

const XButton = styled.button`
  margin-left: 90px;
  width: 13px;
  height: 13px;
  border: none;
  background-color: white;
  cursor: pointer;
`;

const TextImg = styled.img`
  margin-top: 40px;
`;
