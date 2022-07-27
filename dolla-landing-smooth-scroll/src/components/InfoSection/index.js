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
  primary,
  dark,
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
                <Button
                  to="home"
                  smooth={true}
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                  primary={primary ? 1 : 0}
                  dark={dark ? 1 : 0}
                >
                  {buttonLabel}
                </Button>
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
