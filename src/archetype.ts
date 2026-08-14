export class SwapGrid {
  private g: number[][];
  constructor(seed?: number[], public readonly w = 8) {
    this.g = seed ? seed.map((r) => (Array.isArray(r) ? r : [r])) : Array.from({ length: 8 }, () => Array(8).fill(0));
  }
  get(y: number, x: number): number { return this.g[y]?.[x] ?? 0; }
  set(y: number, x: number, v: number): void { if (this.g[y]) this.g[y][x] = v; }
  matches(y: number, x: number, minRun = 3): boolean {
    let run = 1; const v = this.g[y][x];
    for (let c = x + 1; c < this.w && this.g[y][c] === v; c++) run++;
    for (let c = x - 1; c >= 0 && this.g[y][c] === v; c--) run++;
    if (run >= minRun) return true;
    run = 1;
    for (let r = y + 1; r < 8 && this.g[r][x] === v; r++) run++;
    for (let r = y - 1; r >= 0 && this.g[r][x] === v; r--) run++;
    return run >= minRun;
  }
}