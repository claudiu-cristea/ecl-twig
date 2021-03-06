import { merge, renderTwigFileAsNode } from '@ecl-twig/test-utils';

import bannerDataImage from './demo/data--image-box';
import bannerDataImageGradient from './demo/data--image-gradient';
import bannerDataImageShade from './demo/data--image-shade';
import bannerDataSimplePrimary from './demo/data--simple-primary';
import bannerDataSimpleGrey from './demo/data--simple-grey';
import bannerDataSimpleWhite from './demo/data--simple-white';

describe('EC - Hero Banner', () => {
  const template =
    '@ecl-twig/ec-component-hero-banner/ecl-hero-banner.html.twig';
  const render = (params) => renderTwigFileAsNode(template, params);

  describe('Simple', () => {
    test(`- primary renders correctly`, () => {
      expect.assertions(1);

      return expect(render(bannerDataSimplePrimary)).resolves.toMatchSnapshot();
    });

    test(`- grey renders correctly`, () => {
      expect.assertions(1);

      return expect(render(bannerDataSimpleGrey)).resolves.toMatchSnapshot();
    });

    test(`- white renders correctly`, () => {
      expect.assertions(1);

      return expect(render(bannerDataSimpleWhite)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(bannerDataSimplePrimary, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(bannerDataSimplePrimary, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('with validation enabled and missing input data returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...bannerDataSimplePrimary, _compliance_: true };
      dataCompliance.title = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });

  describe('image', () => {
    test(`- text-box renders correctly`, () => {
      expect.assertions(1);

      return expect(render(bannerDataImage)).resolves.toMatchSnapshot();
    });

    test(`- gradient renders correctly`, () => {
      expect.assertions(1);

      return expect(render(bannerDataImageGradient)).resolves.toMatchSnapshot();
    });

    test(`- shade renders correctly`, () => {
      expect.assertions(1);

      return expect(render(bannerDataImageShade)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra class names', () => {
      expect.assertions(1);

      const withExtraClasses = merge(bannerDataImage, {
        extra_classes: 'custom-class custom-class--test',
      });

      return expect(render(withExtraClasses)).resolves.toMatchSnapshot();
    });

    test('renders correctly with extra attributes', () => {
      expect.assertions(1);

      const withExtraAttributes = merge(bannerDataImage, {
        extra_attributes: [
          { name: 'data-test', value: 'data-test-value' },
          { name: 'data-test-1', value: 'data-test-value-1' },
        ],
      });

      return expect(render(withExtraAttributes)).resolves.toMatchSnapshot();
    });

    test('with validation enabled and missing input data returns the right warning message', () => {
      expect.assertions(1);

      const dataCompliance = { ...bannerDataImage, _compliance_: true };
      dataCompliance.image = '';

      return expect(render(dataCompliance)).resolves.toMatchSnapshot();
    });
  });
});
