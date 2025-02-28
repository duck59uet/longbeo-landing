export const configurableFetch = (
  input: RequestInfo | URL,
  init?: RequestInit
) =>
  fetch(input, init)
    .then((response: any) => {
      if (response.status === 401) {
        document.location.href = "/login";
        return Promise.reject(response);
      }
      return response;
    });
