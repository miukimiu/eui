import React from 'react';
import { Link } from 'react-router-dom';
import { renderToHtml } from '../../../services';

import { GuideSectionTypes } from '../../../components';

import { EuiText, EuiSpacer } from '../../../../../src/components';

import NotificationHeaderButton from './notification_header_button';
const notificationHeaderButtonSource = require('!!raw-loader!./notification_header_button');
const notificationHeaderButtonHtml = renderToHtml(Notification);

import NotificationFlyout from './notification_flyout';
const notificationFlyoutSource = require('!!raw-loader!./notification_flyout');
const notificationFlyoutHtml = renderToHtml(Notification);

import NotificationAll from './notification_all';
const notificationAllSource = require('!!raw-loader!./notification_all');
const notificationAllHtml = renderToHtml(NotificationAll);

export const NotificationFlyoutExample = {
  title: 'Notification Flyout',
  intro: (
    <EuiText>
      <p>
        The <strong>Notification Flyout</strong> template establishes a pattern
        to show different types of notifications and also suggestions.
      </p>
      <p>
        This template is a combination of a{' '}
        <Link to="/layout/flyout">
          <strong>EuiFlyout</strong>
        </Link>{' '}
        that is triggered by a button from a{' '}
        <Link to="/layout/header">
          <strong>EuiHeader</strong>
        </Link>
        . Inside the{' '}
        <Link to="/layout/flyout">
          <strong>EuiFlyout</strong>
        </Link>{' '}
        there are different components to handle notifications and product
        suggestions. By using this template, we assure consistency across
        Elastic Products, good accessibility and user experience.
      </p>
      <EuiSpacer />
    </EuiText>
  ),
  sections: [
    {
      title: 'Notification header button',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: notificationHeaderButtonSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: notificationHeaderButtonHtml,
        },
      ],
      text: (
        <div>
          <p>
            A <strong>EuiNotificationHeaderButton</strong> should live inside a{' '}
            <Link to="/layout/header">
              <strong>EuiHeader</strong>
            </Link>
            . This component is responsible to indicate new notifications and to
            trigger a{' '}
            <Link to="/layout/flyout">
              <strong>EuiFlyout</strong>
            </Link>{' '}
            where all the new and unread notifications live. .
          </p>
        </div>
      ),
      //   props: {
      //     EuiPage,
      //   },
      demo: (
        <div className="guideDemo__highlightLayout">
          <NotificationHeaderButton />
        </div>
      ),
    },
    {
      title: 'Notification flyout',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: notificationFlyoutSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: notificationFlyoutHtml,
        },
      ],
      text: (
        <div>
          <p>
            The notification flyout is a combination of different components. A
            few of them are just opinionated implementations of other EUI
            components.
          </p>
          <h3>Flyout components </h3>
          <p>
            Use the EuiNotificationFlyout to create a flyout. As a template
            component, all the design decisions are already done.
          </p>
          <p>
            Use EuiNotificationFlyoutHeader to create the flyout header and add
            actions you might need, like filters.
          </p>
          <p>
            Use the EuiNotificationFlyoutBody as a wrapper for the notifications
            messages and suggestions.
          </p>
          <p>
            Use the EuiNotificationFlyoutFooter to add main actions like buttons
            to redirect the user to a notification center.
          </p>
        </div>
      ),
      //   props: {
      //     EuiPage,
      //   },
      demo: (
        <div className="guideDemo__highlightLayout">
          <NotificationFlyout />
        </div>
      ),
    },
    {
      title: 'Full pattern with header and flyout',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: notificationAllSource,
        },
        {
          type: GuideSectionTypes.HTML,
          code: notificationAllHtml,
        },
      ],
      text: (
        <div>
          <p>
            A <strong>EuiNotificationHeaderButton</strong> should live inside a{' '}
            <Link to="/layout/header">
              <strong>EuiHeader</strong>
            </Link>
            . This component is responsible to indicate new notifications and to
            trigger a{' '}
            <Link to="/layout/flyout">
              <strong>EuiFlyout</strong>
            </Link>{' '}
            where all the new and unread notifications live. .
          </p>
        </div>
      ),
      //   props: {
      //     EuiPage,
      //   },
      demo: (
        <div className="guideDemo__highlightLayout">
          <NotificationHeaderButton />
        </div>
      ),
    },
  ],
};
