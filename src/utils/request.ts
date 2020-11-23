/**
 * Network request tool
 * More detailed API documentation: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { notification } from 'antd';

const codeMessage = {
  200: 'The server successfully returned the requested data.',
  201: 'The new or modified data was successful.',
  202: 'A request has entered the background queue (asynchronous task).',
  204: 'The data was deleted successfully.',
  400: 'There was an error in the request, and the server did not create or modify data.',
  401: 'The user does not have permissions (token, username, password error).',
  403: 'The user is authorized, but access is prohibited.',
  404: 'The request made was for a record that does not exist.',
  406: 'The format of the request is not available.',
  410: 'The requested resource was permanently deleted and can no longer be obtained.',
  422: 'When the object was created a validation error occurs.',
  500: 'An error occured on the server, check the server.',
  502: 'Gateway error',
  503: 'The service is not available, server is temporarily overloaded or in maintenance.',
  504: 'The gateway timed out.',
};

/**
 * Exception handlers
 */
const errorHandler = (error: { response: Response }): Response => {
  const { response } = error;
  if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText;
    const { status, url } = response;

    notification.error({
      message: `请求错误 ${status}: ${url}`,
      description: errorText,
    });
  } else if (!response) {
    notification.error({
      description: 'There is an exception to your network and you cannot connect to the server',
      message: 'Network anomalies',
    });
  }
  return response;
};

/**
 * Default parameters when configuring request requests
 */
const request = extend({
  errorHandler, // Default error handling
  credentials: 'include', // Does the default request bring a cookie?
});

export default request;
