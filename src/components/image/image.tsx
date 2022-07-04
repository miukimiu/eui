/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, { FunctionComponent, useState } from 'react';
import classNames from 'classnames';

import { useEuiTheme } from '../../services';

import { EuiImageWrapper } from './image_wrapper';
import { euiImageStyles } from './image.styles';
import { EuiImageFullScreenWrapper } from './image_fullscreen_wrapper';
import type {
  EuiImageProps,
  ImageProps,
  EuiImageWrapperProps,
  EuiImageFullScreenWrapperProps,
  EuiImageSize,
} from './image_types';

import { SIZES } from './image_types';

export const EuiImage: FunctionComponent<EuiImageProps> = ({
  className,
  url,
  src,
  size = 'original',
  hasShadow,
  style,
  wrapperProps,
  fullScreenIconColor,
  allowFullScreen,
  ...rest
}) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const isNamedSize =
    typeof size === 'string' && SIZES.includes(size as EuiImageSize);

  const classes = classNames('euiImage', className);

  const euiTheme = useEuiTheme();

  const styles = euiImageStyles(euiTheme);

  const cssStyles = [
    styles.euiImage,
    isNamedSize && styles[size as EuiImageSize],
    !isNamedSize && styles.customSize,
    hasShadow && styles.hasShadow,
  ];

  const cssIsFullScreenStyles = [styles.euiImage, styles.isFullScreen];

  const isCustomSize = !isFullScreen && !isNamedSize && size !== 'original';

  const customSize = typeof size === 'string' ? size : `${size}px`;

  const imageStyle = isCustomSize
    ? {
        ...style,
        maxWidth: customSize,
        maxHeight: customSize,
      }
    : style;

  const isFullWidth = size === 'fullWidth';

  return (
    <>
      <EuiImageWrapper
        {...(rest as EuiImageWrapperProps)}
        alt={rest.alt}
        hasShadow={hasShadow}
        wrapperProps={wrapperProps}
        isFullScreen={isFullScreen}
        setIsFullScreen={setIsFullScreen}
        isFullWidth={isFullWidth}
        fullScreenIconColor={fullScreenIconColor}
        allowFullScreen={allowFullScreen}
      >
        <img
          className={classes}
          style={imageStyle}
          src={src || url}
          alt={rest.alt}
          css={cssStyles}
          {...(rest as ImageProps)}
        />
      </EuiImageWrapper>

      {allowFullScreen && isFullScreen && (
        <EuiImageFullScreenWrapper
          {...(rest as EuiImageFullScreenWrapperProps)}
          alt={rest.alt}
          hasShadow={hasShadow}
          isFullScreen={isFullScreen}
          setIsFullScreen={setIsFullScreen}
          fullScreenIconColor={fullScreenIconColor}
          isFullWidth={isFullWidth}
          allowFullScreen={allowFullScreen}
        >
          <img
            className={classes}
            style={imageStyle}
            src={src || url}
            alt={rest.alt}
            css={cssIsFullScreenStyles}
            {...(rest as ImageProps)}
          />
        </EuiImageFullScreenWrapper>
      )}
    </>
  );
};
