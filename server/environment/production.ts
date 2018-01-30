import { IEnvironment } from "./env-model";
const root = require('app-root-path').path;

export const prodVariables:IEnvironment = {
  environmentName: 'Development Environment',
  PORT: 4300,
  SECURITY: {
    HTTPS: true,
    KEY: `${root}/security/key.pem`,
    CERT: `${root}/security/cert.pem`
  }
};
