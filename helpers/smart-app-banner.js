new SmartBanner({
  daysHidden: 15,   // days to hide banner after close button is clicked (defaults to 15)
  daysReminder: 90, // days to hide banner after "VIEW" button is clicked (defaults to 90)
  appStoreLanguage: 'us', // language code for the App Store (defaults to us)
  title: 'MyPage',
  author: 'MyCompany LLC',
  button: 'VIEW',
  store: {
    ios: 'On the App Store',
    android: 'In Google Play',
    windows: 'In Windows store'
  },
  price: {
    ios: 'FREE',
    android: 'FREE',
    windows: 'FREE'
  }
  // , force: 'ios' // Uncomment for platform emulation
});