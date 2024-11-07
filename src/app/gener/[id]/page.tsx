import { PageCommon } from "@/types/pageCommon"
import BannerGender from "./_components/GanerBanner"
import ListPlay from "./_components/ListPlay"



const Gener = (commonPage: PageCommon<{ id: string }, {}>) => {
    const { id } = commonPage.params

    return <div className="flex flex-col gap-4">
        <BannerGender id={id} />
        <ListPlay />
    </div>
}

export default Gener