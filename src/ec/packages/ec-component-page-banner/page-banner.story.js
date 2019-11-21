import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withNotes } from '@ecl-twig/storybook-addon-notes';
import withCode from '@ecl-twig/storybook-addon-code';

import bannerDataDefault from '@ecl/ec-specs-page-banner/demo/data--default';
import bannerDataImage from '@ecl/ec-specs-page-banner/demo/data--image';
import bannerDataImageShade from '@ecl/ec-specs-page-banner/demo/data--image-shade';
import bannerDataPrimary from '@ecl/ec-specs-page-banner/demo/data--primary';
import bannerDataAlignLeft from '@ecl/ec-specs-page-banner/demo/data--align-left';

import defaultSprite from '@ecl/ec-resources-icons/dist/sprites/icons.svg';

import pageBanner from './ecl-page-banner.html.twig';
import pageBannerDocs from './README.md';

function formatBanner(b) {
  const iconType = b.link.icon.shape.split('--');
  const banner = {
    type: b.variant,
    title: text('Title', b.title),
    baseline: text('Baseline', b.baseline),
    link: {
      link: {
        label: text('Link label', b.link.label),
        icon_position: 'after',
      },
      icon: {
        type: iconType[0],
        name: iconType[1],
        transform: b.link.icon.transform,
        size: b.link.icon.size,
        path: defaultSprite,
      },
    },
    centered: boolean('Centered', b.isCentered),
  };

  if ('image' in b) {
    banner.image = b.image;
  }

  return banner;
}

storiesOf('Components/Banners/Page Banner', module)
  .addDecorator(withKnobs)
  .addDecorator(withNotes)
  .addDecorator(withCode)
  .add(
    'default',
    () => {
      const data = formatBanner(bannerDataDefault);

      return pageBanner(data);
    },
    {
      notes: {
        markdown: pageBannerDocs,
        json: formatBanner(bannerDataDefault),
      },
    }
  )
  .add(
    'image',
    () => {
      const data = formatBanner(bannerDataImage);

      return pageBanner(data);
    },
    {
      notes: { markdown: pageBannerDocs, json: formatBanner(bannerDataImage) },
    }
  )
  .add(
    'image-shade',
    () => {
      const data = formatBanner(bannerDataImageShade);

      return pageBanner(data);
    },
    {
      notes: {
        markdown: pageBannerDocs,
        json: formatBanner(bannerDataImageShade),
      },
    }
  )
  .add(
    'primary',
    () => {
      const data = formatBanner(bannerDataPrimary);

      return pageBanner(data);
    },
    {
      notes: {
        markdown: pageBannerDocs,
        json: formatBanner(bannerDataPrimary),
      },
    }
  )
  .add(
    'align-left',
    () => {
      const data = formatBanner(bannerDataAlignLeft);

      return pageBanner(data);
    },
    {
      notes: {
        markdown: pageBannerDocs,
        json: formatBanner(bannerDataAlignLeft),
      },
    }
  );
