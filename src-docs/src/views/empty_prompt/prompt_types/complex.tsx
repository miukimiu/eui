import React from 'react';

import { EuiEmptyPrompt } from '../../../../../src/components';
import { typesOfUseCases } from '../_types_of_use_cases';

const example: any = typesOfUseCases.noData.example;

export default () => (
  <EuiEmptyPrompt
    icon={example.icon}
    title={example.title}
    layout="horizontal"
    color="plain"
    body={example.body}
    actions={example.actions}
    footer={example.footer}
  />
);
