export const mentorPayload = {
    sortproperty: "createdAt",
    sortorder: -1,
    offset: 10,
    limit: 5,
    query: {
        critarion: {active : true},
        userFields: "_id email name profile_picture_url",
        addedby: "_id email name",
        lastModifiedBy: "_id email name"
    }
}