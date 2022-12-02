/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  FunctionComponent,
  ReactNode,
  CSSProperties,
  MutableRefObject,
} from 'react';

import { calculateThumbPosition, EUI_THUMB_SIZE } from './utils';

import { useInnerText } from '../../inner_text';

import { useEuiTheme } from '../../../services';
import { logicalStyles } from '../../../global_styling';
import { euiRangeTicksStyles, euiRangeTickStyles } from './range_ticks.styles';

export interface EuiRangeTick {
  value: number;
  label: ReactNode;
}

export type EuiRangeTicksProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'value'
> & {
  ticks?: EuiRangeTick[];
  tickSequence: number[];
  value?: number | string | Array<string | number>;
  min: number;
  max: number;
  compressed?: boolean;
  interval?: number;
  disabled?: boolean;
  onChange?: MouseEventHandler<HTMLButtonElement>;
};

const EuiTickValue: FunctionComponent<
  EuiRangeTicksProps & {
    ticksRef: MutableRefObject<HTMLDivElement | null>;
    tickValue: any;
    percentageWidth: number;
    compressed?: boolean;
  }
> = ({
  disabled,
  ticks: customTicks,
  min,
  max,
  value,
  onChange,
  percentageWidth,
  tickValue,
  ticksRef,
  compressed,
}) => {
  const euiTheme = useEuiTheme();

  const tickStyle: CSSProperties = {};
  const tickObject = customTicks
    ? customTicks.find((o) => o.value === tickValue)
    : { value: tickValue, label: tickValue };
  const isMinTick = tickObject?.value === min;
  const isMaxTick = tickObject?.value === max;

  const label = tickObject ? tickObject.label : tickValue;

  // Math worked out by trial and error
  // Shifts the label into the reserved margin of EuiRangeTrack
  const labelShiftVal =
    (isMinTick || isMaxTick) && label.length > 3
      ? Math.min(label.length * 0.25, 1.25)
      : 0;

  if (isMaxTick && !!labelShiftVal) {
    tickStyle.right = '0%';
  } else {
    const trackWidth = ticksRef.current?.clientWidth ?? 0;

    const position = calculateThumbPosition(tickValue, min, max, trackWidth);

    const thumbOffset = labelShiftVal ? 0 : EUI_THUMB_SIZE / 2;
    tickStyle.left = `calc(${position}% + ${thumbOffset}px)`;
  }
  tickStyle.maxWidth = customTicks ? undefined : `${percentageWidth}%`;

  const pseudoShift: CSSProperties = {};
  if (labelShiftVal) {
    const labelShift = isMaxTick ? 'marginRight' : 'marginLeft';
    tickStyle[labelShift] = `-${labelShiftVal}em`;

    const tickOffset = euiTheme.euiTheme.size.xs; // xs derived from .euiRangeTicks left/right offset
    pseudoShift[labelShift] = `calc(${labelShiftVal}em + ${tickOffset})`;
  }

  const pseudoTick = tickObject && !!labelShiftVal && (isMinTick || isMaxTick);

  const styles = euiRangeTickStyles(euiTheme);
  const cssTickStyles = [
    styles.euiRangeTick,
    value === String(tickValue) && styles.selected,
    customTicks && styles.isCustom,
    labelShiftVal && isMinTick && styles.isMin,
    labelShiftVal && isMaxTick && styles.isMax,
    !pseudoTick && styles.hasPseudoTickMark,
    compressed ? styles.compressed : styles.regular,
  ];

  const [ref, innerText] = useInnerText();

  return (
    <button
      type="button"
      className="euiRangeTick"
      css={cssTickStyles}
      value={tickValue}
      disabled={disabled}
      onClick={onChange}
      style={logicalStyles(tickStyle)}
      tabIndex={-1}
      ref={ref}
      title={typeof label === 'string' ? label : innerText}
    >
      {pseudoTick && (
        <span
          className="euiRangeTick__pseudo"
          css={styles.euiRangeTick__pseudo}
          aria-hidden
          style={logicalStyles(pseudoShift)}
        />
      )}
      {label}
    </button>
  );
};

export const EuiRangeTicks: FunctionComponent<EuiRangeTicksProps> = (props) => {
  const { ticks, tickSequence, max, min, interval = 1, compressed } = props;
  const ticksRef = React.useRef<HTMLDivElement | null>(null);
  // Calculate the width of each tick mark
  const percentageWidth = (interval / (max - min + interval)) * 100;

  const euiTheme = useEuiTheme();
  const styles = euiRangeTicksStyles(euiTheme);
  const cssStyles = [
    styles.euiRangeTicks,
    compressed ? styles.compressed : styles.regular,
    ticks && styles.isCustom,
  ];

  return (
    <div className="euiRangeTicks" css={cssStyles} ref={ticksRef}>
      {tickSequence.map((tickValue) => (
        <EuiTickValue
          key={tickValue}
          {...props}
          percentageWidth={percentageWidth}
          tickValue={tickValue}
          ticksRef={ticksRef}
          compressed={compressed}
        />
      ))}
    </div>
  );
};
