export default interface UnstructuredTocItem {
  url: string;
  title: string;
  items?: UnstructuredTocItem[];
}
