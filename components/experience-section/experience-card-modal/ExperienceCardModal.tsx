
import React, { forwardRef, Ref } from "react";
import ReactDOM from "react-dom";
import { ExperienceCardModalProps } from "../../../lib/types";
import { P } from "../../../lib/typography";
import PrimaryButton from "../../primary-button/PrimaryButton";
import { BulletPoints, DateLocationDiv, ExperienceCardModalConatiner, ModalBackButtonDiv, ModalCompany, ModalDate, ModalLocation, ModalTitle, ModalUpperSection, TitleCompanyDiv } from "./ExperienceCardModal.styles";
import Image from "next/image";

// eslint-disable-next-line react/display-name
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
    const [domReady, setDomReady] = React.useState(false)
    
    React.useEffect(() => {
      setDomReady(true)
    }, [])

    return domReady ? ReactDOM.createPortal(
      <ExperienceCardModalConatiner ref={ref}>
        <ModalUpperSection>
          <Image alt="modal image" src = {image} ></Image>
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
            <li key={1}><P>{bulletPoint}</P></li>
          ))}
        </BulletPoints>
        <ModalBackButtonDiv>
        <PrimaryButton btnText={"BACK"} onClick={handleClick}></PrimaryButton>
        </ModalBackButtonDiv>
      </ExperienceCardModalConatiner>
    ,
    document.body as Element
    ) : null;
  }
);

export default ExperienceCardModal;
