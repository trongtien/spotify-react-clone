import TitleBox from "@/components/atoms/TitleBox";
import CardSearchList from "./_components/CardSearchList";
import { searchService } from "@/services/search.service";

const Search = async () => {
  const browses = await searchService.getBowseAll()

  return <div className="w-full flex flex-col gap-6">
    <TitleBox title="Browse all"/>
    <CardSearchList items={browses} />
  </div>;
};

export default Search;
