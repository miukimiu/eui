import React from 'react';

import { GuideRule, GuideRuleExample } from '../../components';

import {
  EuiButton,
  EuiButtonEmpty,
  EuiCallOut,
  EuiCheckbox,
  EuiEmptyPrompt,
  EuiFieldNumber,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiHorizontalRule,
  EuiIconTip,
  EuiLink,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiPanel,
  EuiSpacer,
  EuiSwitch,
  EuiText,
  EuiTitle,
  EuiToast,
} from '../../../../src/components';

import { htmlIdGenerator } from '../../../../src/services';

const WritingExamples = () => {
  const modalStyles = { maxWidth: 480, transform: 'scale(.75)' };

  return (
    <>
      <EuiText>
        <h2 id="buttons">Buttons</h2>

        <p>
          Label buttons with their action. Don&apos;t use Yes, OK, or Confirm
          when you can use a verb phrase instead.
        </p>
      </EuiText>

      <GuideRule>
        <GuideRuleExample
          text="Use a verb + noun for a button label."
          minHeight="280px"
        >
          <EuiPanel paddingSize="none" style={modalStyles}>
            <EuiModalHeader>
              <EuiModalHeaderTitle>Search session complete</EuiModalHeaderTitle>
            </EuiModalHeader>
            <EuiModalBody>
              <EuiText>
                <p>Save your session and return to it later.</p>
              </EuiText>
            </EuiModalBody>

            <EuiModalFooter>
              <EuiButtonEmpty>Manage sessions</EuiButtonEmpty>

              <EuiButton fill>Save session</EuiButton>
            </EuiModalFooter>
          </EuiPanel>
        </GuideRuleExample>
        <GuideRuleExample
          text="Use the same verb + noun as in the title."
          minHeight="280px"
        >
          <EuiPanel style={{ transform: 'scale(.75)' }}>
            <EuiTitle size="m">
              <span>Delete this index?</span>
            </EuiTitle>
            <EuiSpacer />
            <EuiFlexGroup justifyContent="flexEnd" gutterSize="none">
              <EuiButtonEmpty color="text" size="s">
                Cancel
              </EuiButtonEmpty>
              <EuiButton color="danger" size="s">
                Delete index
              </EuiButton>
            </EuiFlexGroup>
          </EuiPanel>
        </GuideRuleExample>
      </GuideRule>

      <EuiSpacer />
      <EuiLink href="#/navigation/button/guidelines">
        Preferred wording for buttons
      </EuiLink>

      <EuiHorizontalRule />

      <EuiSpacer size="m" />

      <EuiText>
        <h2 id="callouts">Callouts</h2>

        <p>
          Use a callout to relay an information, success, warning, or error
          message related to the content on the page.
        </p>
      </EuiText>
      <GuideRule>
        <GuideRuleExample
          text="Ensure the description provides information in addition to the title."
          minHeight="120px"
        >
          <EuiCallOut
            size="s"
            title="Index privileges missing"
            iconType="alert"
            color="danger"
          >
            <p>
              You must have the &apos;create_index&apos; privilege to write data
              to this index.
            </p>
          </EuiCallOut>
        </GuideRuleExample>
        <GuideRuleExample
          text="If a single sentence, end with a period."
          minHeight="120px"
        >
          <EuiCallOut
            size="s"
            title="Your index can match two sources."
            iconType="search"
          />
        </GuideRuleExample>
      </GuideRule>

      <EuiHorizontalRule />

      <EuiSpacer size="m" />

      <EuiText>
        <h2 id="empty-prompts">Empty prompts</h2>

        <p>
          The best empty state lets users know what is happening, why it is
          happening, and what to do about it. Here are four types of frequently
          used empty states.
        </p>
      </EuiText>

      <GuideRule>
        <GuideRuleExample
          panelDisplay="block"
          text="Prompt first-time users to take action."
          minHeight="328px"
        >
          <EuiEmptyPrompt
            iconType="addDataApp"
            title={<h2>Register your first repository</h2>}
            body={<p>Create a place where your snapshots will live.</p>}
            actions={
              <EuiButton color="primary" fill>
                Register a repository
              </EuiButton>
            }
          />
        </GuideRuleExample>
        <GuideRuleExample
          panelDisplay="block"
          text="If there is nothing to show, give instructions on what to do."
          minHeight="328px"
        >
          <EuiEmptyPrompt
            iconType="searchProfilerApp"
            title={<h2>No queries to profile</h2>}
            body={
              <p>
                Enter a query, click the Profile button, and see the results
                here.
              </p>
            }
          />
          <EuiSpacer />
        </GuideRuleExample>
      </GuideRule>
      <GuideRule>
        <GuideRuleExample
          panelDisplay="block"
          text="Introduce a feature."
          minHeight="328px"
        >
          <EuiEmptyPrompt
            iconType="discoverApp"
            title={<h2>Introducing our table view</h2>}
            body={
              <p>
                Explore your data inside Discover with our improved sorting and
                filtering tools.
              </p>
            }
            actions={
              <EuiButton color="primary" fill>
                Go to Discover
              </EuiButton>
            }
          />
        </GuideRuleExample>
        <GuideRuleExample
          panelDisplay="block"
          text="If using an empty prompt for an error, explain next steps."
          minHeight="328px"
        >
          <EuiEmptyPrompt
            iconType="lock"
            title={<h2>We couldn&apos;t log you in</h2>}
            body={
              <p>
                Check your credentials and try again. If you still can&apos;t
                log in, contact your system administrator.
              </p>
            }
          />
          <EuiSpacer />
        </GuideRuleExample>
      </GuideRule>

      <EuiSpacer />

      <EuiLink href="#/display/empty-prompt">
        More empty prompts examples
      </EuiLink>

      <EuiHorizontalRule />

      <EuiSpacer size="m" />

      <EuiText>
        <h2 id="labels">Labels</h2>

        <p>
          Avoid long labels, but don&apos;t sacrifice clarity. If needed, put
          additional information in help text and tooltips.
        </p>
      </EuiText>

      <GuideRule heading=" " description="">
        <GuideRuleExample
          panelDisplay="block"
          text="Use labels that say what the component does."
          minHeight="160px"
        >
          <EuiFormRow>
            <EuiCheckbox
              onChange={() => {}}
              id={htmlIdGenerator()()}
              label="Combine values in other bucket"
            />
          </EuiFormRow>
          <EuiFormRow label="Bucket label">
            <EuiFieldText />
          </EuiFormRow>
        </GuideRuleExample>
        <GuideRuleExample
          panelDisplay="block"
          text="Use specific labels."
          minHeight="160px"
        >
          <EuiFormRow>
            <EuiCheckbox
              onChange={() => {}}
              id={htmlIdGenerator()()}
              label="Limit incoming traffic"
            />
          </EuiFormRow>
          <EuiFormRow
            label="Source"
            helpText={
              <span>
                Enter CIDR or IP address, for example 192.168.132.6/22.
              </span>
            }
          >
            <EuiFieldText />
          </EuiFormRow>
        </GuideRuleExample>
      </GuideRule>

      <EuiHorizontalRule />

      <EuiSpacer size="m" />

      <EuiText>
        <h2 id="links">Links</h2>

        <p>Use links to point to detailed information.</p>
      </EuiText>

      <GuideRule>
        <GuideRuleExample
          panelDisplay="block"
          text="Place a Learn more after a text that briefly introduces a topic or feature."
        >
          <EuiFlexItem
            style={{
              display: 'flex',
              justifyContent: 'center',
              minHeight: '280px',
            }}
          >
            <EuiCallOut size="m" title="Building a dashboard?" iconType="gear">
              <p>
                Create content directly from our Dashboard app using our new
                integrated workflow.{' '}
                <EuiLink href="http://www.elastic.co" external>
                  Learn more.
                </EuiLink>
              </p>
            </EuiCallOut>
          </EuiFlexItem>
        </GuideRuleExample>
        <GuideRuleExample
          panelDisplay="block"
          text="Use inline links to point to a specific page that is stable."
          minHeight="280px"
        >
          <EuiEmptyPrompt
            title={<h2>Extend your trial</h2>}
            body={
              <p>
                To use advanced security and our other awesome&nbsp;
                <EuiLink href="http://www.elastic.co">
                  subscription features
                </EuiLink>
                , request an extension now.
              </p>
            }
            actions={
              <EuiButton color="primary" fill>
                Extend trial
              </EuiButton>
            }
          />
        </GuideRuleExample>
      </GuideRule>

      <EuiHorizontalRule />

      <EuiSpacer size="m" />

      <EuiText>
        <h2 id="modal">Modals</h2>

        <p>
          Modals are typically used for confirmation when the user might lose
          data.
        </p>
      </EuiText>

      <GuideRule>
        <GuideRuleExample
          text="For the body text, use one to two short sentences that explain the consequences."
          minHeight="304px"
        >
          <EuiPanel paddingSize="none" style={modalStyles}>
            <EuiModalHeader>
              <EuiModalHeaderTitle>
                New dashboard already in progress
              </EuiModalHeaderTitle>
            </EuiModalHeader>
            <EuiModalBody>
              <EuiText>
                <p>You can continue editing or start with a blank dashboard.</p>
              </EuiText>
            </EuiModalBody>

            <EuiModalFooter>
              <EuiButtonEmpty>Continue editing</EuiButtonEmpty>

              <EuiButton fill>Start over</EuiButton>
            </EuiModalFooter>
          </EuiPanel>
        </GuideRuleExample>

        <GuideRuleExample
          text="Some cases require three buttons."
          minHeight="304px"
        >
          <EuiPanel paddingSize="none" style={modalStyles}>
            <EuiModalHeader>
              <EuiModalHeaderTitle>
                You have unsaved changes
              </EuiModalHeaderTitle>
            </EuiModalHeader>
            <EuiModalBody>
              <EuiText>
                <p>
                  When you exit editing mode, you can keep or discard your
                  changes. You can&apos;t recover discarded changes.
                </p>
              </EuiText>
            </EuiModalBody>

            <EuiModalFooter>
              <EuiButtonEmpty>Continue editing</EuiButtonEmpty>
              <EuiButtonEmpty>Discard changes</EuiButtonEmpty>
              <EuiButton fill>Keep changes </EuiButton>
            </EuiModalFooter>
          </EuiPanel>
        </GuideRuleExample>
      </GuideRule>

      <GuideRule>
        <GuideRuleExample
          text="Use the same action verbs in the header and button text."
          minHeight="250px"
        >
          <EuiPanel paddingSize="none" style={modalStyles}>
            <EuiModalHeader>
              <EuiModalHeaderTitle>Refresh field list?</EuiModalHeaderTitle>
            </EuiModalHeader>
            <EuiModalBody>
              <EuiText>
                <p>This action resets the popularity counter of each field.</p>
              </EuiText>
            </EuiModalBody>

            <EuiModalFooter>
              <EuiButtonEmpty>Cancel</EuiButtonEmpty>

              <EuiButton fill>Refresh</EuiButton>
            </EuiModalFooter>
          </EuiPanel>
        </GuideRuleExample>
        <GuideRuleExample
          text="Omit the body if users understand the decision from the header and button text alone."
          minHeight="250px"
        >
          <EuiPanel paddingSize="none" style={modalStyles}>
            <EuiModalHeader>
              <EuiModalHeaderTitle>Remove index pattern?</EuiModalHeaderTitle>
            </EuiModalHeader>

            <EuiModalFooter>
              <EuiButtonEmpty>Cancel</EuiButtonEmpty>

              <EuiButton fill color="danger">
                Remove
              </EuiButton>
            </EuiModalFooter>
          </EuiPanel>
        </GuideRuleExample>
      </GuideRule>

      <GuideRule description="Create separate confirmations for single and bulk actions.">
        <GuideRuleExample
          text="Asking users to delete a single item should include the item name in the title, if possible.
   Use single quotes around the name if it helps clarify meaning."
          minHeight="256px"
        >
          <EuiPanel paddingSize="none" style={modalStyles}>
            <EuiModalHeader>
              <EuiModalHeaderTitle>
                Delete pipeline &apos;MyPipeline&apos;?
              </EuiModalHeaderTitle>
            </EuiModalHeader>
            <EuiModalBody>
              <EuiText>
                <p>You can&apos;t recover deleted data.</p>
              </EuiText>
            </EuiModalBody>

            <EuiModalFooter>
              <EuiButtonEmpty>Cancel</EuiButtonEmpty>

              <EuiButton color="danger" fill>
                Delete
              </EuiButton>
            </EuiModalFooter>
          </EuiPanel>
        </GuideRuleExample>

        <GuideRuleExample
          text="For bulk actions, include the number of items in the title."
          minHeight="256px"
        >
          <EuiPanel paddingSize="none" style={modalStyles}>
            <EuiModalHeader>
              <EuiModalHeaderTitle>Delete 6 pipelines?</EuiModalHeaderTitle>
            </EuiModalHeader>
            <EuiModalBody>
              <EuiText>
                <p>You can&apos;t recover deleted data.</p>
              </EuiText>
            </EuiModalBody>

            <EuiModalFooter>
              <EuiButtonEmpty>Cancel</EuiButtonEmpty>

              <EuiButton color="danger" fill>
                Delete
              </EuiButton>
            </EuiModalFooter>
          </EuiPanel>
        </GuideRuleExample>
      </GuideRule>

      <EuiHorizontalRule />

      <EuiSpacer size="m" />

      <EuiText>
        <h2 id="switches">Switches</h2>

        <p>Describe the action when the switch is enabled.</p>
      </EuiText>

      <GuideRule>
        <GuideRuleExample
          panelDisplay="block"
          text="Keep labels and descriptions short and direct."
          minHeight="150px"
        >
          <EuiSwitch label="Use the first matching geo data" />
          <EuiSpacer />
        </GuideRuleExample>
        <GuideRuleExample
          panelDisplay="block"
          text='Start with a keyword instead of "If true" or "If enabled".'
          minHeight="150px"
        >
          <EuiSwitch label="Use recommended defaults" />
          <EuiSpacer />
          <EuiText size="s">
            Rollover when an index is 30 days old or reaches 50 gigabytes.
          </EuiText>
          <EuiSpacer />
        </GuideRuleExample>
      </GuideRule>

      <EuiHorizontalRule />

      <EuiSpacer size="m" />

      <EuiText>
        <h2 id="text-fields">Text fields</h2>
      </EuiText>

      <GuideRule description="Place hints and instruction outside a field so it is always visible to the user.">
        <GuideRuleExample
          panelDisplay="block"
          text="Help users make the right decision by clarifying what goes inside a field."
        >
          <EuiFormRow
            label="Set a custom interval"
            helpText={
              <span>Use shorthand notation, such as 30s, 10m, or 1h.</span>
            }
          >
            <EuiFieldNumber min={1} max={5} step={1} />
          </EuiFormRow>
        </GuideRuleExample>

        <GuideRuleExample
          panelDisplay="block"
          text="Use complete sentences and ending punctuation."
        >
          <EuiFormRow
            label="Name"
            helpText={<span>Your name will be on public display.</span>}
          >
            <EuiFieldText name="text" />
          </EuiFormRow>
        </GuideRuleExample>
      </GuideRule>

      <GuideRule description="Use clear language for validation messages.">
        <GuideRuleExample
          panelDisplay="block"
          text="Prefer this format for a required field."
        >
          <EuiFormRow label="Name" isInvalid={true} error="Name is required.">
            <EuiFieldText name="text" isInvalid={true} />
          </EuiFormRow>
        </GuideRuleExample>

        <GuideRuleExample
          panelDisplay="block"
          text="Tell users what happened and how to fix it."
        >
          <EuiFormRow
            label="Address"
            error="Choose a different address as this one already exists."
            isInvalid={true}
          >
            <EuiFieldText name="text" isInvalid={true} />
          </EuiFormRow>
        </GuideRuleExample>
      </GuideRule>

      <EuiHorizontalRule />

      <EuiSpacer size="m" />

      <EuiText>
        <h2 id="toasts">Toasts</h2>

        <p>A common use of toasts is as a success message.</p>
      </EuiText>

      <GuideRule description=" ">
        <GuideRuleExample
          text="For common actions such as create, add, delete, remove, and save,
                    include the object type, the object name if available, and the past tense of the action.
                    Don't include &quot;successfully&quot;. It's implied."
        >
          <div>
            <EuiToast
              color="success"
              style={{ maxWidth: 300 }}
              title="User 'Casey Smith' was added"
            />
          </div>
        </GuideRuleExample>
        <GuideRuleExample text="For a message about multiple objects, include the object count, but not the names of the objects.">
          <EuiToast
            color="success"
            style={{ maxWidth: 300 }}
            title="4 visualizations were deleted"
          />
        </GuideRuleExample>
      </GuideRule>
      <EuiSpacer />
      <EuiLink href="#/display/toast/guidelines">More toast examples</EuiLink>

      <EuiHorizontalRule />

      <EuiSpacer size="m" />

      <EuiText>
        <h2 id="tooltips">Tooltips</h2>

        <p>
          Provide additional information, such as what the user can do.
          Don&apos;t use tooltips for essential information, which belongs
          directly in the UI.
        </p>
      </EuiText>

      <GuideRule>
        <GuideRuleExample
          panelDisplay="block"
          text="Use sentence case and ending period.  Sentence fragments are ok."
        >
          <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
            <EuiFlexItem grow={false}>
              <EuiCheckbox
                id="explainedCheckbox"
                label="Check for existing objects"
                onChange={() => {}}
              />
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              <EuiIconTip
                content="Check if objects were previously copied or imported into the space."
                position="right"
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </GuideRuleExample>
        <GuideRuleExample
          panelDisplay="block"
          text="Multilines are ok, but use 2 lines max."
        >
          <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
            <EuiFlexItem grow={false}>
              <EuiText size="s">Available fields</EuiText>
            </EuiFlexItem>

            <EuiFlexItem grow={false}>
              <EuiIconTip
                content="Available fields have data in the first 500 documents that match your filters. Full text and geographic fields cannot be visualized and are not shown."
                position="right"
              />
            </EuiFlexItem>
          </EuiFlexGroup>
        </GuideRuleExample>
      </GuideRule>
    </>
  );
};

export default WritingExamples;
