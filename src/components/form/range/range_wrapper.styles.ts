/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import { css } from '@emotion/react';
import { euiFormControlSize } from '../../../global_styling/mixins/_form';
import { UseEuiTheme } from '../../../services';

export const euiRangeWrapperStyles = (euiTheme: UseEuiTheme) => ({
  // Base
  euiRangeWrapper: css`
    ${euiFormControlSize({
      euiTheme,
      includeAlternates: true,
    })}
    display: flex;
    align-items: center;

    > .euiFormControlLayout {
      /* 1 */
      width: auto;

      &.euiFormControlLayout--group {
        flex-shrink: 0; /* 2 */
      }
    }
  `,
});
