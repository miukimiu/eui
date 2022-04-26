/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { FunctionComponent, ReactNode } from 'react';
import { CommonProps, keysOf } from '../common';
import { useEuiTheme } from '../../services';
import classNames from 'classnames';
import { IconType } from '../icon';
import { EuiPanel, EuiPanelProps } from '../panel';
import { EuiAvatar } from '../avatar';
import { euiCommentEventStyles } from './comment_event.styles';

export interface EuiCommentEventProps extends CommonProps {
  /**
   * Author of the comment. When no `timelineIcon` is passed the username initial letter is used to generate an avatar.
   */
  username: string;
  /**
   * Time of occurrence of the event. Its format is set on the consumer's side
   */
  timestamp?: ReactNode;
  /**
   * Describes the event that took place
   */
  event?: ReactNode;
  /**
   * Custom actions that the user can perform from the comment's header
   */
  actions?: ReactNode | ReactNode[];
  /**
   * Use `update` when the comment is primarily showing info about actions that the user or the system has performed (e.g. "user1 edited a case").
   * Use `custom` when passing a children that doesn't require the event header. Elements like `username`, `timestamp`, `event` and `actions` won't show.
   */
  type?: EuiCommentType;
  /**
   * Custom icon that shows before the username only when the `type` is `"update"`.
   */
  updateIcon?: IconType;
  /**
   * Background color for the event header only when the `type` is `"update"`.
   * When a color is used it adds a padding.
   */
  updateColor?: EuiPanelProps['color'];
  /**
   * Accepts any ReactNode.
   */
  children?: ReactNode;
}

const typeToClassNameMap = {
  regular: 'euiCommentEvent--regular',
  update: 'euiCommentEvent--update',
  custom: 'euiCommentEvent--custom',
};

export const TYPES = keysOf(typeToClassNameMap);
export type EuiCommentType = keyof typeof typeToClassNameMap;

export const EuiCommentEvent: FunctionComponent<EuiCommentEventProps> = ({
  children,
  className,
  username,
  timestamp,
  type = 'regular',
  event,
  actions,
  updateIcon,
  updateColor,
}) => {
  const classes = classNames(
    'euiCommentEvent',
    typeToClassNameMap[type],
    className
  );

  const hasUpdateColor = updateColor ? true : false;

  const euiTheme = useEuiTheme();
  const styles = euiCommentEventStyles(euiTheme, hasUpdateColor);

  const cssStyles = [styles.euiCommentEvent, styles[type]];
  const headerCssStyles = styles.euiCommentEvent__header;
  const bodyCssStyles = styles.euiCommentEvent__body;
  const headerUsernameCssStyles = styles.euiCommentEvent__headerUsername;
  const headerDataCssStyles = styles.euiCommentEvent__headerData;
  const headerIconUpdateCssStyles = styles.euiCommentEvent__headerIconUpdate;

  const isTypeUpdate = type === 'update';
  const isTypeCustom = type === 'custom';
  const isFigure =
    type === 'regular' ||
    (type === 'update' && typeof children !== 'undefined');

  const Element = isFigure ? 'figure' : 'div';
  const HeaderElement = isFigure ? 'figcaption' : 'div';

  const headerElements = (
    <>
      <span className="euiCommentEvent__headerData" css={headerDataCssStyles}>
        <span
          className="euiCommentEvent__headerUsername"
          css={headerUsernameCssStyles}
        >
          {username}
        </span>
        <span className="euiCommentEvent__headerEvent">{event}</span>
        {timestamp ? (
          <span className="euiCommentEvent__headerTimestamp">
            <time>{timestamp}</time>
          </span>
        ) : undefined}
      </span>
      {actions ? (
        <span className="euiCommentEvent__headerActions">{actions}</span>
      ) : undefined}
    </>
  );

  const panelProps = updateColor
    ? { color: updateColor, paddingSize: 's' }
    : { color: 'transparent', paddingSize: 'none' };

  const updateEventHeader = !isTypeCustom && (
    <EuiPanel {...(panelProps as EuiPanelProps)}>
      <HeaderElement className="euiCommentEvent__header" css={headerCssStyles}>
        {updateIcon && (
          <EuiAvatar
            name=""
            size="s"
            iconType={updateIcon}
            color="subdued"
            className="euiCommentEvent__headerIconUpdate"
            css={headerIconUpdateCssStyles}
          />
        )}
        {headerElements}
      </HeaderElement>
    </EuiPanel>
  );

  const regularEventHeader = !isTypeCustom && (
    <HeaderElement className="euiCommentEvent__header" css={headerCssStyles}>
      {headerElements}
    </HeaderElement>
  );

  return (
    <Element className={classes} css={cssStyles}>
      {isTypeUpdate ? updateEventHeader : regularEventHeader}
      {children ? (
        <div className="euiCommentEvent__body" css={bodyCssStyles}>
          {children}
        </div>
      ) : undefined}
    </Element>
  );
};
