import { withKnobs, text, object } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';
import {
  getExtraKnobs,
  tabLabels,
  getComplianceKnob,
} from '@ecl-twig/story-utils';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';
import demoTitleContent from './demo/data--title';
import demoMetaTitleContent from './demo/data--meta-title';
import demoMetaTitleDescriptionContent from './demo/data--meta-title-description';

import pageHeaderCore from './ecl-page-header-core.html.twig';
import notes from './README.md';

const preparePageHeaderCore = (data, desc, meta) => {
  data.breadcrumb.icon_file_path = defaultSprite;
  data.title = text('title', data.title, tabLabels.required);
  data.breadcrumb = object('breadcrumb', data.breadcrumb, tabLabels.required);

  if (meta) {
    data.meta = text('meta', data.meta, tabLabels.optional);
  }
  if (desc) {
    data.description = text(
      'description',
      data.description,
      tabLabels.optional
    );
  }

  getExtraKnobs(data);
  getComplianceKnob(data);

  return data;
};

export default {
  title: 'Components/Page Headers/Page Header Core',
  decorators: [withNotes, withCode, withKnobs],
};

export const Title = () =>
  pageHeaderCore(preparePageHeaderCore(demoTitleContent));

Title.story = {
  name: 'title',

  parameters: {
    notes: { markdown: notes, json: demoTitleContent },
  },
};

export const MetaTitle = () =>
  pageHeaderCore(preparePageHeaderCore(demoMetaTitleContent, false, true));

MetaTitle.story = {
  name: 'meta-title',

  parameters: {
    notes: { markdown: notes, json: demoMetaTitleContent },
  },
};

export const MetaTitleDescription = () =>
  pageHeaderCore(
    preparePageHeaderCore(demoMetaTitleDescriptionContent, true, true)
  );

MetaTitleDescription.story = {
  name: 'meta-title-description',

  parameters: {
    notes: {
      markdown: notes,
      json: demoMetaTitleDescriptionContent,
    },
  },
};
