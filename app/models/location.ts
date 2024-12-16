import { BaseModel, column } from '@adonisjs/lucid/orm'
import db from '@adonisjs/lucid/services/db'

export default class Location extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column({
    prepare: (value) => db.raw('POINT(?, ?)', [value[0], value[1]]),
    consume: (value) => [value.x, value.y],
  })
  declare coordinate: [number, number]
}
