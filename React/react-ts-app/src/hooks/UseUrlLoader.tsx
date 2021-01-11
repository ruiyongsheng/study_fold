import { useState, useEffect } from "react";

import axios from 'axios';
const useUrlLoader = (url: string, deps: any[] = []) => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(url).then(res => {
      setLoading(false);
      setData(res.data);
    })
  }, [url, deps]);
  return [data, loading];
};
export default useUrlLoader;