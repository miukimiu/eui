import React from 'react';
import { css } from '@emotion/react';
import { ThemeValuesTable } from '../_components/_theme_values_table';
import { getPropsFromComponent } from '../../../services/props/get_props';
import {
  EuiThemeLevels,
  _EuiThemeLevels,
} from '../../../../../src/global_styling';
import { useEuiTheme } from '../../../../../src/services';
import { EuiThemeLevelsProps } from '../_props';
import { ThemeExample } from '../_components/_theme_example';

import { useEuiShadow } from '../../../../../src/themes/amsterdam/global_styling/mixins/shadow';

import { EuiText, EuiPanel, EuiCallOut, EuiSpacer } from '../../../../../src';

export default () => {
  const { euiTheme } = useEuiTheme();

  const levelsTypes = (getPropsFromComponent(
    EuiThemeLevelsProps
  ) as unknown) as _EuiThemeLevels;

  return (
    <>
      <ThemeExample
        title="euiTheme.levels[type]"
        description={
          <>
            <p>
              Most of the time the z-index is handled per component. But you can
              use the table below as a reference to how EUI layers the
              components.
            </p>
          </>
        }
        examplePanel={{
          color: 'subdued',
        }}
        example={
          <EuiPanel
            css={css`
              width: 100%;
              height: 200px;
              position: relative;
            `}
          >
            <EuiPanel
              color="primary"
              paddingSize="none"
              css={css`
                width: 40%;
                height: 80%;
                position: absolute;
                left: 30%;
                top: 10%;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: ${euiTheme.levels.modal};
                ${useEuiShadow('s', euiTheme.colors.primary)};
              `}
            >
              <EuiText size="xs">
                <p>
                  <strong>Modal</strong>
                </p>
              </EuiText>
            </EuiPanel>
            <EuiPanel
              color="danger"
              paddingSize="none"
              css={css`
                width: 40%;
                height: 30%;
                position: absolute;
                right: 2%;
                top: 2%;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: ${euiTheme.levels.toast};
                ${useEuiShadow('s', euiTheme.colors.danger)};
              `}
            >
              <EuiText size="xs">
                <p>
                  <strong>Toast</strong>
                </p>
              </EuiText>
            </EuiPanel>
            <EuiPanel
              color="danger"
              paddingSize="none"
              css={css`
                width: 40%;
                height: 30%;
                position: absolute;
                right: 2%;
                top: 36%;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: ${euiTheme.levels.toast};
                ${useEuiShadow('s', euiTheme.colors.danger)};
              `}
            >
              <EuiText size="xs">
                <p>
                  <strong>Toast</strong>
                </p>
              </EuiText>
            </EuiPanel>
          </EuiPanel>
        }
        snippet={'z-index: ${euiTheme.levels.modal};'}
      />

      <EuiCallOut color="warning">
        <p>
          If you do have to adjust z-index levels, remember that they become
          scoped only to their parents if their parent also has a custom
          z-index.
        </p>
      </EuiCallOut>

      <EuiSpacer size="xl" />

      <ThemeValuesTable
        items={EuiThemeLevels.map((level) => {
          return {
            id: level,
            token: level,
            type: levelsTypes[level],
            value: euiTheme.levels[level],
          };
        })}
        sampleColumnProps={{ title: '' }}
        render={(item) => (
          <div
            className="guideSass__level"
            style={{ opacity: item.value * 0.0001 }}
          />
        )}
      />
    </>
  );
};
