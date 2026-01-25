export default {
  name: "course",
  title: "Course",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Course Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Course Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "courseCategory",
      title: "Course Category",
      type: "reference",
      to: [{ type: "courseCategory" }],
    },
  ],
};
