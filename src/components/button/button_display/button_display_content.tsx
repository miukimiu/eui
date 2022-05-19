/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { HTMLAttributes, FunctionComponent, Ref } from 'react';
import { useEuiTheme } from '../../../services';
import { CommonProps } from '../../common';
import { EuiLoadingSpinner } from '../../loading';
import { EuiIcon, IconType } from '../../icon';
import { euiButtonDisplayContentStyles } from './button_display_content.styles';

export type ButtonContentIconSide = 'left' | 'right' | undefined;

export type EuiButtonDisplayContentType = HTMLAttributes<HTMLSpanElement>;

/**
 * *INTERNAL ONLY*
 * This component is simply a helper component for reuse within other button components
 */
export interface EuiButtonDisplayContentProps extends CommonProps {
  /**
   * Any `type` accepted by EuiIcon
   */
  iconType?: IconType;
  /**
   * Can only be one side `left` or `right`
   */
  iconSide?: ButtonContentIconSide;
  isLoading?: boolean;
  /**
   * The button text
   */
  text?: string;
  /**
   * Object of props passed to the <span/> wrapping the content's text/children only (not icon)
   */
  textProps?: HTMLAttributes<HTMLSpanElement> &
    CommonProps & {
      ref?: Ref<HTMLSpanElement>;
      'data-text'?: string;
    };
  iconSize?: 's' | 'm';
  isDisabled: boolean;
}

export const EuiButtonDisplayContent: FunctionComponent<
  EuiButtonDisplayContentType & EuiButtonDisplayContentProps
> = ({
  children,
  textProps,
  text,
  isLoading = false,
  isDisabled = false,
  iconType,
  iconSize = 'm',
  iconSide,
  ...contentProps
}) => {
  const theme = useEuiTheme();
  const styles = euiButtonDisplayContentStyles(theme);

  const cssStyles = [
    styles.euiButtonDisplayContent,
    iconSide && styles[iconSide],
    isDisabled && styles.isDisabled,
  ];
  const cssSpinnerStyles = [styles.euiButtonDisplayContent__spinner];
  const cssIconStyles = [styles.euiButtonDisplayContent__icon];

  // Add an icon to the button if one exists.
  let icon;

  if (isLoading) {
    icon = <EuiLoadingSpinner css={cssSpinnerStyles} size={iconSize} />;
  } else if (iconType) {
    icon = (
      <EuiIcon
        css={cssIconStyles}
        type={iconType}
        size={iconSize}
        color="inherit" // forces the icon to inherit its parent color
      />
    );
  }

  return (
    <span {...contentProps} css={cssStyles}>
      {icon}
      {text && <span {...textProps}>{text}</span>}
      {children}
    </span>
  );
};
