import React, { useEffect, useState } from 'react';

import {
  EuiButton,
  EuiButtonEmpty,
  EuiSpacer,
  EuiTourStep,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiButtonIcon,
} from '../../../../src/components';

const demoTourSteps = [
  {
    step: 1,
    title: 'Preview mode',
    content: <p>See how your project looks like.</p>,
    anchorRef: 'tourStep1',
    iconType: 'eye',
  },
  {
    step: 2,
    title: 'Build Mode',
    content: <p>Build your project.</p>,
    anchorRef: 'tourStep2',
    iconType: 'editorCodeBlock',
  },
  {
    step: 3,
    title: 'Comment mode',
    content: <p>Collaborate with your colleagues.</p>,
    anchorRef: 'tourStep3',
    iconType: 'editorComment',
  },
  {
    step: 2,
    title: 'Share',
    content: <p>Share your project.</p>,
    anchorRef: 'tourStep4',
    iconType: 'share',
  },
];

const tourConfig = {
  currentTourStep: 1,
  isTourActive: true,
  tourPopoverWidth: 360,
  tourSubtitle: 'Demo tour',
};

const STORAGE_KEY = 'tourDemo';

export default () => {
  const [state, setState] = useState(() => {
    let initialState: any = localStorage.getItem(STORAGE_KEY);
    if (initialState) {
      initialState = JSON.parse(initialState);
    } else {
      initialState = tourConfig;
    }
    return initialState;
  });
  useEffect(() => {
    // Store the tour data
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const incrementStep = () => {
    setState({
      ...state,
      currentTourStep: state.currentTourStep + 1,
    });
  };

  const handleClick = () => {
    incrementStep();
  };

  const resetTour = () => {
    setState({
      ...state,
      currentTourStep: 1,
      isTourActive: true,
    });
  };

  const finishTour = () => {
    setState({
      ...state,
      isTourActive: false,
    });
  };

  return (
    <div>
      <EuiPanel style={{ width: 'max-content' }}>
        <EuiFlexGroup>
          {demoTourSteps.map((step, index) => (
            <EuiFlexItem grow={false}>
              <EuiTourStep
                content={step.content}
                isStepOpen={
                  state.isTourActive && state.currentTourStep === index + 1
                }
                minWidth={state.tourPopoverWidth}
                onFinish={finishTour}
                step={index + 1}
                stepsTotal={demoTourSteps.length}
                subtitle={state.tourSubtitle}
                title={step.title}
                anchorPosition="rightUp"
                footerAction={[
                  <EuiButtonEmpty size="s" color="text" onClick={finishTour}>
                    Close tour
                  </EuiButtonEmpty>,
                  <EuiButton color="success" size="s" onClick={handleClick}>
                    Next
                  </EuiButton>,
                ]}
              >
                <EuiButtonIcon iconType={step.iconType} color="text" />
              </EuiTourStep>
            </EuiFlexItem>
          ))}
        </EuiFlexGroup>
      </EuiPanel>
      <EuiSpacer />
      <EuiButtonEmpty iconType="refresh" flush="left" onClick={resetTour}>
        Reset tour
      </EuiButtonEmpty>
    </div>
  );
};
