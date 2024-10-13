import Container from "@/components/(shared)/common/container";
import Header from "@/components/(shared)/common/header";
import ProfileInformationBoard from "@/components/(shared)/profile/profileInformationBoard/ProfileInformationBoard";
import ContinueWatchingBoard from "@/components/(shared)/profile/continueWatching/continueWatchingBoard";

const ProfileBoard = () => {
    return (
        <Container>
            <Header/>
            <ProfileInformationBoard/>
            <ContinueWatchingBoard />
        </Container>
    )
}

export default ProfileBoard;