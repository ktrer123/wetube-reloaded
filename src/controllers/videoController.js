let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAT: "2 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 5,
    comments: 2,
    createdAT: "2 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 5,
    comments: 2,
    createdAT: "2 minutes ago",
    views: 59,
    id: 3,
  },
];
export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  console.log("Show video", id);
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `watching ${video.title}`, video });
};
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("UPload");
export const deleteVideo = (req, res) => res.send("Edlete Video");
