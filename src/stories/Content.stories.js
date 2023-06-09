import ContentComponent from "../components/ContentComponent";
import "../components/ContentComponent/styles";

export default {
    title: "Content",
    component: ContentComponent,
}
var subtitle = "Test Subtitle"
var content = "Test content"

export const ColorWhiteWithButton = () => <ContentComponent
    subtitle={subtitle} content={content}
/>

export const ColorBlackWithButton = () => <ContentComponent
    subtitle={subtitle} content={content} color="black"
/>

export const ColorWhiteNoButton = () => <ContentComponent
    subtitle={subtitle} content={content} noBtn
/>

export const ColorBlackNoButton = () => <ContentComponent
    subtitle={subtitle} content={content} color="black" noBtn
/>