// src/environments/environment.prod.ts
export const environment = {
    production: true,
    config: () => import('../configurations/config-prod').then(m => m.globalConfig)
  };