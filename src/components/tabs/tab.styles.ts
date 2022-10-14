/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { css } from '@emotion/react';
import { logicalCSS } from '../../global_styling';
import { UseEuiTheme } from '../../services';

import { EuiTabsSizes } from './tabs';
import { EuiTitleSize } from '../title';
import { euiTitle } from '../title/title.styles';

type EuiTabSizeCSS = {
  lineHeight: string;
  padding: string;
  margin: string;
  titleSize: EuiTitleSize;
};

export const euiTabsStyles = (euiThemeContext: UseEuiTheme) => {
  const { euiTheme } = euiThemeContext;

  const tabSizeToCssPropertyMap: { [size in EuiTabsSizes]: EuiTabSizeCSS } = {
    s: {
      lineHeight: `line-height: ${euiTheme.size.xl}`,
      padding: `padding: 0 ${euiTheme.size.xs}`,
      margin: `${logicalCSS('margin-left', euiTheme.size.m)}`,
      titleSize: 'xxxs',
    },
    m: {
      lineHeight: `line-height: ${euiTheme.size.xxl}`,
      padding: `padding: 0 ${euiTheme.size.xs}`,
      margin: `${logicalCSS('margin-left', euiTheme.size.base)}`,
      titleSize: 'xxs',
    },
    l: {
      lineHeight: `line-height: calc(${euiTheme.size.xl} + ${euiTheme.size.s})`,
      padding: `padding: 0 ${euiTheme.size.xs}`,
      margin: `${logicalCSS('margin-left', euiTheme.size.l)}`,
      titleSize: 'xs',
    },
    xl: {
      lineHeight: `line-height: calc(${euiTheme.size.xxxl} + ${euiTheme.size.s})`,
      padding: `padding: ${euiTheme.size.s} ${euiTheme.size.xs}`,
      margin: `${logicalCSS('margin-left', euiTheme.size.xl)}`,
      titleSize: 's',
    },
  };

  const tabSizeStyles = (size: EuiTabsSizes) => {
    return css`
      .euiTab {
        ${tabSizeToCssPropertyMap[size].padding};

        & + .euiTab {
          ${tabSizeToCssPropertyMap[size].margin};
        }
      }

      .euiTab__content {
        ${euiTitle(euiThemeContext, tabSizeToCssPropertyMap[size].titleSize)};
        ${tabSizeToCssPropertyMap[size].lineHeight};
      }
    `;
  };

  return {
    euiTabs: css`
      display: flex;
      ${logicalCSS('max-width', '100%')};
      ${logicalCSS('overflow-x', 'auto')};
      ${logicalCSS('overflow-y', 'hidden')};
      position: relative;
      flex-shrink: 0;
    `,
    bottomBorder: css`
      box-shadow: inset 0 calc(${euiTheme.border.width.thin} * -1) 0
        ${euiTheme.border.color};
    `,

    size_s: css`
      ${tabSizeStyles('s')};
    `,

    // DEFAULT
    size_m: css`
      ${tabSizeStyles('m')};
    `,

    size_l: css`
      ${tabSizeStyles('l')};
    `,

    size_xl: css`
      ${tabSizeStyles('xl')};
    `,

    expanded: css`
      .euiTab {
        flex-basis: 0%;
        flex-grow: 1;
        justify-content: center;
      }
    `,
  };
};

export const euiTabStyles = (
  euiThemeContext: UseEuiTheme,
  isDisabled: boolean
) => {
  const { euiTheme } = euiThemeContext;

  const borderColor = isDisabled
    ? euiTheme.colors.disabledText
    : euiTheme.colors.primaryText;

  return {
    euiTab: css`
      cursor: ${isDisabled ? 'not-allowed' : 'pointer'};
      flex-direction: row;
      align-items: center;
      font-weight: ${euiTheme.font.weight.semiBold};

      &:focus {
        background-color: transparent;
        outline-offset: -${euiTheme.focus.width};
      }

      .euiTab__content {
        color: ${euiTheme.colors[
          isDisabled ? 'disabledText' : 'text'
        ]} !important;

        &:hover {
          text-decoration: ${isDisabled ? 'none' : 'underline'};
        }
      }
    `,

    euiTabSelected: css`
      box-shadow: inset 0 calc(${euiTheme.border.width.thick} * -1) 0
        ${borderColor};
      .euiTab__content {
        color: ${euiTheme.colors[isDisabled ? 'disabledText' : 'primaryText']};
      }
    `,

    prepend: css`
      ${logicalCSS('margin-right', euiTheme.size.s)};
      color: ${euiTheme.colors[isDisabled ? 'disabledText' : 'text']};
    `,

    append: css`
      ${logicalCSS('margin-left', euiTheme.size.s)};
      color: ${euiTheme.colors[isDisabled ? 'disabledText' : 'text']};
    `,
  };
};
