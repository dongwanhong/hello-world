import React, { Component } from 'react';
/* react-intl imports */
import { addLocaleData, IntlProvider } from 'react-intl';
import englishLocaleData from 'react-intl/locale-data/en';
import chineseLocaleData from 'react-intl/locale-data/zh';
import zhCN from './locales/zh-CN';
import enUS from './locales/en-US';

addLocaleData([...englishLocaleData, ...chineseLocaleData]);
const messages = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

class LocaleProvider extends Component {
  constructor(props) {
    super(props);

    const { language } = navigator;
    this.state = {
      lang: language,
    };
  }

  render() {
    const { lang } = this.state;
    const { children } = this.props;
    return (
      <IntlProvider className locale={lang} messages={messages[lang]}>
        {children}
      </IntlProvider>);
  }
}

export default LocaleProvider;
