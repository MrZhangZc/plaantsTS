const C1ImageAPI = {
    images1: [
        { id: "p/1-1", bgImage: require("@images/1.jpg") },
        { id: "p/1-2", bgImage: require("@images/2.jpg") },
        { id: "p/1-3", bgImage: require("@images/3.jpg") },
        { id: "p/1-4", bgImage: require("@images/4.jpg") },
        { id: "p/1-5", bgImage: require("@images/5.jpg")},
        { id: "p/1-6", bgImage: require("@images/6.jpg"), zzc: "none"},
        { id: "p/1-7", bgImage: require("@images/7.jpg"), zzc: "none"},
        { id: "p/1-8", bgImage: require("@images/8.jpg"), zzc: "none"}
    ],
    images2: [
        { id: "p/2-1", bgImage: require("@images/7.jpg") },
        { id: "p/2-2", bgImage: require("@images/6.jpg") },
        { id: "p/2-3", bgImage: require("@images/5.jpg") },
        { id: "p/2-4", bgImage: require("@images/4.jpg") },
        // { id: "p/2-5", bgImage: require("@images/3.jpg") },
        // { id: "p/2-6", bgImage: require("@images/2.jpg"), zzc: "none" },
        // { id: "p/2-7", bgImage: require("@images/1.jpg"), zzc: "none" }
    ],
    all1: function () { return this.images1 },
    all2: function () { return this.images2 },
    get1L: function () { return this.images1.length },
    get2L: function () { return this.images2.length },
}

export default C1ImageAPI