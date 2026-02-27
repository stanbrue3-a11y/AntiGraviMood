declare module 'flexsearch' {
  export interface DocumentOptions<T> {
    cache?: boolean;
    doc?: {
      id: string;
      field: string[];
    };
  }

  export interface SearchOptions {
    limit?: number;
    enrich?: boolean;
    bool?: 'or' | 'and';
  }

  export interface SearchResult {
    field: string;
    result: Array<{ id: string }>;
  }

  export class Document<T> {
    constructor(options: DocumentOptions<T>);
    add(doc: T): void;
    search(query: string, options?: SearchOptions): SearchResult[];
  }
}
