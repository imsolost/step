import knex from '../knex'

const getRecordById = ( table, id ) =>
  knex.table( table ).where( 'id', id ).first('*')
    .then( record => {
      if ( record === undefined ) {
        throw new Error( `getRecordById: no record in table ${table} with id ${id}` )
      } else {
        return record
      }
    })
    .catch( error => error )

const findAllWhere = ( table, column, data ) =>
  knex.table( table ).where( column, data ).returning('*')
    .then( records => {
      if ( records.length === 0 ) {
        throw new Error( `findAllWhere: no records in table ${table} column, ${column} matching ${data}` )
      } else {
        return records
      }
    })
    .catch( error => error )

export { getRecordById, findAllWhere }
