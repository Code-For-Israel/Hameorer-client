import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk, selectAccess } from '../../redux/userSlice';

export default function UseFetchPost(url, body) {
  const access = useSelector(selectAccess);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (url) {
      fetch(url, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${access}`,
        },
        body: body,
      })
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch(() => dispatch(logoutThunk()))
        .finally(() => setLoading(false));
    }
  }, [access, body, url, dispatch]);

  return { data, isLoading };
}
