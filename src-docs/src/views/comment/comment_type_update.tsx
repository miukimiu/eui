import React from 'react';
import {
  EuiCommentList,
  EuiComment,
  EuiBadge,
  EuiText,
  EuiCode,
  EuiFlexGroup,
  EuiFlexItem,
} from '../../../../src/components/';

const eventMessage = (
  <EuiText size="s">
    <p>
      This is a <EuiCode>eventMessage</EuiCode>. It displays in the event
      header.
    </p>
  </EuiText>
);

const eventWihtMultipleTags = (
  <EuiFlexGroup responsive={false} alignItems="center" gutterSize="s" wrap>
    <EuiFlexItem grow={false}>added tags</EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiBadge>case</EuiBadge>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiBadge>phising</EuiBadge>
    </EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiBadge>security</EuiBadge>
    </EuiFlexItem>
  </EuiFlexGroup>
);

const eventWithOneTag = (
  <EuiFlexGroup responsive={false} alignItems="center" gutterSize="xs">
    <EuiFlexItem grow={false}>marked cases as</EuiFlexItem>
    <EuiFlexItem grow={false}>
      <EuiBadge color="danger">Closed</EuiBadge>
    </EuiFlexItem>
  </EuiFlexGroup>
);

export default () => (
  <EuiCommentList aria-label="Comment type update example">
    <EuiComment
      avatarName="system"
      username="luisg"
      event={eventWihtMultipleTags}
      timestamp="22 hours ago"
      eventIcon="tag"
      eventIconAriaLabel="tag"
    />
    <EuiComment
      username="system"
      avatarName="system"
      avatarIcon="dot"
      event="pushed a new incident"
      timestamp="20 hours ago"
      headerColor="accent"
    />
    <EuiComment
      avatarName="milal"
      username="milal"
      event={eventWithOneTag}
      timestamp="6 hours ago"
      eventMessage={eventMessage}
      headerColor="accent"
    >
      {eventMessage}
    </EuiComment>
  </EuiCommentList>
);
