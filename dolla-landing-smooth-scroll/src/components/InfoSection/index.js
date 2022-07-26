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

const InfoSection = () => {
  return (
    <InfoSectionContainer>
      <InfoSectionWrapper>
        <InfoSectionRow>
          <Column1>
            <TextWrapper>
              <TopLine>TopLine</TopLine>
              <Heading>Heading</Heading>
              <Subtitle>Subtitle</Subtitle>
              <BtnWrapper>
                <Button to="home">Button</Button>
              </BtnWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img />
            </ImgWrapper>
          </Column2>
        </InfoSectionRow>
      </InfoSectionWrapper>
    </InfoSectionContainer>
  );
};

export default InfoSection;
