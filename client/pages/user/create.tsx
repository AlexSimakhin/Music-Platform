import React, { useState } from 'react';
import styled from 'styled-components';
import MainLayout from '../../layout/MainLayout';
import { useRouter } from 'next/router';
import StepWrapper from '../../components/StepWrapper';
import FileUpload from './../../components/FileUpload/index';


const GridWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const GridCard = styled.div`
  display: grid;
`;


const Index: React.FC = () => {
  const router = useRouter();

  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState(null);
  const [audio, setAudio] = useState(null);

  const next = () => {
    if (activeStep !== 2) {
      setActiveStep(prev => prev + 1);
    }
  };

  const back = () => {
    setActiveStep(prev => prev - 1);
  };

  const activeStepJSX = (
    <>
      {activeStep === 0 && (
        <div>
          <h1>Шаг 1</h1>
          <input type="text" placeholder="Название трека" />
          <input type="text" placeholder="Имя исполнителя" />
          <textarea rows={3} placeholder="Слова к треку"></textarea>
        </div>
      )}
      {activeStep === 1 && (
        <FileUpload setFile={setPicture} accept="image/*" >
          <button>Загрузить изображение</button>
        </FileUpload>
      )}
      {activeStep === 2 && (
        <FileUpload setFile={setAudio} accept="audio/*" >
          <button>Загрузить аудио</button>
        </FileUpload>
      )}
    </>
  );

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStepJSX}
      </StepWrapper>

      <div>
        <button disabled={activeStep === 0} onClick={back}>Назад</button>
        <button onClick={next}>Далее</button>
      </div>
    </MainLayout>
  );
}

export default Index;
