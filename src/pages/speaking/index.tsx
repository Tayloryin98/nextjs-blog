import PageHeader from "@/components/PageHeader";
import BaseContainer from "@/layouts/BaseContainer";
import BaseLayout from "@/layouts/BaseLayout";
import { NextPageWithLayout } from "../_app";


const pageHeader={
    title:'I’ve spoken at events all around the world and been interviewed for many podcasts.',
    summary:'One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions.',
    maxWidth:true
}

const SpeakingPage:NextPageWithLayout=()=>{
    return (
        <BaseContainer>
          <PageHeader header={pageHeader}></PageHeader>       
        </BaseContainer>
    )
}

SpeakingPage.getLayout = function getLayout(page){
    return <BaseLayout>{page}</BaseLayout>
}

export default SpeakingPage