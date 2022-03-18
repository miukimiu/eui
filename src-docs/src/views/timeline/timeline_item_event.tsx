import React from 'react';
import {
  EuiTimelineItem,
  EuiAvatar,
  EuiText,
  EuiCodeBlock,
  EuiLink,
} from '../../../../src/components';

export default () => (
  <div>
    <EuiTimelineItem
      icon={<EuiAvatar name="Checked" iconType="pencil" color="shade" />}
      eventHeader={
        <EuiText size="s">
          <p>
            <strong>Janet</strong> edited the dashboard 4 days ago
          </p>
        </EuiText>
      }
    />

    <EuiTimelineItem
      icon={<EuiAvatar name="system" iconType="editorComment" color="shade" />}
      eventHeader={
        <EuiText size="s">
          <p>
            <strong>Nicole</strong> mentioned this dashboard in{' '}
            <EuiLink href="#">case/comment#021</EuiLink> 2 days ago
          </p>
        </EuiText>
      }
    />

    <EuiTimelineItem
      icon={<EuiAvatar name="system" iconType="alert" color="shade" />}
      eventHeader={
        <EuiText size="s">
          <p>Error detected in dashboard 5 minutes ago</p>
        </EuiText>
      }
      eventProps={{
        paddingSize: 's',
        color: 'danger',
      }}
    />

    <EuiTimelineItem
      icon={
        <EuiAvatar name="system" iconType="editorCodeBlock" color="shade" />
      }
      eventHeader={
        <EuiText size="s">
          <p>
            <strong>Nicole</strong> generated a new iframe 2 minutes ago
          </p>
        </EuiText>
      }
      eventBody={
        <EuiCodeBlock
          language="html"
          isCopyable
          transparentBackground
          paddingSize="none"
        >
          {`<!-- Your dashboard iframe -->
<iframe src="#" width="560" height="315" allowfullscreen="allowfullscreen"></iframe>`}
        </EuiCodeBlock>
      }
      eventProps={{
        hasBorder: true,
        paddingSize: 's',
        headerColor: 'subdued',
      }}
    />
  </div>
);
