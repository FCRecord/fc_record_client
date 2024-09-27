import axios, {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  AxiosResponseHeaders,
} from "axios";

// Success Response 타입 정의
export type SuccessResponse<TData> = {
  data: TData;
  status: number;
  statusText: string;
  headers: Record<string, string | number>;
};

// Error Response 타입 정의
export type ErrorResponse = {
  message: string;
  status: number;
  details?: unknown;
};

// Axios 인스턴스 생성
const apiClient = axios.create({
  baseURL: "testURL", //TODO: 테스트용 URL
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 인터셉터 설정 (요청/응답 시 특정 로직을 넣을 수 있음)
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  const token = localStorage.getItem("jwt"); // TODO: JWT 토큰이 있을 경우 추가

  if (token) {
    // headers가 undefined일 수 있으므로, 객체로 초기화
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    return Promise.reject(handleError(error));
  }
);

// 에러 처리 함수
function handleError(error: AxiosError): ErrorResponse {
  if (error.response) {
    const responseData = error.response.data as { message?: string };

    return {
      message: responseData?.message || "Unknown Error",
      status: error.response.status,
      details: error.response.data,
    };
  } else if (error.request) {
    return {
      message: "No response received from server",
      status: 0,
    };
  } else {
    return {
      message: error.message,
      status: 0,
    };
  }
}

const callAPI = {
  // GET 요청
  get: async function <TData, TParams = Record<string, unknown>>(
    url: string,
    params?: TParams
  ): Promise<SuccessResponse<TData> | ErrorResponse> {
    try {
      const response = await apiClient.get<TData>(url, { params });
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers as AxiosResponseHeaders,
      };
    } catch (error) {
      return handleError(error as AxiosError);
    }
  },

  // POST 요청
  post: async function <TData, TRequest = Record<string, unknown>>(
    url: string,
    data: TRequest
  ): Promise<SuccessResponse<TData> | ErrorResponse> {
    try {
      const response = await apiClient.post<TData>(url, data);
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers as AxiosResponseHeaders,
      };
    } catch (error) {
      return handleError(error as AxiosError);
    }
  },

  // PUT 요청
  put: async function <TData, TRequest = Record<string, unknown>>(
    url: string,
    data: TRequest
  ): Promise<SuccessResponse<TData> | ErrorResponse> {
    try {
      const response = await apiClient.put<TData>(url, data);
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers as AxiosResponseHeaders,
      };
    } catch (error) {
      return handleError(error as AxiosError);
    }
  },

  // DELETE 요청
  delete: async function <TData>(
    url: string
  ): Promise<SuccessResponse<TData> | ErrorResponse> {
    try {
      const response = await apiClient.delete<TData>(url);
      return {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
        headers: response.headers as AxiosResponseHeaders,
      };
    } catch (error) {
      return handleError(error as AxiosError);
    }
  },
};

export default callAPI;
