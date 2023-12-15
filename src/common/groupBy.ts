export function groupBy<TItem>(groupByFn: (item: TItem) => PropertyKey) {
  type GroupKey = ReturnType<typeof groupByFn>;
  type GroupResult = Record<GroupKey, TItem[]>;

  const reducer = (
    groups: Record<PropertyKey, TItem[]>,
    current: TItem,
    index: number,
    arr: TItem[],
  ): GroupResult => {
    const key = groupByFn(current);
    const group = groups[key] ?? [];

    groups[key] = [...group, current];

    return groups;
  };

  return [reducer, {} as GroupResult] as const;
}
