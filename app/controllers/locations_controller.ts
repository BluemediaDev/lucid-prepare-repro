// import type { HttpContext } from '@adonisjs/core/http'

import Location from '#models/location'

export default class LocationsController {
  async trigger(): Promise<{}> {
    const location = await Location.create({
      coordinate: [52.52184, 13.412984],
    })

    location.coordinate = [52.52184, 10.412984]

    await location.save()

    return {}
  }
}
