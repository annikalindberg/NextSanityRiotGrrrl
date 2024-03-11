const project = {
    name: "project",
    title: "Projects",
    type: "document",
    fields: [
      {
        name: "name",
        title: "Name",
        type: "string",
      },
      {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "name" }
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: { hotspot: true }, // to use the hotspot feature of sanity studioi will have to  set this to true and also set the crop feature to true in the image url
        fields: [
          {
            name: "alt",
            title: "Alt",
            type: "string"
          }
        ]
      },
      {
        name: "url",
        title: "URL",
        type: "url"
      },
      {
        name: "content",
        title: "Content",
        type: "array",
        of: [{ type: "block" }]
      }
    ]
  }
  
  export default project;