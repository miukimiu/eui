/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { css } from '@emotion/react';
import { UseEuiTheme } from '../../services';

export const euiCommentEventStyles = (
  { euiTheme }: UseEuiTheme,
  hasUpdateColor: boolean
) => ({
  euiCommentEvent: css`
    overflow: hidden;
  `,
  // types
  regular: css`
    border-radius: ${euiTheme.border.radius.medium};
    border: ${euiTheme.border.thin};

    > *:first-of-type {
      background: ${euiTheme.colors.lightestShade};
      border-bottom: ${euiTheme.border.thin};
    }

    > * {
      padding: ${euiTheme.size.s};
    }
  `,
  update: css`
    // when there is a update color a paddingSize 's' is added to the EuiPanel
    // so we need to add some padding to the content when there is no padding from the EuiPanel
    ${!hasUpdateColor &&
    css`
      > *:first-of-type {
        padding: ${euiTheme.size.xs} 0;
      }
    `}

    > * {
      padding-top: ${euiTheme.size.xs};
    }
  `,
  custom: css``,
  euiCommentEvent__header: css`
    display: flex;
    align-items: center;
  `,
  euiCommentEvent__body: css``,
  euiCommentEvent__headerData: css`
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;

    > * {
      padding-right: ${euiTheme.size.xs};
    }
  `,
  euiCommentEvent__headerUsername: css`
    font-weight: ${euiTheme.font.weight.semiBold};
    padding-right: ${euiTheme.size.xs};
  `,
  euiCommentEvent__headerIconUpdate: css`
    margin-right: ${euiTheme.size.xs};
  `,
});
