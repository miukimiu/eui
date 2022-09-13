/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { css } from '@emotion/react';
import {
  euiCanAnimate,
  euiFontSize,
  logicalCSS,
  euiBackgroundColor,
} from '../../global_styling';
import { UseEuiTheme } from '../../services';
import { euiButtonColor } from '../../themes/amsterdam/global_styling/mixins/button';

export const euiListGroupItemStyles = (
  euiThemeContext: UseEuiTheme,
  isActive: boolean,
  isClickable: boolean,
  isDisabled: boolean
) => {
  const euiTheme = euiThemeContext.euiTheme;

  return {
    // Base
    euiListGroupItem: css`
      padding: 0;
      display: flex;
      align-items: center;
      position: relative;

      ${euiCanAnimate} {
        transition: background-color ${euiTheme.animation.fast};
      }
    `,
    // Sizes
    xs: css`
      border-radius: ${euiTheme.border.radius.small};
    `,
    s: css`
      border-radius: ${euiTheme.border.radius.small};
    `,
    m: css`
      border-radius: ${euiTheme.border.radius.medium};
    `,
    l: css`
      border-radius: ${euiTheme.border.radius.medium};
    `,
    // Colors
    primary: css`
      ${isActive &&
      !isDisabled &&
      `
        background-color: ${euiBackgroundColor(euiThemeContext, 'primary', {
          method: 'transparent',
        })};
      `};

      ${isClickable &&
      !isDisabled &&
      `
        &:hover,
        &:focus-within {
          background-color: ${euiBackgroundColor(euiThemeContext, 'primary', {
            method: 'transparent',
          })};
        }
      `};
    `,
    text: css`
      ${isActive &&
      !isDisabled &&
      `
        background-color: ${euiBackgroundColor(euiThemeContext, 'subdued', {
          method: 'transparent',
        })};
      `};

      ${isClickable &&
      !isDisabled &&
      `
        &:hover,
        &:focus-within {
          background-color: ${euiBackgroundColor(euiThemeContext, 'subdued', {
            method: 'transparent',
          })};
        }
      `};
    `,
    subdued: css`
      ${isActive &&
      !isDisabled &&
      `
        background-color: ${euiBackgroundColor(euiThemeContext, 'subdued', {
          method: 'transparent',
        })};
      `};

      ${isClickable &&
      !isDisabled &&
      `
        &:hover,
        &:focus-within {
          background-color: ${euiBackgroundColor(euiThemeContext, 'subdued', {
            method: 'transparent',
          })};
        }
      `};
    `,
  };
};

export const euiListGroupItemInnerStyles = (
  euiThemeContext: UseEuiTheme,
  isClickable: boolean,
  isDisabled: boolean
) => {
  const euiTheme = euiThemeContext.euiTheme;

  return {
    // Base
    euiListGroupItem__inner: css`
      padding: ${euiTheme.size.xs} ${euiTheme.size.s};
      display: flex;
      align-items: center;
      flex-grow: 1;
      text-align: start;
      max-inline-size: 100%;
      font-weight: inherit;

      ${isClickable &&
      !isDisabled &&
      `
        &:hover,
        &:focus {
          text-decoration: underline;
        }
      `}
    `,
    // Sizes
    xs: css`
      ${euiFontSize(euiThemeContext, 'xs')};
      font-weight: ${euiTheme.font.weight.medium};
      letter-spacing: 0;
      ${logicalCSS('min-height', euiTheme.size.l)}
    `,
    s: css`
      ${euiFontSize(euiThemeContext, 's')};
      font-weight: ${euiTheme.font.weight.medium};
      letter-spacing: 0;
      ${logicalCSS('min-height', euiTheme.size.xl)}
    `,
    m: css`
      ${euiFontSize(euiThemeContext, 'm')};
      ${logicalCSS('min-height', euiTheme.size.xl)}
    `,
    l: css`
      ${euiFontSize(euiThemeContext, 'l')};
      ${logicalCSS('min-height', euiTheme.size.xxl)}
    `,
    // Colors
    primary: css`
      ${!isDisabled &&
      `
        color: ${euiButtonColor(euiThemeContext, 'primary').color};
      `}
    `,
    text: css`
      ${!isDisabled &&
      `
      color: ${euiButtonColor(euiThemeContext, 'text').color};
      `}
    `,
    subdued: css`
      ${!isDisabled &&
      `
        color: ${euiTheme.colors.subduedText};
      `}
    `,
    ghost: css`
      ${!isDisabled &&
      `
      color: ${euiTheme.colors.ghost};
    `}
    `,
    // Variants
    isDisabled: css`
      cursor: not-allowed;

      &,
      &:hover,
      &:focus {
        color: ${euiButtonColor(euiThemeContext, 'disabled').color};
        cursor: not-allowed;
        background-color: transparent;
        text-decoration: none;
      }
    `,
    isActive: css``,
    isClickable: css``,
    wrapText: css`
      inline-size: 100%;
      word-break: break-word;
    `,
  };
};

export const euiListGroupItemLabelStyles = () => {
  return {
    // Base
    euiListGroupItem__label: css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `,
    wrapText: css`
      white-space: inherit;
    `,
  };
};

export const euiListGroupItemIconStyles = ({ euiTheme }: UseEuiTheme) => {
  return {
    // Base
    euiListGroupItem__icon: css`
      ${logicalCSS('margin-right', euiTheme.size.m)};
      flex-grow: 0;
      flex-shrink: 0;
    `,
  };
};

export const euiListGroupItemTooltipStyles = () => {
  return {
    // Base
    euiListGroupItem__tooltip: css`
      ${logicalCSS('width', '100%')};
    `,
  };
};