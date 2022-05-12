/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { css } from '@emotion/react';
import { UseEuiTheme } from '../../services';
import { logicalCSS } from '../../global_styling';

export const euiCommentEventStyles = ({ euiTheme }: UseEuiTheme) => ({
  euiCommentEvent: css`
    overflow: hidden;
  `,
  euiCommentEvent__body: css``,
  // types
  regular: css`
    border-radius: ${euiTheme.border.radius.medium};
    border: ${euiTheme.border.thin};

    > [class*='euiCommentEvent__header'] {
      background: ${euiTheme.colors.lightestShade};
      border-bottom: ${euiTheme.border.thin};
    }

    > [class*='euiCommentEvent__header'],
    > [class*='euiCommentEvent__body'] {
      padding: ${euiTheme.size.s};
    }
  `,
  update: css`
    > [class*='euiCommentEvent__body'] {
      ${logicalCSS('padding-top', euiTheme.size.xs)}
    }
  `,
  custom: css``,
});

export const euiCommentEventHeaderStyles = ({ euiTheme }: UseEuiTheme) => ({
  euiCommentEvent__header: css``,
  euiCommentEvent__headerPanel: css``,
  euiCommentEvent__headerMain: css`
    display: flex;
    flex: 1;
    gap: ${euiTheme.size.s};
  `,
  euiCommentEvent__headerData: css`
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    gap: ${euiTheme.size.xs};
  `,
  euiCommentEvent__headerUsername: css`
    font-weight: ${euiTheme.font.weight.semiBold};
  `,
  euiCommentEvent__headerEvent: css``,
  euiCommentEvent__headerTimestamp: css``,
  euiCommentEvent__headerActions: css`
    display: flex;
    flex-wrap: wrap;
    gap: ${euiTheme.size.xs};
  `,
  euiCommentEvent__headerEventMessage: css`
    ${logicalCSS('padding-top', euiTheme.size.s)}
  `,
  // variants
  hasHeaderColor: css`
    padding: 0;
  `,
});
