
export const insertQuery = (tableName: string, columnNames: string, valuesLength: string) => { 
  return `INSERT INTO ${tableName} (${columnNames}) VALUES (${valuesLength})`; 
}

export const createQuery = (tableName: string, columnDefinations: string[]) => (
    `CREATE TABLE IF NOT EXISTS ${tableName} (${columnDefinations.join(', ')})`
);

export const selectQuery = (tableName: string) => (`SELECT * FROM ${tableName}`)
export const selectConstraintQuery = (tableName: string, constraints: string) => (`SELECT * FROM ${tableName} WHERE ${constraints}`)