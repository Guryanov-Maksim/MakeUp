import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const apiKey = '48c83221-ea67-4ada-abb6-d05f32ffa30d';
const homeCoordinates = [55.596102, 38.117101];

const defaultState = {
  center: homeCoordinates,
  zoom: 18,
};

const YMap = () => {
  return (
    <div className="contacts__map">
      <YMaps query={{ apikey: apiKey }}>
        <Map defaultState={defaultState} width="100%" height="100%">
          <Placemark geometry={homeCoordinates} />
        </Map>
      </YMaps>
    </div>
  );
}

export default YMap;
