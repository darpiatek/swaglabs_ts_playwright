/**
 * Supported log levels used by the logger.
 */
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

/**
 * Defines numeric priorities for each log level.
 * Higher number means higher severity.
 */
const levelPriority: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

/**
 * Current log level read from environment variables.
 * Defaults to `info` if LOG_LEVEL is not defined.
 */
const currentLevel =
  (process.env.LOG_LEVEL as LogLevel) ?? 'info';

/**
 * Determines whether a log message should be printed
 * based on the configured log level.
 *
 * @param level - Level of the message to evaluate
 * @returns True if the message should be logged
 */
function shouldLog(level: LogLevel): boolean {
  return levelPriority[level] >= levelPriority[currentLevel];
}

/**
 * Generates a timestamp string for log messages.
 *
 * Uses ISO 8601 format to ensure logs are sortable
 * and consistent across environments.
 *
 * @returns Current timestamp string
 */
function getTimestamp(): string {
  return new Date().toISOString();
}

/**
 * Simple application logger with log levels and timestamps.
 *
 * Output format example:
 * [2026-03-04T12:41:22.134Z] [INFO] Application started
 */
export const logger = {
  /**
   * Logs debug-level messages.
   *
   * @param message - Debug message
   */
  debug(message: string) {
    if (shouldLog('debug')) {
      console.log(`[${getTimestamp()}] [DEBUG] ${message}`);
    }
  },

  /**
   * Logs informational messages.
   *
   * @param message - Info message
   */
  info(message: string) {
    if (shouldLog('info')) {
      console.log(`[${getTimestamp()}] [INFO] ${message}`);
    }
  },

  /**
   * Logs warning messages.
   *
   * @param message - Warning message
   */
  warn(message: string) {
    if (shouldLog('warn')) {
      console.warn(`[${getTimestamp()}] [WARN] ${message}`);
    }
  },

  /**
   * Logs error messages.
   *
   * @param message - Error message
   */
  error(message: string) {
    if (shouldLog('error')) {
      console.error(`[${getTimestamp()}] [ERROR] ${message}`);
    }
  },
};