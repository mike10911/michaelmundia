import React, { forwardRef, Ref } from "react";
import ReactDOM from "react-dom";
import { ExperienceCardModalProps } from "../../../lib/types";
import { P } from "../../../lib/typography";
import PrimaryButton from "../../primary-button/PrimaryButton";
import { BulletPoints, DateLocationDiv, ExperienceCardModalConatiner, ModalBackButtonDiv, ModalCompany, ModalDate, ModalImage, ModalLocation, ModalTitle, ModalUpperSection, TitleCompanyDiv } from "./ExperienceCardModal.styles";

const ExperienceCardModal: React.FC<ExperienceCardModalProps> = forwardRef(
  (
    { handleClicked, jobTitle, image, company, date, location, bulletPoints },
    ref: Ref<HTMLDivElement>
  ) => {
    const handleClick = () => {
      handleClicked(false);
    };
    function titleCase(title : string) {
      return title.split(' ').map(item => 
             item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(' ');
    }
    return ReactDOM.createPortal(
      <ExperienceCardModalConatiner ref={ref}>
        <ModalUpperSection>
          <ModalImage src = {image} ></ModalImage>
          <TitleCompanyDiv>
            <ModalTitle>{titleCase(jobTitle)}</ModalTitle>
            <ModalCompany>{company}</ModalCompany>
          </TitleCompanyDiv>
          <DateLocationDiv>
            <ModalDate>{date}</ModalDate>
            <ModalLocation>{location}</ModalLocation>
          </DateLocationDiv>
        </ModalUpperSection>
        <BulletPoints>
          {bulletPoints.map((bulletPoint) => (
            <li><P>{bulletPoint}</P></li>
          ))}
        </BulletPoints>
        <ModalBackButtonDiv>
        <PrimaryButton btnText={"BACK"} onClick={handleClick}></PrimaryButton>
        </ModalBackButtonDiv>
      </ExperienceCardModalConatiner>
    ,
    document.getElementById("modal-root") as Element
    );
  }
);

export default ExperienceCardModal;
