declare function groupBy<TItem>(groupByFn: (item: TItem) => PropertyKey): readonly [(groups: Record<PropertyKey, TItem[]>, current: TItem, index: number, arr: TItem[]) => Record<PropertyKey, TItem[]>, Record<PropertyKey, TItem[]>];

export { groupBy };
