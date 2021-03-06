/**
 * default config
 */
module.exports = {
  port: 8360, // server port
  host: '127.0.0.1', // server host
  workers: 0, // server workers num, if value is 0 then get cpus num
  createServer: undefined, // create server function
  startServerTimeout: 3000, // before start server time
  reloadSignal: 'SIGUSR2', // reload process signal
  onUnhandledRejection: err => think.logger.error(err), // unhandledRejection handle
  onUncaughtException: err => think.logger.error(err), // uncaughtException handle
  processKillTimeout: 10 * 1000, // process kill timeout, default is 10s
  enableAgent: false, // enable agent worker
  jsonpCallbackField: 'callback', // jsonp callback field
  jsonContentType: 'application/json', // json content type
  errnoField: 'errno', // errno field
  errmsgField: 'errmsg', // errmsg field
  defaultErrno: 1000, // default errno
  validateDefaultErrno: 1001 // validate default errno
};
