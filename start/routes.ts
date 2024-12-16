/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const LocationsController = () => import('#controllers/locations_controller')

router.get('/', [LocationsController, 'trigger'])
