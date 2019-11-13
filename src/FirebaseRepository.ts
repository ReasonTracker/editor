import { iRepository, Change, Claim, } from "@reasonscore/core";

export class FirebaseRepository implements iRepository {


    
    notify(changes: Change[]): void {
        throw new Error("Method not implemented.");
    }

    getItem(ItemId: import("@reasonscore/core").Id, when?: string | undefined): import("@reasonscore/core/lib/dataModels/Item").Item | undefined {
        throw new Error("Method not implemented.");
    }

    getClaimEdgesByParentId(parentId: import("@reasonscore/core").Id, when?: string | undefined): import("@reasonscore/core").ClaimEdge[] {
        throw new Error("Method not implemented.");
    }

    getClaimEdgesByChildId(childId: import("@reasonscore/core").Id, when?: string | undefined): import("@reasonscore/core").ClaimEdge[] {
        throw new Error("Method not implemented.");
    }

    getScoreBySourceClaimId(sourceClaimId: import("@reasonscore/core").Id, when?: string | undefined): import("@reasonscore/core").Score {
        throw new Error("Method not implemented.");
    }
}