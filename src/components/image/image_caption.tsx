/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { forwardRef, Ref, ReactNode } from 'react';

import { useEuiTheme } from '../../services';
import { CommonProps } from '../common';
import { euiImageCaptionStyles } from './image_caption.styles';

export type EuiImageCaptionProps = CommonProps & {
  /**
   * Provides the visible caption to the image
   */
  caption?: ReactNode;
  isOnOverlayMask?: boolean;
  ref?: any;
};

export const EuiImageCaption = forwardRef<HTMLDivElement, EuiImageCaptionProps>(
  ({ caption, isOnOverlayMask = false }, ref: Ref<HTMLDivElement>) => {
    const euiTheme = useEuiTheme();
    const styles = euiImageCaptionStyles(euiTheme);
    const cssstyles = [
      styles.euiImageCaption,
      isOnOverlayMask && styles.isOnOverlayMask,
    ];

    return (
      <figcaption ref={ref} css={cssstyles}>
        {caption}
      </figcaption>
    );
  }
);

EuiImageCaption.displayName = 'EuiImageCaption';
