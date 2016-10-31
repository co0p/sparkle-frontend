export class App {
  configureRouter(config, router) {
    config.title = 'Sparkle.io';
    config.map([
      { route: [ '', 'welcome' ], name: 'welcome', moduleId: '../welcome/welcome', nav: false, title: 'Welcome' },
      { route: 'tour', name: 'tour', moduleId: '../tour/tour', nav: true, title: 'Tour' },
      { route: 'pricing', name: 'pricing', moduleId: '../pricing/pricing', nav: true, title: 'Pricing' },
      { route: 'profile', name: 'profile', moduleId: '../profile/profile', nav: false, title: 'Profile' }
    ]);

    this.router = router;
  }
}
