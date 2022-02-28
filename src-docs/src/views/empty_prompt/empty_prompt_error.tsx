import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { EuiEmptyPrompt } from '../../../../src/components';
import { examples, examplesType } from './_examples';
import { GuideSection } from '../../components/guide_section/guide_section';
import { GuideSectionTypes } from '../../components/guide_section/guide_section_types';

const example: examplesType = examples.unableToLoadDashboards;

export default () => {
  const emptyPrompt = (
    <EuiEmptyPrompt
      iconType={example.iconType}
      color="danger"
      title={example.title}
      body={example.body}
    />
  );

  const emptyPromptJSXString = `
  import React from 'react';
  import { EuiEmptyPrompt, EuiLoadingLogo } from '@elastic/eui';
  
  export default () => (
    ${reactElementToJSXString(emptyPrompt)}
  );
  `;

  const errorSnippet = `<EuiEmptyPrompt
  color="danger"
  iconType="alert"
  title={<h2>There was an error</h2>}
/>`;

  return (
    <GuideSection
      demo={emptyPrompt}
      source={[
        {
          type: GuideSectionTypes.JSX_STRING,
          code: emptyPromptJSXString,
        },
      ]}
      props={{ EuiEmptyPrompt }}
      snippet={errorSnippet}
    />
  );
};
