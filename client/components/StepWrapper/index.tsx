import React from 'react';

interface StepWrapperProps {
  activeStep: number;
}

const steps = ['Информация о треке', 'Загрузка обложки', 'Загрузка аудио'];

const StepWrapper: React.FC<StepWrapperProps> = ({ activeStep, children }) => {
  
  const stepsJSX = steps.map((step, index) => <div key={index}>{step}</div>);

  return (
    <div>

      <div>{stepsJSX}</div>

      <div>
        {children}
      </div>
    </div>
  );
}

export default StepWrapper;
