const axios = require("axios");
import { FetchDataRepository } from "./FetchData.repository";
const cityIds = [735563,735640,2995041,2996180,3000192,735736,3004427,3019256,3019265,3021411]
export class FetchDataService {
  public constructor(
    private readonly fetchDataRepository: FetchDataRepository
  ) {
    this.fetchDataRepository = fetchDataRepository;
  }

  public async fetchData(): Promise<JSON | null | any> {
    let data: JSON;
    this.fetchDataRepository.deleteOldData();
    cityIds.forEach(async element => {
        await axios
      .get(
        `https://api.weatherbit.io/v2.0/current?key=05a15153fe924e8fad885b8b4452dd64&city_id=${element}`
      )
      .then(function (response) {
        // handle success
        data = response.data;
      })
      .catch(function (error) {
        // handle error
      });
    this.fetchDataRepository.insertData(data);
    });
    
    return data;
  }
}
