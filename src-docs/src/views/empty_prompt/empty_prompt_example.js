import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { GuideSectionTypes } from '../../components';

import { EuiCode, EuiEmptyPrompt, EuiText } from '../../../../src/components';

import { COLORS } from '../../../../src/components/panel/panel';

import Guidelines from './guidelines';

import emptyPromptConfig from './playground';

import { PageDemo } from './_page_demo';

import EmptyPrompt from './empty_prompt';
const emptyPromptSource = require('!!raw-loader!./empty_prompt');
const emptyPromptSnippet = `<EuiEmptyPrompt
  iconType="editorStrike"
  title={<h2>You have no spice</h2>}
  body={bodyContent}
  actions={actions}
  footer={footer}
/>`;

import Layout from './empty_prompt_layout';
const layoutSource = require('!!raw-loader!./empty_prompt_layout');
const layoutSnippet = `<EuiEmptyPrompt
  iconType="editorStrike"
  layout="horizontal"
  title={<h2>You have no spice</h2>}
  titleSize="xs"
  body={bodyContent}
  actions={actions}
  footer={footer}
/>`;

import Panel from './empty_prompt_panel';
const panelSource = require('!!raw-loader!./empty_prompt_panel');
const panelSnippet = `<EuiEmptyPrompt
  iconType="editorStrike"
  hasPanel
  title={<h2>You have no spice</h2>}
  titleSize="xs"
  body={bodyContent}
  actions={actions}
  footer={footer}
/>`;

import Custom from './custom';
const customSource = require('!!raw-loader!./custom');
const customSnippet = `<EuiEmptyPrompt
  iconType="editorStrike"
  title={<h2>You have no spice</h2>}
  titleSize="xs"
  body={bodyContent}
  actions={actions}
/>`;

import Simple from './simple';
const simpleSource = require('!!raw-loader!./simple');
const simpleSnippet = `<EuiEmptyPrompt
  title={<h2>You have no spice</h2>}
  actions={multipleActions}
/>`;

import Loading from './empty_prompt_loading';
const loadingSource = require('!!raw-loader!./empty_prompt_loading');
const loadingSnippet = `<EuiEmptyPrompt
  icon={<EuiLoadingLogo logo="logoKibana" size="xl" />}
  title={<h2>Loading</h2>}
/>`;

import Error from './empty_prompt_error';
const errorSource = require('!!raw-loader!./empty_prompt_error');
const errorSnippet = `<EuiEmptyPrompt
  iconType="alert"
  iconColor="danger"
  title={<h2>There was an error</h2>}
/>`;

import States from './empty_prompt_states';
const statesSource = require('!!raw-loader!./empty_prompt_states');

import PageTemplate from './empty_prompt_page_template';
const pageTemplateSource = require('!!raw-loader!./empty_prompt_page_template');

import Sink from './empty_prompt_sink';
const sinkSource = require('!!raw-loader!./empty_prompt_sink');

export const EmptyPromptExample = {
  title: 'Empty prompt',
  intro: (
    <EuiText>
      <p>
        The <strong>EuiEmptyPrompt</strong> is the building block to create an
        empty state. You can use it as a placeholder for any type of empty
        content. They are especially helpful for replacing entire pages or parts
        of a product that contain no content.
      </p>
      <p>
        Be sure to read the full{' '}
        <Link to="/guidelines/empty-prompt">empty prompt usage guidelines</Link>
        .
      </p>
    </EuiText>
  ),
  sections: [
    {
      source: [
        {
          type: GuideSectionTypes.JS,
          code: emptyPromptSource,
        },
      ],
      props: { EuiEmptyPrompt },
      demo: <EmptyPrompt />,
      snippet: emptyPromptSnippet,
      playground: emptyPromptConfig,
    },
    {
      title: 'Custom sizes and colors',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: customSource,
        },
      ],
      text: (
        <p>
          You can control the title size and icon color with the{' '}
          <EuiCode>titleSize</EuiCode> and <EuiCode>iconColor</EuiCode> props
          respectively.
        </p>
      ),
      props: { EuiEmptyPrompt },
      demo: <Custom />,
      snippet: customSnippet,
    },
    {
      title: 'Less content, more actions',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: simpleSource,
        },
      ],
      text: (
        <Fragment>
          <p>You can remove parts of the prompt to simplify it.</p>
          <p>
            You can also provide an array of multiple actions. Be sure to list
            primary actions first and secondary actions as empty buttons.
          </p>
        </Fragment>
      ),
      props: { EuiEmptyPrompt },
      demo: <Simple />,
      snippet: simpleSnippet,
    },
    {
      title: 'Layout',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: layoutSource,
        },
      ],
      text: (
        <>
          <p>
            You can supply a layout of either <EuiCode>horizontal</EuiCode> or{' '}
            <EuiCode>vertical</EuiCode> with the default being{' '}
            <EuiCode>vertical</EuiCode>. Only use the{' '}
            <EuiCode>horizontal</EuiCode> layout when you can provide an
            illustration. When you want to provide an icon or no icon at all,
            use the <EuiCode>vertical</EuiCode> layout.
          </p>
          <p>
            We recommend when using a custom illustration to use it with a{' '}
            <Link to="/display/image">
              <strong>EuiImage</strong>
            </Link>{' '}
            with the size set to large.
          </p>
        </>
      ),
      props: { EuiEmptyPrompt },
      demo: <Layout />,
      snippet: layoutSnippet,
    },
    {
      title: 'Panel colors',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: panelSource,
        },
      ],
      text: (
        <p>
          The <strong>EuiEmptyPrompt</strong> is built on top of{' '}
          <Link to="/layout/panel">
            <strong>EuiPanel</strong>
          </Link>
          . By default, the panel color is set to transparent but you can
          customize the panel color by passing one of the color options:{' '}
          <EuiCode language="js">{JSON.stringify(COLORS, null, 2)}</EuiCode>.
        </p>
      ),
      props: { EuiEmptyPrompt },
      demo: <Panel />,
      snippet: panelSnippet,
    },
    {
      title: 'Usage in page template',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: pageTemplateSource,
        },
      ],
      text: (
        <>
          <p>
            This example shows how to use the <strong>EuiEmptyPrompt</strong> in
            a page template. We recommend to set the color to{' '}
            <EuiCode>{'"plain"'}</EuiCode> and the <EuiCode>hasBorder</EuiCode>{' '}
            prop to <EuiCode>true</EuiCode>.
          </p>
        </>
      ),
      props: { EuiEmptyPrompt },
      demo: <PageDemo slug="full-page" template={PageTemplate} />,
      fullScreen: {
        slug: 'full-page',
        demo: <PageDemo slug="full-page" template={PageTemplate} fullscreen />,
      },
    },
    {
      title: 'Loading and error prompts',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: loadingSource,
        },
      ],
      text: (
        <>
          <p>
            Empty prompts can also be used to emulate loading and error states,
            by utilizing the same patterns.
          </p>
          <p>
            For <strong>loading</strong> states, you can simply replace the{' '}
            <EuiCode>iconType</EuiCode> with a custom <EuiCode>icon</EuiCode> by
            passing in one of our{' '}
            <Link to="/display/loading">loading components</Link>.
          </p>
        </>
      ),
      props: { EuiEmptyPrompt },
      demo: <Loading />,
      snippet: loadingSnippet,
    },
    {
      source: [
        {
          type: GuideSectionTypes.JS,
          code: errorSource,
        },
      ],
      text: (
        <>
          <p>
            For <strong>error</strong> states, you can simply set the{' '}
            <EuiCode>iconColor</EuiCode> to <EuiCode>danger</EuiCode> and/or
            pass <EuiCode>danger</EuiCode> to the <EuiCode>color</EuiCode> prop.
          </p>
        </>
      ),
      props: { EuiEmptyPrompt },
      demo: <Error />,
      snippet: errorSnippet,
    },
    {
      source: [
        {
          type: GuideSectionTypes.JS,
          code: statesSource,
        },
      ],
      text: (
        <>
          <p>
            You can then tie all three states together to create a seamless
            loading to empty or loading to error experience. The following
            example shows how to encorprate these states with{' '}
            <Link to="/layout/page#simple-layout-with-centered-content">
              <strong>EuiPageTemplate</strong>
            </Link>{' '}
            using <EuiCode>{'template="centeredContent"'}</EuiCode>.
          </p>
        </>
      ),
      props: { EuiEmptyPrompt },
      demo: (
        <div className="guideDemo__highlightLayout">
          <States />
        </div>
      ),
    },
    {
      title: 'Kitchen sink',
      source: [
        {
          type: GuideSectionTypes.JS,
          code: sinkSource,
        },
      ],
      text: (
        <>
          <p>
            This example shows the <EuiCode>layout</EuiCode>,{' '}
            <EuiCode>color</EuiCode> and <EuiCode>paddingSize</EuiCode> props
            usage.
          </p>
        </>
      ),
      props: { EuiEmptyPrompt },
      demo: <Sink />,
    },
  ],
  guidelines: <Guidelines />,
};
