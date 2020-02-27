// ## Exposed

export interface ExactPattern {
   type: 'exact'
   repetition: 'none'
   persistence: 'none'
   pattern: PatternRootGroup
}

export interface TrianglePattern {
   type: 'triangle'
   repetition: 'none'
   persistence: 'persistent'
   pattern: PatternRootGroup
}

export interface CyclicPattern {
   type: 'cyclic'
   repetition: 'cycle'
   persistence: 'none'
   pattern: PatternRootGroup
}

export interface GridPattern {
   type: 'grid'
   repetition: 'cycle'
   persistence: 'persistent'
   pattern: PatternRootGroup
}

export type Pattern =
   | ExactPattern
   | TrianglePattern
   | CyclicPattern
   | GridPattern

// ## Internal

export interface PatternQuantified {
   quantity: number
   width: number
}
export interface PatternWithVisibility {
   visibility: 'visible' | 'hidden'
}

export interface PatternBase extends PatternQuantified, PatternWithVisibility {}

export interface PatternGroup extends PatternBase {
   type: 'group'
   content: PatternElement[]
}

export interface PatternRootGroup extends PatternGroup {
   quantity: 1
}

export interface PatternSet extends PatternBase {
   type: 'set'
   stateSet: number[]
   visibility: 'visible' | 'hidden'
}

export type PatternElement = PatternGroup | PatternSet