import { GetWheatherDataRepository } from "./GetWheatherData.repository";

export class GetWheatherDataService {
    public constructor(
      private readonly getWheatherDataRepository: GetWheatherDataRepository
    ) {
      this.getWheatherDataRepository = getWheatherDataRepository;
    }
    public async getData(): Promise<JSON> {
        
        
        return await JSON.parse(JSON.stringify(await this.getWheatherDataRepository.getData()));
      }
}