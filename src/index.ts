// M4TCH-666AX — clean-room match-3. Deterministic by construction.
// Inspiration (mechanics only, not source material): match-three conventions (swap, cascade, score)
// Target engine for the render layer: canvas-2d (see docs/BUILD_PLAN.md).

import { seededRandom } from "./rng";
import { SwapGrid } from "./archetype";

export const SPEC = "match-three conventions (swap, cascade, score)";
export const MODULES = [{ id: "SwapGrid", name: "M4TCH-666AX :: SwapGrid" }];
export { seededRandom };
