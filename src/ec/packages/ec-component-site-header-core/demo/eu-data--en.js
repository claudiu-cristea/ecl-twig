import specs from '@ecl/eu-specs-site-header-core/demo/data--en';
import dataMenu from '../../ec-component-menu/demo/data--en';
import adapter from '../adapter';

specs.logo.src_mobile = '/eu-logo-mobile-en.svg';
specs.logo.src_desktop = '/eu-logo--en.svg';
specs.menu = dataMenu;
specs.menu.site_name = '';
specs.menu_label = 'Menu';

export default adapter(specs);
