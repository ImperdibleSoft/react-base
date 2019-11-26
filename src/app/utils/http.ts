import axios from 'axios';
import { error } from '../../common/utils/logger';

interface RequestParams {
  url: string;
  method?: string;
  payload?: any;
  onUploadProgress?: (progressEvent: any) => void;
  onDownloadProgress?: (progressEvent: any) => void;
  withCredentials?: boolean;
}

/**
 * Creates a new HTTP request
 */
const http = ({
  url,
  method = 'get',
  payload,
  onUploadProgress,
  onDownloadProgress,
  withCredentials = true,
}: RequestParams): Promise<any> => {
  // Enable CORS credentials
  axios.defaults.withCredentials = withCredentials;

  // Some interceptors to parse response or error
  axios.interceptors.response.use(
    response => response.data || response,
    error => {
      // Already parsed error
      if (error.response && error.response.data && error.response.data.errors) {
        return Promise.reject(error.response.data);
      }

      // Network error
      if (error.request && error.request.readyState === 4 && !error.response) {
        return Promise.reject({
          errors: [
            {
              channel: 'web',
              reason: 'connection',
              body: 'Offline mode',
              tag: 'offline-banner',
              data: {
                isPermanent: true,
              },
            },
          ],
        });
      }

      return Promise.reject(error);
    }
  );

  // Choose axios method
  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        onDownloadProgress,
      });

    case 'post':
      return axios.post(url, payload, {
        onUploadProgress,
        onDownloadProgress,
      });

    case 'put':
      return axios.put(url, payload, {
        onUploadProgress,
        onDownloadProgress,
      });

    case 'patch':
      return axios.patch(url, payload, {
        onUploadProgress,
        onDownloadProgress,
      });

    case 'delete':
      return axios.delete(url, {
        data: payload,
        onUploadProgress,
        onDownloadProgress,
      });

    default:
      error(`Unhandled HTTP <${method.toLowerCase()}> method was used. Using <get> instead`);

      return axios.get(url, {
        onDownloadProgress,
      });
  }
};

export default http;
