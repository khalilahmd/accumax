export const environment = {
    production: false,
    config: () => import('../configurations/config-local').then(m => m.globalConfig)
  };