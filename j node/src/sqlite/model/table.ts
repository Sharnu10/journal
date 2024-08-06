export interface ColumnDefination {
   name: string,
   type: string,
   constraints?: string
}

export interface TableOptions {
    includeId?: boolean;
    includeCreatedDate?: boolean
}