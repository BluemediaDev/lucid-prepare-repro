import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'locations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.point('coordinate')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
