import { useCallback, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import useUpdateParams from '../../hooks/useUpdateParams';

import styles from './Filters.module.css';

const filters = [
  {
    value: 'relevance',
    label: 'Relevancia',
  },
  {
    value: 'priceAsc',
    label: 'Precio Asc',
  },
  {
    value: 'priceDesc',
    label: 'Precio Desc',
  },
];

export default function Filters() {
  const [activeFilter, setActiveFilter] = useState('relevance');

  const { updateUrlParams } = useUpdateParams();
  const debouncedUpdateUrlParams = useDebouncedCallback(updateUrlParams, 300);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) => {
      const active = event.target.value;

      setActiveFilter(active);
      debouncedUpdateUrlParams({ sort: active });
    },
    [setActiveFilter, updateUrlParams],
  );

  return (
    <div className={styles.filterContainer}>
      <label className={styles.filterLabel}>Ordenar por:</label>
      <select className={styles.filterSelect} onChange={handleChange} value={activeFilter}>
        {filters.map((filter) => {
          return (
            <option className={styles.filterOption} key={filter.value} value={filter.value}>
              {filter.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
