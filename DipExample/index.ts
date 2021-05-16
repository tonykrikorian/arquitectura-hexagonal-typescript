import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { TYPES } from "../module/Shared/Domain/types";
import { myContainer } from "../module/Shared/Infrastructure/container.config";
import { NinjaUseCase } from '../module/Users/Application/NinjaUseKatana';

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
   
    const service = myContainer.get<NinjaUseCase>(TYPES.UseCase);

    const response= service.ExecuteUseCase()
   
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: response
    };

};

export default httpTrigger;