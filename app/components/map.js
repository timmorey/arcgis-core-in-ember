import Component from '@glimmer/component'
import MapView from '@arcgis/core/views/MapView'
import { action } from '@ember/object'

export default class MapComponent extends Component {

  @action didInsertMapElement(element) {
    this.mapView = new MapView({
      container: element,
      map: { basemap: 'gray-vector' },
      constraints: { snapToZoom: false },
    })
  }

}
