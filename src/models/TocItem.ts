export default interface TocItem {
  slug?: string;
  title?: string;
  level: number;
  items: TocItem[];
}
