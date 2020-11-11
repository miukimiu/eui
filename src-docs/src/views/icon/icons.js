// DON'T USE THIS
// DON'T USE THIS
// DON'T USE THIS
// DON'T USE THIS
// DON'T USE THIS

// This example JS is overly complex for simple icon usage
// and is set up this way for ease of use in our docs.
//
// Check the snippet tab for a more common usage.

import React from 'react';

import {
  EuiFlexGrid,
  EuiFlexItem,
  EuiIcon,
  EuiPanel,
  EuiText,
  EuiCopy,
} from '../../../../src/components';

export const iconTypes = [
  'accessibility',
  'aggregate',
  'alert',
  'analyzeEvent',
  'annotation',
  'apmTrace',
  'apps',
  'arrowDown',
  'arrowLeft',
  'arrowRight',
  'arrowUp',
  'asterisk',
  'beaker',
  'bell',
  'bellSlash',
  'bolt',
  'boxesHorizontal',
  'boxesVertical',
  'branch',
  'broom',
  'brush',
  'bug',
  'bullseye',
  'calendar',
  'check',
  'checkInCircleFilled',
  'cheer',
  'clock',
  'cloudDrizzle',
  'cloudStormy',
  'cloudSunny',
  'compute',
  'console',
  'controlsHorizontal',
  'controlsVertical',
  'copy',
  'copyClipboard',
  'cross',
  'crosshairs',
  'crossInACircleFilled',
  'currency',
  'cut',
  'database',
  'document',
  'documentEdit',
  'documents',
  'dot',
  'download',
  'email',
  'empty',
  'exit',
  'expand',
  'expandMini',
  'exportAction',
  'eye',
  'eyeClosed',
  'faceHappy',
  'faceNeutral',
  'faceSad',
  'filter',
  'flag',
  'fold',
  'folderCheck',
  'folderClosed',
  'folderExclamation',
  'folderOpen',
  'fullScreen',
  'gear',
  'glasses',
  'globe',
  'grab',
  'grabHorizontal',
  'grid',
  'heart',
  'heatmap',
  'help',
  'home',
  'iInCircle',
  'image',
  'importAction',
  'indexClose',
  'indexEdit',
  'indexFlush',
  'indexMapping',
  'indexOpen',
  'indexSettings',
  'inputOutput',
  'inspect',
  'invert',
  'ip',
  'keyboardShortcut',
  'kqlField',
  'kqlFunction',
  'kqlOperand',
  'kqlSelector',
  'kqlValue',
  'link',
  'list',
  'listAdd',
  'lock',
  'lockOpen',
  'logstashFilter',
  'logstashIf',
  'logstashInput',
  'logstashOutput',
  'logstashQueue',
  'magnifyWithMinus',
  'magnifyWithPlus',
  'magnet',
  'mapMarker',
  'memory',
  'merge',
  'menu',
  'menuDown',
  'menuLeft',
  'menuRight',
  'menuUp',
  'minimize',
  'minus',
  'minusInCircle',
  'minusInCircleFilled',
  'moon',
  'nested',
  'node',
  'number',
  'offline',
  'online',
  'package',
  'pageSelect',
  'pagesSelect',
  'paperClip',
  'partial',
  'pause',
  'pencil',
  'pin',
  'pinFilled',
  'play',
  'plus',
  'plusInCircle',
  'plusInCircleFilled',
  'popout',
  'push',
  'questionInCircle',
  'quote',
  'refresh',
  'reporter',
  'returnKey',
  'save',
  'scale',
  'search',
  'securitySignal',
  'securitySignalDetected',
  'securitySignalResolved',
  'shard',
  'share',
  'snowflake',
  'sortable',
  'sortDown',
  'sortLeft',
  'sortRight',
  'sortUp',
  'starEmpty',
  'starEmptySpace',
  'starFilled',
  'starFilledSpace',
  'starMinusEmpty',
  'starMinusFilled',
  'starPlusEmpty',
  'starPlusFilled',
  'stats',
  'stop',
  'stopFilled',
  'storage',
  'string',
  'submodule',
  'symlink',
  'tableOfContents',
  'tableDensityExpanded',
  'tableDensityCompact',
  'tableDensityNormal',
  'tag',
  'tear',
  'temperature',
  'timeline',
  'training',
  'trash',
  'unfold',
  'unlink',
  'user',
  'users',
  'vector',
  'videoPlayer',
  'visArea',
  'visAreaStacked',
  'visBarHorizontal',
  'visBarHorizontalStacked',
  'visBarVertical',
  'visBarVerticalStacked',
  'visGauge',
  'visGoal',
  'visLine',
  'visMapCoordinate',
  'visMapRegion',
  'visMetric',
  'visPie',
  'visTable',
  'visTagCloud',
  'visText',
  'visTimelion',
  'visVega',
  'visVisualBuilder',
  'wrench',
];

export default () => (
  <EuiFlexGrid columns={4}>
    {iconTypes.map((iconType) => (
      <EuiFlexItem
        className="guideDemo__icon"
        key={iconType}
        style={{ width: '200px' }}>
        <EuiCopy textToCopy={iconType} afterMessage={`${iconType} copied`}>
          {(copy) => (
            <EuiPanel onClick={copy} className="eui-textCenter">
              <EuiIcon type={iconType} />
              <EuiText size="s">
                <p>{iconType}</p>
              </EuiText>
            </EuiPanel>
          )}
        </EuiCopy>
      </EuiFlexItem>
    ))}
  </EuiFlexGrid>
);
