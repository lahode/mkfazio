import { IEnvironment } from "./env-model";
const root = require('app-root-path').path;

export const devVariables:IEnvironment = {
  environmentName: 'Development Environment',
  PORT: 4300,
  SECURITY: {
    HTTPS: false,
    KEY: `${root}/security/key.pem`,
    CERT: `${root}/security/cert.pem`
  }
};
