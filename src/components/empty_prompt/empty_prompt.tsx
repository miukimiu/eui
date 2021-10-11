/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, {
  FunctionComponent,
  HTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react';
import classNames from 'classnames';

import { CommonProps } from '../common';
import { EuiTitle, EuiTitleSize } from '../title';
import { EuiFlexGroup, EuiFlexItem } from '../flex';
import { EuiSpacer } from '../spacer';
import { EuiIcon, IconColor, IconType } from '../icon';
import { EuiText, EuiTextColor } from '../text';
import { EuiPanel, _EuiPanelProps } from '../panel/panel';

const paddingSizeToClassNameMap = {
  none: null,
  s: 'euiEmptyPrompt--paddingSmall',
  m: 'euiEmptyPrompt--paddingMedium',
  l: 'euiEmptyPrompt--paddingLarge',
};

export type EuiEmptyPromptProps = CommonProps &
  Omit<HTMLAttributes<HTMLDivElement>, 'title'> & {
    /*
     * Accepts any `EuiIcon.type` or pass a custom node
     */
    iconType?: IconType;
    /**
     * Color for `iconType` when passed as an `IconType`
     */
    iconColor?: IconColor;
    /**
     * Custom icon replacing the one generated by `iconType`
     */
    icon?: ReactNode;
    /**
     * Requires passing a single element that gets wrapped in an EuiTitle.
     * Recommendation is a heading, preferrably an `<h2>` if in its own section
     */
    title?: ReactElement<any>;
    /**
     * Choose from one of the `EuiTitle.size` options
     */
    titleSize?: EuiTitleSize;
    /**
     * Gets wrapped in a subdued EuiText block.
     * Recommendation is to pass typical text elements like `<p>`
     */
    body?: ReactNode;
    /**
     * Pass a single or an array of actions (buttons) that get stacked at the bottom.
     * Recommendation is to pass the primary action first and secondary actions as empty buttons
     */
    actions?: ReactNode;
    /**
     * Optionally provide a footer. Accepts any combination of elements.
     */
    footer?: ReactNode;
    /**
     * Sets the layout. When `horizontal` the icon/illustration goes to the right column.
     */
    layout?: 'vertical' | 'horizontal';

    /**
     * Color applied to the the empty prompt panel
     */
    color?: _EuiPanelProps['color'];

    /**
     * Padding applied around the content of the empty prompt
     */
    paddingSize?: _EuiPanelProps['paddingSize'];
    /**
     * Props passed to the EuiPanel
     */
    panelProps?: _EuiPanelProps;
  };

export const EuiEmptyPrompt: FunctionComponent<EuiEmptyPromptProps> = ({
  icon,
  iconType,
  iconColor = 'subdued',
  title,
  titleSize = 'm',
  paddingSize = 'l',
  body,
  actions,
  className,
  layout = 'vertical',
  panelProps,
  color = 'transparent',
  footer,
}) => {
  let iconNode;
  if (icon) {
    iconNode = icon;
  } else if (iconType) {
    iconNode = <EuiIcon type={iconType} size="xxl" color={iconColor} />;
  }

  let titleNode;
  let bodyNode;
  if (body || title) {
    if (title) {
      titleNode = <EuiTitle size={titleSize}>{title}</EuiTitle>;
    }

    if (body) {
      bodyNode = (
        <EuiTextColor color="subdued">
          {title && <EuiSpacer size="m" />}
          <EuiText>{body}</EuiText>
        </EuiTextColor>
      );
    }
  }

  let actionsNode;
  if (actions) {
    let actionsRow;

    if (Array.isArray(actions)) {
      actionsRow = (
        <EuiFlexGroup
          gutterSize="m"
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          {actions.map((action, index) => (
            <EuiFlexItem key={index} grow={false}>
              {action}
            </EuiFlexItem>
          ))}
        </EuiFlexGroup>
      );
    } else {
      actionsRow = actions;
    }

    actionsNode = (
      <>
        <EuiSpacer size="l" />
        {actionsRow}
      </>
    );
  }

  const contentNodes = (
    <>
      {titleNode}
      {bodyNode}
      {actionsNode}
    </>
  );

  const isVerticalLayout = layout === 'vertical';

  const classes = classNames(
    'euiEmptyPrompt',
    { 'euiEmptyPrompt--verticalLayout': isVerticalLayout },
    { 'euiEmptyPrompt--horizontalLayout': !isVerticalLayout },
    paddingSizeToClassNameMap[paddingSize],
    className
  );

  const customPanelProps: _EuiPanelProps = {
    ...panelProps,
    className: classes,
    color: color,
    paddingSize: 'none',
  };

  return (
    <EuiPanel {...customPanelProps}>
      <div className="euiEmptyPrompt__main">
        <div className="euiEmptyPrompt__illustration">{iconNode}</div>
        <div className="euiEmptyPrompt__content">
          <div className="euiEmptyPrompt__contentInner">{contentNodes}</div>
        </div>
      </div>
      {footer && <div className="euiEmptyPrompt__footer">{footer}</div>}
    </EuiPanel>
  );
};
