/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import classNames from 'classnames';
import React, {
  createElement,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from 'react';
import { CommonProps } from '../common';
import { EuiTitle, EuiTitleProps, EuiTitleSize } from '../title';
import { EuiStepNumber, EuiStepStatus } from './step_number';
import { useEuiTheme } from '../../services';
import { euiStepStyles } from './step.styles';

export interface EuiStepInterface {
  /**
   * ReactNode to render as this component's content
   */
  children: ReactNode;
  /**
   * The HTML tag used for the title
   */
  headingElement?: string;
  /**
   * The number of the step in the list of steps
   */
  step?: number;
  title: string;
  /**
   * May replace the number provided in props.step with alternate styling.
   */
  status?: EuiStepStatus;
  /**
   * Title sizing equivalent to EuiTitle, but only `m`, `s` and `xs`. Defaults to `s`
   */
  titleSize?: Exclude<EuiTitleProps['size'], 'xxxs' | 'xxs' | 'l'>;
}

export type EuiStepProps = CommonProps &
  Omit<HTMLAttributes<HTMLDivElement>, 'title'> &
  EuiStepInterface;

export const EuiStep: FunctionComponent<EuiStepProps> = ({
  className,
  children,
  headingElement = 'p',
  step = 1,
  title,
  titleSize = 's',
  status,
  ...rest
}) => {
  const classes = classNames(
    'euiStep',
    {
      'euiStep-isDisabled': status === 'disabled',
    },
    className
  );
  const numberClasses = classNames('euiStep__circle', {});

  const isSmall = titleSize === 'xs';

  const euiTheme = useEuiTheme();
  const styles = euiStepStyles(euiTheme);
  const cssStyles = [styles.euiStep, isSmall && styles.small];

  const contentStyles = [
    isSmall && styles.euiStep__content.small,
    !isSmall && styles.euiStep__content.regular,
  ];

  const titleWrapperStyles = styles.euiStep__titleWrapper;

  const circleStyles = [styles.euiStep__circle];

  return (
    <div className={classes} css={cssStyles} {...rest}>
      <div className="euiStep__titleWrapper" css={titleWrapperStyles}>
        <EuiStepNumber
          className={numberClasses}
          number={step}
          status={status}
          titleSize={titleSize}
          css={circleStyles}
        />
        <EuiTitle size={titleSize as EuiTitleSize} className="euiStep__title">
          {createElement(headingElement, null, title)}
        </EuiTitle>
      </div>

      <div className="euiStep__content" css={contentStyles}>
        {children}
      </div>
    </div>
  );
};
