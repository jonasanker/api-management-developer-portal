import { BackendClient } from "./backendClient";
import { IdentityProviderContract } from "../contracts/identityProvider";
import { Page } from "../models/page";
import { IdentityProvider } from "../models/identityProvider";
import { IdentitySettingContract } from "../contracts/identitySettings";

/**
 * A service for management operations with identity providers.
 */
export class IdentityService {
    constructor(private readonly backendClient: BackendClient) { }

    /**
     * Returns a collection of configured identity providers.
     */
    public async getIdentityProviders(): Promise<IdentityProvider[]> {
        const identityProviders = await this.backendClient.get<Page<IdentityProviderContract>>("/identityProviders", [BackendClient.getPortalHeader("getIdentityProviders")]);
        return identityProviders.value.map(contract => new IdentityProvider(contract));
    }

    public async getIdentitySetting(): Promise<IdentitySettingContract> {
        return await this.backendClient.get<IdentitySettingContract>("/portalsettings/signup", [BackendClient.getPortalHeader("getIdentitySetting")]);
    }
}