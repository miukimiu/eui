import React from 'react';
import { Link } from 'react-router-dom';

import { GuideSectionTypes } from '../../../components';

import { EuiCode } from '../../../../../src';

import { ThemeNotice } from '../_components/_theme_notice';
import Intro from './_color_mode_intro';

import Inverse from './inverse';
const InverseSource = require('!!raw-loader!./inverse');

export const ColorModeExample = {
  title: 'Color mode',
  notice: <ThemeNotice />,
  beta: true,
  intro: <Intro />,
  sections: [
    {
      title: 'Rendering a specific color mode',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: InverseSource,
        },
      ],
      text: (
        <>
          <p>
            While it is usually best to keep all consumptions of the global
            variables rendering in the same light or dark color mode, some
            instances benefit from an exaggerated change in contrast from the
            current theme. For this you can specify{' '}
            <strong>EuiThemeProvider</strong>&apos;s{' '}
            <EuiCode>colorMode</EuiCode> to always be{' '}
            <EuiCode>{'"light"'}</EuiCode>, <EuiCode>{'"dark"'}</EuiCode>, or{' '}
            <EuiCode>{'"inverse"'}</EuiCode> which sets it to the opposite of
            the current color mode.
          </p>
          <p>
            When having a nested <strong>EuiThemeProvider</strong> bear in mind
            that the{' '}
            <Link to="/display/text">
              <strong>EuiText</strong>
            </Link>{' '}
            inherits the color that is set in the global styles or a parent
            component. This is why you should change the color of{' '}
            <strong>EuiText</strong> to <EuiCode>{'"default"'}</EuiCode> when
            you want it to correctly adapt to the <EuiCode>colorMode</EuiCode>{' '}
            of its directly parent <strong>EuiThemeProvider</strong>.
          </p>
          <p>
            <Link to="/display/icons">
              <strong>EuiIcon</strong>
            </Link>{' '}
            behaves similarly. By default, it gets the color of its parent
            component. Thus, you can override the color to{' '}
            <EuiCode>{'"text"'}</EuiCode> or wrap it in a{' '}
            <strong>EuiText</strong> to inherit its color.
          </p>
        </>
      ),
      demo: <Inverse />,
    },
  ],
};
