export interface ColumnType<T> {
  title: string;
  dataIndex: keyof T;
  key: string;
  render?: (value: T[keyof T], record?: T, index?: number) => React.ReactNode;
}

export interface PaginationType {
  current?: number;
  total?: number;
  setCurrent?: React.Dispatch<React.SetStateAction<number>>;
}

export interface TableComponentProps<T> {
  columns: ColumnType<T>[];
  dataSource: T[];
  pagination?: PaginationType;
  locale?: {
    emptyText?: string;
  };
}

export interface PaginationDotsProps {
  type: "dots-left" | "dots-right";
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
  totalPage: number;
}
