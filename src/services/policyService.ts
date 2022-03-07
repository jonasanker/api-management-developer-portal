import { BackendClient } from ".";

export class PolicyService {
    constructor(private readonly backendClient: BackendClient) { }

    public async getPolicyXmlForGlobalScope(): Promise<string> {
        try {
            const policyXml = await this.backendClient.get<string>(`/policies/policy?format=rawxml`, [BackendClient.getPortalHeader("getPolicyXmlForGlobalScope")]);
            return policyXml;
        }
        catch (error) {
            if (error.code === "ResourceNotFound") {
                return null;
            }
            else {
                throw error;
            }
        }
    }
}