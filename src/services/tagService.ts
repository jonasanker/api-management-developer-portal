import { TagContract } from "../contracts/tag";
import { PageContract } from "../contracts/page";
import { Page } from "../models/page";
import { Tag } from "../models/tag";
import { Utils } from "../utils";
import { BackendClient } from "./backendClient";

export class TagService {
    constructor(private readonly backendClient: BackendClient) { }

    public async getTags(scope?: string, filter?: string): Promise<Page<Tag>> {
        let query = "/tags";

        if (scope) {
            query = Utils.addQueryParameter(query, `scope=${scope}`);
        }

        if (filter) {
            query = Utils.addQueryParameter(query, `$filter=(startswith(properties/displayName,'${filter}'))`);
        }

        const pageOfTags = await this.backendClient.get<PageContract<TagContract>>(query, [BackendClient.getPortalHeader("getTags")]);

        const page = new Page<Tag>();
        page.value = pageOfTags.value.map(x => new Tag(x));
        page.nextLink = pageOfTags.nextLink;

        return page;
    }
}