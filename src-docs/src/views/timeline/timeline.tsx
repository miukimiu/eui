import React from 'react';
import {
  EuiTimeline,
  EuiTimelineItem,
  EuiTimelineProps,
  EuiText,
  EuiAvatar,
  EuiStepNumber,
  EuiHorizontalRule,
} from '../../../../src/components';

const items: EuiTimelineProps['items'] = [
  {
    icon: 'email',
    body: (
      <EuiText size="s">
        <p>
          <strong>janet@elastic.co</strong> was invited to the project
        </p>
      </EuiText>
    ),
  },
  {
    icon: 'pencil',
    body: (
      <EuiText size="s">
        <p>
          The project was renamed to <strong>Revenue Dashboard</strong>
        </p>
      </EuiText>
    ),
  },
  {
    icon: 'folderClosed',
    body: (
      <EuiText size="s">
        <p>The project was archived</p>
      </EuiText>
    ),
  },
];

export default () => (
  <>
    <EuiTimeline items={items} />

    <EuiHorizontalRule />

    <EuiTimeline>
      <EuiTimelineItem icon="email">
        <EuiText size="s">
          <p>
            <strong>janet@elastic.co</strong> was invited to the project
          </p>
        </EuiText>
      </EuiTimelineItem>
      <EuiTimelineItem
        icon={<EuiAvatar name="Username" />}
        panelProps={{ color: 'danger' }}
      >
        <EuiText size="s">
          <p>The project was archived</p>
        </EuiText>
      </EuiTimelineItem>
      <EuiTimelineItem icon={<EuiStepNumber number={3} />}>
        <EuiText size="s">
          <h3>Step 3</h3>
          <p>
            The project was renamed to <strong>Revenue Dashboard</strong>
          </p>
        </EuiText>
      </EuiTimelineItem>
    </EuiTimeline>
  </>
);
