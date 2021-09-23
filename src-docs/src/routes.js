import React, { createElement, Fragment } from 'react';
import ReactDOMServer from 'react-dom/server';
import { slugify } from '../../src/services';

import { createHashHistory } from 'history';

import { GuidePage, GuideSection, GuideMarkdownFormat } from './components';

import { GuideGuidelines } from './components/guide_guidelines';

import { EuiErrorBoundary } from '../../src/components';

import { playgroundCreator } from './services/playground';

// Guidelines
const GettingStarted = require('!!raw-loader!./views/guidelines/getting_started.md');

import AccessibilityGuidelines from './views/guidelines/accessibility';

import ColorGuidelines from './views/guidelines/colors';

import { SassGuidelines } from './views/guidelines/sass';

import WritingGuidelinesPage from './views/guidelines/writing';

import WritingGuidelines from './views/guidelines/writing_guidelines';
import WritingExamples from './views/guidelines/writing_examples';
import AnotherPage from './views/guidelines/another_page';

// Services

import { ColorPaletteExample } from './views/color_palette/color_palette_example';

import { ColorExample } from './views/color/color_example';

import { PrettyDurationExample } from './views/pretty_duration/pretty_duration_example';

import { UtilityClassesExample } from './views/utility_classes/utility_classes_example';

// Component examples

import { AccessibilityExample } from './views/accessibility/accessibility_example';

import { AccordionExample } from './views/accordion/accordion_example';

import { AspectRatioExample } from './views/aspect_ratio/aspect_ratio_example';

import { AvatarExample } from './views/avatar/avatar_example';

import { BadgeExample } from './views/badge/badge_example';

import { BeaconExample } from './views/beacon/beacon_example';

import { BottomBarExample } from './views/bottom_bar/bottom_bar_example';

import { BreadcrumbsExample } from './views/breadcrumbs/breadcrumbs_example';

import { ButtonExample } from './views/button/button_example';

import { CardExample } from './views/card/card_example';

import { CallOutExample } from './views/call_out/call_out_example';

import { CodeEditorExample } from './views/code_editor/code_editor_example';

import { CodeExample } from './views/code/code_example';

import { CollapsibleNavExample } from './views/collapsible_nav/collapsible_nav_example';

import { ColorPickerExample } from './views/color_picker/color_picker_example';

import { ComboBoxExample } from './views/combo_box/combo_box_example';

import { CommentListExample } from './views/comment/comment_example';

import { ContextMenuExample } from './views/context_menu/context_menu_example';

import { ControlBarExample } from './views/control_bar/control_bar_example';

import { CopyExample } from './views/copy/copy_example';

import { DataGridExample } from './views/datagrid/datagrid_example';
import { DataGridMemoryExample } from './views/datagrid/datagrid_memory_example';
import { DataGridSchemaExample } from './views/datagrid/datagrid_schema_example';
import { DataGridFocusExample } from './views/datagrid/datagrid_focus_example';
import { DataGridStylingExample } from './views/datagrid/datagrid_styling_example';
import { DataGridControlColumnsExample } from './views/datagrid/datagrid_controlcolumns_example';
import { DataGridFooterRowExample } from './views/datagrid/datagrid_footer_row_example';
import { DataGridVirtualizationExample } from './views/datagrid/datagrid_virtualization_example';
import { DataGridRowHeightOptionsExample } from './views/datagrid/datagrid_height_options_example';

import { DatePickerExample } from './views/date_picker/date_picker_example';

import { DelayRenderExample } from './views/delay_render/delay_render_example';

import { DescriptionListExample } from './views/description_list/description_list_example';

import { DragAndDropExample } from './views/drag_and_drop/drag_and_drop_example';

import { EmptyPromptExample } from './views/empty_prompt/empty_prompt_example';

import { ErrorBoundaryExample } from './views/error_boundary/error_boundary_example';

import { ExpressionExample } from './views/expression/expression_example';

import { FacetExample } from './views/facet/facet_example';

import { FilterGroupExample } from './views/filter_group/filter_group_example';

import { FlexExample } from './views/flex/flex_example';

import { FlyoutExample } from './views/flyout/flyout_example';

import { FocusTrapExample } from './views/focus_trap/focus_trap_example';

import { FormControlsExample } from './views/form_controls/form_controls_example';

import { FormLayoutsExample } from './views/form_layouts/form_layouts_example';

import { FormCompressedExample } from './views/form_compressed/form_compressed_example';

import { FormValidationExample } from './views/form_validation/form_validation_example';

import { HeaderExample } from './views/header/header_example';

import { HealthExample } from './views/health/health_example';

import { HighlightAndMarkExample } from './views/highlight_and_mark/highlight_and_mark_example';

import { HorizontalRuleExample } from './views/horizontal_rule/horizontal_rule_example';

import { HtmlIdGeneratorExample } from './views/html_id_generator/html_id_generator_example';

import { I18nExample } from './views/i18n/i18n_example';

import { IconExample } from './views/icon/icon_example';

import { ImageExample } from './views/image/image_example';

import { InnerTextExample } from './views/inner_text/inner_text_example';

import { KeyPadMenuExample } from './views/key_pad_menu/key_pad_menu_example';

import { LinkExample } from './views/link/link_example';

import { ListGroupExample } from './views/list_group/list_group_example';

import { LoadingExample } from './views/loading/loading_example';

import { MarkdownEditorExample } from './views/markdown_editor/mardown_editor_example';

import { MarkdownFormatExample } from './views/markdown_editor/mardown_format_example';

import { MarkdownPluginExample } from './views/markdown_editor/markdown_plugin_example';

import { ModalExample } from './views/modal/modal_example';

import { MutationObserverExample } from './views/mutation_observer/mutation_observer_example';

import { NotificationEventExample } from './views/notification_event/notification_event_example';

import { OutsideClickDetectorExample } from './views/outside_click_detector/outside_click_detector_example';

import { OverlayMaskExample } from './views/overlay_mask/overlay_mask_example';

import { PageExample } from './views/page/page_example';

import { PageHeaderExample } from './views/page_header/page_header_example';

import { PaginationExample } from './views/pagination/pagination_example';

import { PanelExample } from './views/panel/panel_example';

import { PopoverExample } from './views/popover/popover_example';

import { PortalExample } from './views/portal/portal_example';

import { ProgressExample } from './views/progress/progress_example';

import { RangeControlExample } from './views/range/range_example';

import { TreeViewExample } from './views/tree_view/tree_view_example';

import { ResizeObserverExample } from './views/resize_observer/resize_observer_example';

import { ResizableContainerExample } from './views/resizable_container/resizable_container_example';

import { ResponsiveExample } from './views/responsive/responsive_example';

import { SearchBarExample } from './views/search_bar/search_bar_example';

import { SelectableExample } from './views/selectable/selectable_example';

import { SideNavExample } from './views/side_nav/side_nav_example';

import { SpacerExample } from './views/spacer/spacer_example';

import { StatExample } from './views/stat/stat_example';

import { StepsExample } from './views/steps/steps_example';

import { SuggestExample } from './views/suggest/suggest_example';

import { SuperDatePickerExample } from './views/super_date_picker/super_date_picker_example';

import { TableExample } from './views/tables/tables_example';

import { TableInMemoryExample } from './views/tables/tables_in_memory_example';

import { TabsExample } from './views/tabs/tabs_example';

import { TextDiffExample } from './views/text_diff/text_diff_example';

import { TextExample } from './views/text/text_example';

import { TitleExample } from './views/title/title_example';

import { ToastExample } from './views/toast/toast_example';

import { ToolTipExample } from './views/tool_tip/tool_tip_example';

import { TourExample } from './views/tour/tour_example';

import { WindowEventExample } from './views/window_event/window_event_example';

import { Changelog } from './views/package/changelog';

import { I18nTokens } from './views/package/i18n_tokens';

import { SuperSelectExample } from './views/super_select/super_select_example';

import { ThemeExample } from './views/theme/theme_example';
import ThemeValues from './views/theme/values';

/** Elastic Charts */

import { ElasticChartsThemingExample } from './views/elastic_charts/theming_example';

import { ElasticChartsTimeExample } from './views/elastic_charts/time_example';

import { ElasticChartsCategoryExample } from './views/elastic_charts/category_example';

import { ElasticChartsSparklinesExample } from './views/elastic_charts/sparklines_example';

import { ElasticChartsPieExample } from './views/elastic_charts/pie_example';

import { ElasticChartsAccessibilityExample } from './views/elastic_charts/accessibility_example';

const createExample = (example, customTitle) => {
  if (!example) {
    throw new Error(
      'One of your example pages is undefined. This usually happens when you export or import it with the wrong name.'
    );
  }

  const {
    title,
    intro,
    sections,
    beta,
    isNew,
    playground,
    guidelines,
  } = example;
  sections.forEach((section) => {
    section.id = section.title ? slugify(section.title) : undefined;
  });

  const renderedSections = sections.map((section, index) =>
    createElement(GuideSection, {
      // Using index as the key because not all require a `title`
      key: index,
      ...section,
    })
  );

  let playgroundComponent;
  if (playground) {
    if (Array.isArray(playground)) {
      playgroundComponent = playground.map((elm, idx) => {
        return <Fragment key={idx}>{playgroundCreator(elm())}</Fragment>;
      });
    } else playgroundComponent = playgroundCreator(playground());
  }

  const component = () => (
    <EuiErrorBoundary>
      <GuidePage
        title={title}
        intro={intro}
        isBeta={beta}
        playground={playgroundComponent}
        guidelines={guidelines}
      >
        {renderedSections}
      </GuidePage>
    </EuiErrorBoundary>
  );

  return {
    name: customTitle || title,
    component,
    sections,
    isNew,
    hasGuidelines: typeof guidelines !== 'undefined',
  };
};

const createTabbedPage = (title, pages, isNew) => {
  const component = () => (
    <EuiErrorBoundary>
      <GuideGuidelines title={title} pages={pages} />
    </EuiErrorBoundary>
  );

  const createSections = (section) => {
    const htmlString = ReactDOMServer.renderToStaticMarkup(section);

    const headings = htmlString.match(/h2 id=\"(.*?)\"/g);

    const sections = headings.map((heading) => {
      const id = heading.replace('h2 id="', '').slice(0, -1);

      const title = id.replace(/-/g, ' ');

      const capitalizedTitle = title.charAt(0).toUpperCase() + title.slice(1);

      return { id: id, name: capitalizedTitle };
    });

    return sections;
  };

  const pagesSections = pages.map((page, index) => {
    return {
      id: page.id,
      title: page.title,
      items: createSections(pages[index].page()),
    };
  });

  return {
    name: title,
    component,
    sections: pagesSections,
    isNew,
    isTabbedPagePage: true,
  };
};

const createMarkdownExample = (example, title) => {
  const headings = example.default.match(/^(##) (.*)/gm);

  const sections = headings.map((heading) => {
    const title = heading.replace('## ', '');

    return { id: slugify(title), title: title };
  });

  return {
    name: title,
    component: () => (
      <GuidePage title={title}>
        <GuideMarkdownFormat grow={false}>
          {example.default}
        </GuideMarkdownFormat>
      </GuidePage>
    ),
    sections: sections,
  };
};

const navigation = [
  {
    name: 'Guidelines',
    items: [
      createMarkdownExample(GettingStarted, 'Getting started'),
      createExample(AccessibilityGuidelines, 'Accessibility'),
      {
        name: 'Colors',
        component: ColorGuidelines,
      },
      createExample(SassGuidelines, 'Sass'),
      createTabbedPage('Writing with Tabs', [
        {
          id: 'guidelines',
          title: 'Guidelines',
          page: WritingGuidelines,
        },
        { id: 'examples', title: 'Examples', page: WritingExamples },
        { id: 'another-tab', title: 'Just another tab', page: AnotherPage },
      ]),
      createExample(WritingGuidelinesPage, 'Writing'),
    ],
  },
  {
    name: 'Layout',
    items: [
      AccordionExample,
      BottomBarExample,
      FlexExample,
      FlyoutExample,
      HeaderExample,
      HorizontalRuleExample,
      ModalExample,
      PageExample,
      PageHeaderExample,
      PanelExample,
      PopoverExample,
      ResizableContainerExample,
      SpacerExample,
    ].map((example) => createExample(example)),
  },
  {
    name: 'Navigation',
    items: [
      BreadcrumbsExample,
      ButtonExample,
      CollapsibleNavExample,
      ContextMenuExample,
      ControlBarExample,
      FacetExample,
      KeyPadMenuExample,
      LinkExample,
      PaginationExample,
      SideNavExample,
      StepsExample,
      TabsExample,
      TreeViewExample,
    ].map((example) => createExample(example)),
  },
  {
    name: 'Tabular content',
    items: [
      DataGridExample,
      DataGridMemoryExample,
      DataGridSchemaExample,
      DataGridFocusExample,
      DataGridStylingExample,
      DataGridControlColumnsExample,
      DataGridFooterRowExample,
      DataGridVirtualizationExample,
      DataGridRowHeightOptionsExample,
      TableExample,
      TableInMemoryExample,
    ].map((example) => createExample(example)),
  },
  {
    name: 'Display',
    items: [
      AspectRatioExample,
      AvatarExample,
      BadgeExample,
      CallOutExample,
      CardExample,
      CommentListExample,
      DescriptionListExample,
      DragAndDropExample,
      EmptyPromptExample,
      HealthExample,
      IconExample,
      ImageExample,
      ListGroupExample,
      LoadingExample,
      NotificationEventExample,
      ProgressExample,
      StatExample,
      TextExample,
      TitleExample,
      ToastExample,
      ToolTipExample,
      TourExample,
    ].map((example) => createExample(example)),
  },
  {
    name: 'Forms',
    items: [
      FormControlsExample,
      FormLayoutsExample,
      FormCompressedExample,
      FormValidationExample,
      SuperSelectExample,
      ComboBoxExample,
      ColorPickerExample,
      DatePickerExample,
      ExpressionExample,
      FilterGroupExample,
      RangeControlExample,
      SearchBarExample,
      SelectableExample,
      SuggestExample,
      SuperDatePickerExample,
    ].map((example) => createExample(example)),
  },
  {
    name: 'Editors & syntax',
    items: [
      MarkdownFormatExample,
      MarkdownEditorExample,
      MarkdownPluginExample,
      CodeEditorExample,
      CodeExample,
    ].map((example) => createExample(example)),
  },
  {
    name: 'Elastic Charts',
    items: [
      ElasticChartsThemingExample,
      ElasticChartsSparklinesExample,
      ElasticChartsTimeExample,
      ElasticChartsCategoryExample,
      ElasticChartsPieExample,
      ElasticChartsAccessibilityExample,
    ].map((example) => createExample(example)),
  },
  {
    name: 'Utilities',
    items: [
      AccessibilityExample,
      BeaconExample,
      ColorExample,
      ColorPaletteExample,
      CopyExample,
      UtilityClassesExample,
      DelayRenderExample,
      ErrorBoundaryExample,
      FocusTrapExample,
      HighlightAndMarkExample,
      HtmlIdGeneratorExample,
      InnerTextExample,
      I18nExample,
      MutationObserverExample,
      OutsideClickDetectorExample,
      OverlayMaskExample,
      PortalExample,
      PrettyDurationExample,
      ResizeObserverExample,
      ResponsiveExample,
      TextDiffExample,
      WindowEventExample,
    ].map((example) => createExample(example)),
  },
  {
    name: 'Theming',
    items: [
      createExample(ThemeExample, 'Theme provider'),
      {
        name: 'Global values',
        component: ThemeValues,
        isNew: true,
      },
    ],
  },
  {
    name: 'Package',
    items: [Changelog, I18nTokens],
  },
].map(({ name, items, ...rest }) => ({
  name,
  type: slugify(name),
  items: items.map(
    ({
      name: itemName,
      hasGuidelines,
      isGuideLinePage,
      isTabbedPagePage,
      sections,
      ...rest
    }) => {
      let item;

      // when is as guidelinePage with multiple tabs the first nav item is the first of the list
      if (isGuideLinePage) {
        item = {
          name: itemName,
          path: `${slugify(name)}/${slugify(itemName)}/${slugify(
            sections[0].id
          )}`,
          sections,
          ...rest,
        };
      } else {
        item = {
          name: itemName,
          path: `${slugify(name)}/${slugify(itemName)}`,
          sections,
          ...rest,
        };
      }

      if (hasGuidelines) {
        item.from = `guidelines/${slugify(itemName)}`;
        item.to = `${slugify(name)}/${slugify(itemName)}/guidelines`;
      }

      return item;
    }
  ),
  ...rest,
}));

const allRoutes = navigation.reduce((accummulatedRoutes, section) => {
  accummulatedRoutes.push(...section.items);
  return accummulatedRoutes;
}, []);

export default {
  history: createHashHistory(),
  navigation,

  getAppRoutes: function getAppRoutes() {
    return allRoutes;
  },

  getPreviousRoute: function getPreviousRoute(routeName) {
    const index = allRoutes.findIndex((item) => {
      return item.name === routeName;
    });

    return index >= 0 ? allRoutes[index - 1] : undefined;
  },

  getNextRoute: function getNextRoute(routeName) {
    const index = allRoutes.findIndex((item) => {
      return item.name === routeName;
    });

    return index < allRoutes.length - 1 ? allRoutes[index + 1] : undefined;
  },
};
