import { useCallback, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import TextField from '../UI/TextField/TextField';
import { SearchIcon } from '../UI/Icons/Icons';

import useUpdateParams from 'hooks/useUpdateParams';

import styles from './SearchBar.module.css';

export default function SearchBar() {
  const [keyword, setKeyword] = useState<string>('');
  const { updateUrlParams } = useUpdateParams();
  const debouncedUpdateUrlParams = useDebouncedCallback(updateUrlParams, 300);

  const handleChange = useCallback(
    (value: string) => {
      setKeyword(value);
      debouncedUpdateUrlParams({ query: value });
    },
    [setKeyword, updateUrlParams],
  );

  return (
    <div className={styles.container}>
      <TextField
        placeholder="Buscar"
        icon={<SearchIcon />}
        value={keyword}
        onChange={handleChange}
      />
    </div>
  );
}
