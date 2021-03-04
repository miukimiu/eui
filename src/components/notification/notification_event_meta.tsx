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
  FunctionComponent,
  useState,
  ReactNode,
  ReactElement,
} from 'react';
import classNames from 'classnames';
import { EuiIcon, IconType } from '../icon';
import { EuiBadge, EuiBadgeProps } from '../badge';
import { EuiPopover } from '../popover';
import { EuiButtonIcon } from '../button';
import {
  EuiContextMenuItem,
  EuiContextMenuItemProps,
  EuiContextMenuPanel,
} from '../context_menu';
import { EuiI18n } from '../i18n';
import {
  EuiNotificationEventReadButton,
  EuiNotificationEventReadButtonProps,
} from './notification_event_read_button';
import { htmlIdGenerator } from '../../services';

export type EuiNotificationEventMetaProps = Omit<
  EuiNotificationEventReadButtonProps,
  'isRead' | 'onClick' | 'color' | 'eventName'
> & {
  /**
   * Type of event (e.g. "Alert", "Cloud", etc..). Shows inside a badge.
   */
  type: string;
  /**
   * A unique, human-friendly name for the event to be used in aria attributes (e.g. "alert-critical-01", "cloud-no-severity-12", etc..).
   */
  eventName: string;
  /**
   * Shows an indicator of the read state of the event. Leave as `undefined` to hide the indicator.
   */
  isRead?: boolean | undefined;
  /**
   * Type of severity (e.g. "Critical", "Warning", etc..). Shows as a text after the `type` following the format "Alert: Critical".
   */
  severity?: string;
  /**
   * Accepts either our palette colors (primary, secondary ..etc) or a hex value `#FFFFFF`, `#000`.
   */
  badgeColor?: EuiBadgeProps['color'];
  /**
   * The icon used to visually represent this data type. Accepts any `EuiIcon IconType`.
   */
  iconType?: IconType;
  /**
   * Specify an `aria-label` for the icon.
   * If no `aria-label` is passed we assume the icon is purely decorative.
   */
  iconAriaLabel?: string;
  /**
   * Indicates when the event was received.
   */
  time: ReactNode;
  /**
   * Necessary to trigger `onOpenContextMenu` from #EuiNotificationEvent
   */
  onOpenContextMenu?: () => Array<
    ReactElement<EuiContextMenuItemProps, typeof EuiContextMenuItem>
  >;
  /**
   * Applies an `onClick` handler to the `read` indicator.
   */
  onRead?: () => void;
};

export const EuiNotificationEventMeta: FunctionComponent<EuiNotificationEventMetaProps> = ({
  isRead,
  iconType,
  type,
  time,
  badgeColor = 'hollow',
  onRead,
  severity,
  eventName,
  iconAriaLabel,
  onOpenContextMenu,
}) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const classes = classNames('euiNotificationEventMeta', {
    'euiNotificationEventMeta--hasContextMenu': onOpenContextMenu,
  });

  const [contextMenuItems, setContextMenuItems] = useState<
    ReturnType<NonNullable<typeof onOpenContextMenu>>
  >([]);

  const id = htmlIdGenerator()();

  const onMarkAsRead = () => {
    onRead?.();
  };

  const ariaAttribute = iconAriaLabel
    ? { 'aria-label': iconAriaLabel }
    : { 'aria-hidden': true };

  const onOpenPopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
    if (onOpenContextMenu) {
      setContextMenuItems(onOpenContextMenu());
    }
  };

  return (
    <div className={classes}>
      <div className="euiNotificationEventMeta__section">
        {typeof isRead === 'boolean' && (
          <EuiNotificationEventReadButton
            isRead={isRead}
            onClick={onMarkAsRead}
            eventName={eventName}
          />
        )}

        {iconType && (
          <EuiIcon
            className="euiNotificationEventMeta__icon"
            type={iconType}
            {...ariaAttribute}
          />
        )}

        {type && (
          <EuiBadge
            className="euiNotificationEventMeta__badge"
            color={badgeColor}>
            {severity ? `${type}: ${severity}` : type}
          </EuiBadge>
        )}
      </div>

      <div className="euiNotificationEventMeta__section">
        <span className="euiNotificationEventMeta__time">{time}</span>
      </div>

      {onOpenContextMenu && (
        <div className="euiNotificationEventMeta__contextMenuWrapper">
          <EuiPopover
            id={id}
            ownFocus
            repositionOnScroll
            isOpen={isPopoverOpen}
            panelPaddingSize="none"
            anchorPosition="leftUp"
            button={
              <EuiI18n
                token="euiNotificationEventMeta.contextMenuButton"
                default="Menu for {eventName}"
                values={{
                  eventName,
                }}>
                {(contextMenuButton: string) => (
                  <EuiButtonIcon
                    aria-label={contextMenuButton}
                    aria-controls={id}
                    aria-expanded={isPopoverOpen}
                    aria-haspopup="true"
                    iconType="boxesVertical"
                    color="subdued"
                    onClick={onOpenPopover}
                    data-test-subj="notificationEventMetaButton"
                  />
                )}
              </EuiI18n>
            }
            closePopover={() => setIsPopoverOpen(false)}>
            {/* The EuiContextMenu is wrapped with a div so it closes after an item is clicked */}
            <div onClick={() => setIsPopoverOpen(false)}>
              <EuiContextMenuPanel items={contextMenuItems} />
            </div>
          </EuiPopover>
        </div>
      )}
    </div>
  );
};
