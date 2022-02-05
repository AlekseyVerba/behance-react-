export const changeClassItemsSpeakers = (classSpeakersBlock = "", classSpeakersItem = "", classSpeakersItems = "") => {
    return {
        type: "CHANGE_CLASS_ITEMS_SPEAKERS",
        classSpeakersBlock,
        classSpeakersItem,
        classSpeakersItems
    }
}
