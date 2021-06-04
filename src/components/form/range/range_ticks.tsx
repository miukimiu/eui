/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, {
  ButtonHTMLAttributes,
  MouseEventHandler,
  FunctionComponent,
  ReactNode,
  CSSProperties,
  MutableRefObject,
} from 'react';
import classNames from 'classnames';

import { calculateThumbPosition, EUI_THUMB_SIZE } from './utils';

import { useInnerText } from '../../inner_text';

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
}) => {
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
    pseudoShift[labelShift] = `calc(${labelShiftVal}em - 2px)`; // 2px derived from .euiRangeTicks left/right offset
  }

  const pseudoTick = tickObject && !!labelShiftVal && (isMinTick || isMaxTick);

  const tickClasses = classNames('euiRangeTick', {
    'euiRangeTick--selected': value === tickValue,
    'euiRangeTick--isCustom': customTicks,
    'euiRangeTick--isMin': labelShiftVal && isMinTick,
    'euiRangeTick--isMax': labelShiftVal && isMaxTick,
    'euiRangeTick--hasTickMark': pseudoTick,
  });

  const [ref, innerText] = useInnerText();

  return (
    <button
      type="button"
      className={tickClasses}
      value={tickValue}
      disabled={disabled}
      onClick={onChange}
      style={tickStyle}
      tabIndex={-1}
      ref={ref}
      title={typeof label === 'string' ? label : innerText}>
      {pseudoTick && (
        <span
          className="euiRangeTick__pseudo"
          aria-hidden
          style={pseudoShift}
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

  const classes = classNames('euiRangeTicks', {
    'euiRangeTicks--compressed': compressed,
    'euiRangeTicks--isCustom': ticks,
  });

  return (
    <div className={classes} ref={ticksRef}>
      {tickSequence.map((tickValue) => (
        <EuiTickValue
          key={tickValue}
          {...props}
          percentageWidth={percentageWidth}
          tickValue={tickValue}
          ticksRef={ticksRef}
        />
      ))}
    </div>
  );
};
