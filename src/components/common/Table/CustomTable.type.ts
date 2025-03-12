export interface ColumnType<T> {
  title: string;
  dataIndex: keyof T;
  key: string | number;
  render?: (value: T[keyof T], record?: T, index?: number) => React.ReactNode;
}

export interface PaginationType {
  current?: number;
  total?: number;
  setCurrent?: React.Dispatch<React.SetStateAction<number>>;
}

export interface TableProps<T> {
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

export interface PaginationButtonProps {
  onClick: () => void;
  disabled: boolean;
  type: "prev" | "next";
}

export interface PaginationNumberProps {
  page: number;
  isActive: boolean;
  handleClick: () => void;
}
