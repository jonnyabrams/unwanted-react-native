import { useState } from "react";

const useApi = (apiFunc: any) => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  // ...args spread operator allows parameters to be passed
  const request = async (...args: any[]) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    // inline return setError(true) same as doing { setError(true) --new line-- return;}
    if (!response.ok) return setError(true);

    // set error to false in case it had previously been set to true
    setError(false);
    setData(response.data);
  };

  return { request, data, error, loading };
};

export default useApi;
