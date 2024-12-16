# Database.raw in ColumnOptions.prepare works for insert but not for update

Quick repro for adonisjs/lucid#939.

# Relevant files

- [Migration](database/migrations/1734390252308_create_locations_table.ts)
- [Model](app/models/location.ts)
- [Controller](app/controllers/locations_controller.ts)

# Usage

1. `node ace migration:fresh`
2. `npm run dev`
3. `HTTP GET http://localhost:3333/`
4. Profit!