import { PaginationState } from '@tanstack/react-table';
import { useState } from 'react';

interface initialPagination {
  initPageSize?: number;
  initPageIndex?: number;
}

export function usePagination({
  initPageSize,
  initPageIndex,
}: initialPagination) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageSize: initPageSize ?? 10,
    pageIndex: initPageIndex ?? 0,
  });
  const { pageSize, pageIndex } = pagination;

  return {
    limit: pageSize,
    onPaginationChange: setPagination,
    pagination,
    skip: pageSize * pageIndex,
  };
}
