export default {
  name: "courseCategory",
  title: "Course Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Category Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
