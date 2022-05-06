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
  MouseEventHandler,
  ReactNode,
  RefCallback,
  ReactElement,
} from 'react';
import classNames from 'classnames';

import { CommonProps } from '../common';

import { EuiNotificationBadge } from '../badge';

import { EuiLoadingSpinner } from '../loading';
import { EuiInnerText } from '../inner_text';

import { cloneElementWithCss } from '../../services/theme/clone_element';
import { useEuiTheme } from '../../services';
import {
  euiFacetButtonStyles,
  euiFacetButtonContentStyles,
  euiFacetButtonContentElementsStyles,
} from './facet_button.styles';

export interface EuiFacetButtonProps
  extends CommonProps,
    Omit<HTMLAttributes<HTMLButtonElement>, 'onClick'> {
  buttonRef?: RefCallback<HTMLButtonElement>;
  /**
   * ReactNode to render as this component's content
   */
  children: ReactNode;
  /**
   * Any node, but preferably a `EuiIcon` or `EuiAvatar`
   */
  icon?: ReactNode;
  isDisabled?: boolean;
  /**
   * Adds/swaps for loading spinner & disables
   */
  isLoading?: boolean;
  /**
   * Changes visual of button to indicate it's currently selected
   */
  isSelected?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  /**
   * Adds a notification indicator for displaying the quantity provided
   */
  quantity?: number;
}

export const EuiFacetButton: FunctionComponent<EuiFacetButtonProps> = ({
  children,
  className,
  icon,
  isDisabled = false,
  isLoading = false,
  isSelected = false,
  quantity,
  buttonRef,
  ...rest
}) => {
  // If in the loading state, force disabled to true
  isDisabled = isLoading ? true : isDisabled;

  const selection = isSelected ? 'isSelected' : 'unSelected';

  const classes = classNames('euiFacetButton', className);

  const theme = useEuiTheme();

  const styles = euiFacetButtonStyles(theme);
  const cssStyles = [styles.euiFacetButton, styles[selection]];

  const contentStyles = euiFacetButtonContentStyles(theme);
  const cssContentStyles = [contentStyles.euiFacetButton__content];

  const contentElementsStyles = euiFacetButtonContentElementsStyles(theme);
  const cssTextStyles = [contentElementsStyles.euiFacetButton__text];
  const cssIconStyles = [contentElementsStyles.euiFacetButton__icon];
  const cssSpinnerStyles = [contentElementsStyles.euiFacetButton__spinner];
  const cssQuantityStyles = [contentElementsStyles.euiFacetButton__quantity];

  // Add quantity number if provided or loading indicator
  let buttonQuantity: ReactElement;

  if (isLoading) {
    buttonQuantity = <EuiLoadingSpinner css={cssSpinnerStyles} size="m" />;
  } else if (typeof quantity === 'number') {
    buttonQuantity = (
      <EuiNotificationBadge
        css={cssQuantityStyles}
        className="euiFacetButton__quantity"
        size="m"
        color={!isSelected || isDisabled ? 'subdued' : 'accent'}
      >
        {quantity}
      </EuiNotificationBadge>
    );
  }

  // Add an icon to the button if one exists.
  let buttonIcon: ReactElement;

  if (React.isValidElement<{ className?: string }>(icon)) {
    buttonIcon = cloneElementWithCss(icon, {
      css: cssIconStyles,
      className: 'euiFacetButton__icon',
    });
  }

  return (
    <EuiInnerText>
      {(ref, innerText) => (
        <button
          css={cssStyles}
          className={classes}
          disabled={isDisabled}
          type="button"
          ref={buttonRef}
          title={rest['aria-label'] || innerText}
          {...rest}
        >
          <span css={cssContentStyles}>
            {buttonIcon}

            <span
              css={cssTextStyles}
              className="euiFacetButton__text"
              data-text={innerText}
              ref={ref}
            >
              {children}
            </span>
            {buttonQuantity}
          </span>
        </button>
      )}
    </EuiInnerText>
  );
};
