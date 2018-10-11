const manageTranslations = require('react-intl-translations-manager').default;

manageTranslations({
  messagesDirectory: 'src/translations/extractedMessages/en',
  translationsDirectory: 'src/translations/locales/en',
  languages: ['en'], // any language you need
  singleMessagesFile: true
});