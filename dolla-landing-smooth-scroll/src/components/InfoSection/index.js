import { Button } from '../ButtonElements';

import {
  InfoSectionContainer,
  InfoSectionWrapper,
  InfoSectionRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  Column2,
  ImgWrapper,
  Img,
} from './InfoSectionElements';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
}) => {
  return (
    <InfoSectionContainer lightBg={lightBg} id={id}>
      <InfoSectionWrapper>
        <InfoSectionRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrapper>
                <Button to="home">{buttonLabel}</Button>
              </BtnWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </Column2>
        </InfoSectionRow>
      </InfoSectionWrapper>
    </InfoSectionContainer>
  );
};

export default InfoSection;
