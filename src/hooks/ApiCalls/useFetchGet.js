import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk, selectAccess } from '../../redux/userSlice';

export default function UseFetchGet(url) {
  const access = useSelector(selectAccess);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (url) {
      fetch(url, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      })
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch(() => dispatch(logoutThunk()))
        .finally(() => setLoading(false));
    }
  }, []);

  return { data, isLoading };
}
