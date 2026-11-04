import { unstable_cache } from "next/cache";

import { GITHUB_USERNAME } from "@/app/data";
import type { Activity } from "@/components/kibo-ui/contribution-graph";

type GitHubContributionsResponse = {
    contributions: Activity[];
};

export const getGitHubContributions = unstable_cache(
    async () => {
        try {
            const res = await fetch(
                `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${new Date().getFullYear()}`
            );
            const data = (await res.json()) as GitHubContributionsResponse;
            return data.contributions ?? [];
        } catch {
            return [] as Activity[];
        }
    },
    ["github-contributions"],
    { revalidate: 86400 }
);
